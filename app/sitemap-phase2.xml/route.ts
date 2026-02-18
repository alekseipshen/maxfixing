import { MetadataRoute } from 'next';
import { appliances } from '@/lib/data/appliances';
import { brands } from '@/lib/data/brands';
import { cities } from '@/lib/data/cities';

/**
 * PHASE 2 SITEMAP (Month 2-3)
 * Remaining City+Appliance + Brand+Appliance
 *
 * Includes:
 * - City+Appliance for remaining cities × 12 appliances
 * - Brand+Appliance for top 30 brands × 12 appliances — 360
 *
 * Prerequisites: Phase 1 must be 80%+ indexed
 */

// Same priority cities from Phase 1 — skip these in Phase 2
const PHASE1_CITY_SLUGS = new Set([
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

  // Remaining cities not in Phase 1 (exclude test cities)
  const remainingCities = cities.filter(
    c => c.county !== 'TEST' && !PHASE1_CITY_SLUGS.has(c.slug)
  );

  // Top 30 brands for Brand+Appliance
  const topBrands = brands.slice(0, 30);

  const routes: MetadataRoute.Sitemap = [
    // City + Appliance for remaining cities
    ...remainingCities.flatMap((city) =>
      appliances.map((appliance) => ({
        url: `${baseUrl}/cities/${city.slug}/services/${appliance.slug}-repair`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
      }))
    ),

    // Brand + Appliance for top 30 brands (360 pages)
    ...topBrands.flatMap((brand) =>
      appliances.map((appliance) => ({
        url: `${baseUrl}/brands/${brand.slug}-repair/services/${appliance.slug}-repair`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
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
