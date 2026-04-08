import fs from 'fs';
import path from 'path';

/**
 * CONTENT SITEMAP — only pages with unique SEO content (YAML files)
 * Dynamically scans content/cities/{city}/services/{service}.yaml
 * Submit to GSC to prioritize indexation of enriched pages
 */
export async function GET() {
  const baseUrl = 'https://maxfixing.com';
  const contentDir = path.join(process.cwd(), 'content', 'cities');

  const urls: { loc: string; lastmod: string }[] = [];

  if (fs.existsSync(contentDir)) {
    const cityDirs = fs.readdirSync(contentDir, { withFileTypes: true })
      .filter((d) => d.isDirectory());

    for (const cityDir of cityDirs) {
      const servicesDir = path.join(contentDir, cityDir.name, 'services');
      if (!fs.existsSync(servicesDir)) continue;

      const yamlFiles = fs.readdirSync(servicesDir)
        .filter((f) => f.endsWith('.yaml') && f !== 'index.yaml');

      for (const file of yamlFiles) {
        const service = file.replace('.yaml', '');

        urls.push({
          loc: `${baseUrl}/cities/${cityDir.name}/services/${service}-repair`,
          lastmod: new Date().toISOString().split('T')[0],
        });
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
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
