import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // NOTE: /_next/ must stay crawlable. Every image is served through /_next/image
  // and the CSS/JS Google needs to render pages lives under /_next/static.
  // Blocking it kept images out of Google Images and degraded rendering.
  const baseUrl = 'https://maxfixing.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
        ],
        crawlDelay: 0.5,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-phase1.xml`,
    ],
  };
}
