import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maxfixing.com';

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/sitemap-phase1.xml`,
      lastModified: new Date(),
    },
  ];

  return routes;
}
