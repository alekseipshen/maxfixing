import { MetadataRoute } from 'next';
import { appliances, commercialAppliances } from '@/lib/data/appliances';
import { brands } from '@/lib/data/brands';
import { cities } from '@/lib/data/cities';

/**
 * PHASE 1 SITEMAP — ~1,000 pages
 * Diverse mix of cities, brands, appliances for maximum uniqueness
 *
 * Includes:
 * - Core pages (homepage, service-areas, blog, commercial) — 4
 * - All 12 service/appliance pages — 12
 * - All city pages — variable
 * - All brand pages — 71
 * - Commercial appliance pages — 22
 * - Legal pages — 2
 * - City + Appliance for priority cities × 12 appliances
 *
 * Strategy: Submit to Google Search Console
 * Wait for 80%+ indexation before moving to Phase 2
 */

// Priority LA/OC cities for Phase 1 City+Appliance pages
const PHASE1_CITY_APPLIANCE_SLUGS = new Set([
  // Los Angeles area
  'glendale', 'pasadena', 'burbank', 'santa-monica', 'beverly-hills',
  'torrance', 'santa-clarita', 'encino', 'sherman-oaks', 'woodland-hills',
  'culver-city', 'west-hollywood', 'arcadia', 'west-covina', 'inglewood',
  'redondo-beach', 'northridge', 'van-nuys', 'tarzana', 'malibu',
  'brentwood', 'monrovia', 'pomona', 'hawthorne', 'manhattan-beach',
  'el-segundo', 'reseda', 'canoga-park', 'granada-hills', 'westwood',
  'mar-vista', 'covina', 'glendora', 'azusa', 'gardena',
  'hermosa-beach',
  // Orange County area
  'anaheim', 'irvine', 'huntington-beach', 'fullerton', 'santa-ana',
  'mission-viejo', 'orange', 'costa-mesa', 'tustin', 'corona',
]);

export async function GET() {
  const baseUrl = 'https://maxfixing.com';
  const now = new Date().toISOString();

  // Filter out test cities
  const realCities = cities.filter(c => c.county !== 'TEST');

  // Cities that get City+Appliance pages in Phase 1
  const phase1Cities = realCities.filter(c => PHASE1_CITY_APPLIANCE_SLUGS.has(c.slug));

  const routes: MetadataRoute.Sitemap = [
    // ═══════════════════════════════════════════
    // CORE PAGES (highest priority)
    // ═══════════════════════════════════════════
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // ═══════════════════════════════════════════
    // ALL SERVICE PAGES (12 appliance types)
    // ═══════════════════════════════════════════
    ...appliances.map((appliance) => ({
      url: `${baseUrl}/services/${appliance.slug}-repair`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // ═══════════════════════════════════════════
    // ALL CITY PAGES (real cities, no test)
    // ═══════════════════════════════════════════
    ...realCities.map((city) => ({
      url: `${baseUrl}/cities/${city.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),

    // ═══════════════════════════════════════════
    // ALL BRAND PAGES (71 brands)
    // ═══════════════════════════════════════════
    ...brands.map((brand) => ({
      url: `${baseUrl}/brands/${brand.slug}-repair`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // ═══════════════════════════════════════════
    // CITY + APPLIANCE for priority cities
    // LA/OC cities × all 12 appliance types
    // ═══════════════════════════════════════════
    ...phase1Cities.flatMap((city) =>
      appliances.map((appliance) => ({
        url: `${baseUrl}/cities/${city.slug}/services/${appliance.slug}-repair`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
      }))
    ),

    // ═══════════════════════════════════════════
    // COMMERCIAL APPLIANCE PAGES (22 pages)
    // ═══════════════════════════════════════════
    ...commercialAppliances.map((appliance) => {
      const slug = appliance.slug.replace('commercial-', '');
      return {
        url: `${baseUrl}/commercial/${slug}-repair`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };
    }),

    // ═══════════════════════════════════════════
    // LEGAL PAGES
    // ═══════════════════════════════════════════
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
