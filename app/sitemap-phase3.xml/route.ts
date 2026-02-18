import { MetadataRoute } from 'next';
import { appliances, commercialAppliances } from '@/lib/data/appliances';
import { brands } from '@/lib/data/brands';

/**
 * PHASE 3 SITEMAP (Month 4-6)
 * ~500 pages: Remaining Brand+Appliance
 * 
 * Includes:
 * - Brand+Appliance for remaining 41 brands × 12 appliances — 492
 * 
 * Total: ~492 pages
 * 
 * Prerequisites: Phase 2 must be 70%+ indexed
 */
export async function GET() {
  const baseUrl = 'https://maxfixing.com';
  const now = new Date().toISOString();

  // Remaining brands (31-71) not covered in Phase 2
  const remainingBrands = brands.slice(30);

  const routes = [
    // Brand + Appliance for remaining brands (~492 pages)
    ...remainingBrands.flatMap((brand) =>
      appliances.map((appliance) => ({
        url: `${baseUrl}/brands/${brand.slug}-repair/services/${appliance.slug}-repair`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.65,
      }))
    ),
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
