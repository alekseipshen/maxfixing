import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Pool } from 'pg';
import {
  getLeadNotificationHTML,
  getLeadNotificationText,
  getCustomerConfirmationHTML,
  getCustomerConfirmationText,
} from '@/lib/email-templates';

interface LeadData {
  name: string;
  phone: string;
  email: string;
  message?: string;
  recaptchaToken: string;
}

const LEAD_SITE = 'maxfixing';

// schema.table — must be set in env, validated at module load
const LEADS_TABLE = process.env.LEADS_TABLE;
const TABLE_RE = /^[a-z_][a-z0-9_]*\.[a-z_][a-z0-9_]*$/i;
if (LEADS_TABLE && !TABLE_RE.test(LEADS_TABLE)) {
  throw new Error(`Invalid LEADS_TABLE format: ${LEADS_TABLE}`);
}

// Singleton pool across warm invocations.
// We strip ?sslmode=... from the connection string because `pg` parses it from
// the URL and enforces cert verification, overriding our explicit ssl option.
// Railway's PG proxy uses a self-signed cert chain.
let pool: Pool | null = null;
function getPool(): Pool | null {
  if (!pool && process.env.DATABASE_URL) {
    const cleaned = process.env.DATABASE_URL.replace(/([?&])sslmode=[^&]*(&|$)/g, (_m, p1, p2) =>
      p1 === '?' && p2 === '' ? '' : p1 === '?' ? '?' : p2,
    );
    pool = new Pool({
      connectionString: cleaned,
      ssl: { rejectUnauthorized: false },
      max: 3,
      idleTimeoutMillis: 10_000,
    });
  }
  return pool;
}

async function insertLead(
  request: NextRequest,
  data: LeadData,
  meta: { source: string; page: string; recaptchaScore: number },
): Promise<void> {
  const p = getPool();
  if (!p || !LEADS_TABLE) return;
  const ua = request.headers.get('user-agent');
  const xff = request.headers.get('x-forwarded-for');
  const ip = xff ? xff.split(',')[0].trim() : null;
  const extra: Record<string, unknown> = {};
  if (meta.recaptchaScore != null) extra.recaptchaScore = meta.recaptchaScore;
  const extraJson = Object.keys(extra).length ? JSON.stringify(extra) : null;
  await p.query(
    `INSERT INTO ${LEADS_TABLE}
       (name, phone, email, service_slug, service_name, city_slug, city_name, message, source, page, user_agent, ip, site, extra)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14::jsonb)`,
    [
      data.name,
      data.phone,
      data.email || null,
      null,
      null,
      null,
      null,
      data.message || null,
      meta.source || null,
      meta.page || null,
      ua,
      ip,
      LEAD_SITE,
      extraJson,
    ],
  );
}

// Helper function to add delay between emails
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to send emails (optimized with parallel sending)
async function sendEmails(data: {
  name: string;
  phone: string;
  email: string;
  message?: string;
  source?: string;
  url?: string;
  timestamp?: string;
}): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const emailRecipient1 = process.env.EMAIL_RECIPIENT_1;
  const emailRecipient2 = process.env.EMAIL_RECIPIENT_2;
  const emailFromAddress = process.env.EMAIL_FROM || 'noreply@maxfixing.com';

  if (!resendApiKey || (!emailRecipient1 && !emailRecipient2)) {
    console.log('[EMAIL] Skipping - no API key or recipients configured');
    return false;
  }

  const resend = new Resend(resendApiKey);

  // Prepare email promises for parallel sending
  const ownerEmails: Promise<boolean>[] = [];

  // Send to first recipient
  if (emailRecipient1) {
    ownerEmails.push(
      resend.emails.send({
        from: `MaxFixing <${emailFromAddress}>`,
        to: emailRecipient1,
        subject: `🔔 New Lead: ${data.name} - Max Fixing`,
        html: getLeadNotificationHTML(data),
        text: getLeadNotificationText(data),
      }).then((r) => {
        if (r.error) {
          console.error('[EMAIL] Error:', r.error);
          return false;
        }
        console.log(`[EMAIL] Sent to ${emailRecipient1}`);
        return true;
      }).catch((emailError) => {
        console.error('[EMAIL] Error:', emailError);
        return false;
      })
    );
  }

  // Send to second recipient (in parallel with first)
  if (emailRecipient2) {
    // Small delay to avoid rate limiting
    ownerEmails.push(
      delay(1000).then(() =>
        resend.emails.send({
          from: `MaxFixing <${emailFromAddress}>`,
          to: emailRecipient2,
          subject: `🔔 New Lead: ${data.name} - Max Fixing`,
          html: getLeadNotificationHTML(data),
          text: getLeadNotificationText(data),
        }).then((r) => {
          if (r.error) {
            console.error('[EMAIL] Error:', r.error);
            return false;
          }
          console.log(`[EMAIL] Sent to ${emailRecipient2}`);
          return true;
        })
      ).catch((emailError) => {
        console.error('[EMAIL] Error:', emailError);
        return false;
      })
    );
  }

  // Wait for both owner emails to complete
  const results = await Promise.all(ownerEmails);
  const ownerDelivered = results.some(Boolean);

  // Send confirmation email to customer
  try {
    // Small delay before customer email
    await delay(1000);
    await resend.emails.send({
      from: `MaxFixing <${emailFromAddress}>`,
      to: data.email,
      subject: '✅ Your Service Request - Max Fixing',
      html: getCustomerConfirmationHTML(data.name),
      text: getCustomerConfirmationText(data.name),
    });
    console.log(`[EMAIL] Confirmation sent to customer: ${data.email}`);
  } catch (emailError) {
    console.error('[EMAIL] Error:', emailError);
  }

  return ownerDelivered;
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // Validate required fields
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    let recaptchaScore = 1.0; // Default score when reCAPTCHA is disabled

    // Verify reCAPTCHA token only if configured and token is not 'bypass'
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret && data.recaptchaToken && data.recaptchaToken !== 'bypass') {
      try {
        const recaptchaResponse = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${data.recaptchaToken}`,
          { method: 'POST' }
        );

        const recaptchaData = await recaptchaResponse.json();

        // Check reCAPTCHA score (minimum 0.3)
        if (!recaptchaData.success || recaptchaData.score < 0.3) {
          console.log('Low reCAPTCHA score:', recaptchaData.score);
          // Save as potential bot, but don't send to Google Ads
          return NextResponse.json(
            { error: 'Failed verification' },
            { status: 400 }
          );
        }

        recaptchaScore = recaptchaData.score;
      } catch (error) {
        console.log('reCAPTCHA verification failed, proceeding without it');
      }
    }

    // Prepare lead data for n8n webhook
    const leadPayload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message || '',
      source: 'website',
      timestamp: new Date().toISOString(),
      recaptchaScore: recaptchaScore,
      url: request.headers.get('referer') || 'unknown',
    };

    // Send to n8n webhook for processing
    let webhookDelivered = false;
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadPayload),
        });
        webhookDelivered = res.ok;
        if (!res.ok) console.error('[N8N] Webhook error: status', res.status);
      } catch (error) {
        console.error('[N8N] Webhook error:', error);
      }
    }

    // ============================================
    // Send email notifications (optimized with parallel sending)
    // ============================================

    // Prepare email data
    const emailData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
      source: 'Website - Max Fixing',
      url: leadPayload.url,
      timestamp: leadPayload.timestamp,
    };

    // Send emails (owners in parallel, then customer) alongside best-effort PG archive
    const [emailResult, pgResult] = await Promise.allSettled([
      sendEmails(emailData),
      insertLead(request, data, {
        source: leadPayload.source,
        page: leadPayload.url,
        recaptchaScore,
      }),
    ]);

    if (pgResult.status === 'rejected') {
      console.error('pg insert failed:', pgResult.reason);
    }

    const emailDelivered = emailResult.status === 'fulfilled' && emailResult.value;
    if (!webhookDelivered && !emailDelivered) {
      return NextResponse.json(
        { error: 'Notification delivery failed' },
        { status: 502 }
      );
    }

    // Return success to client
    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}




