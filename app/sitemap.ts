import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maxfixing.com';

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/sitemap-phase1.xml`,
      lastModified: new Date(),
    },

    // Content sitemap: ACTIVE — only pages with unique SEO content
    {
      url: `${baseUrl}/sitemap-content.xml`,
      lastModified: new Date(),
    },
  ];

  return routes;
}
