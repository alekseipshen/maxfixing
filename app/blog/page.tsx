import { permanentRedirect } from 'next/navigation';

/**
 * The blog was never launched on this property. redirect() answered 307
 * (temporary), which tells Google to hold onto the URL and keep coming back —
 * and /blog was also listed in sitemap-phase1, so Search Console reported it
 * under "Page with redirect". It is out of the sitemap now and answers 308.
 */
export default function BlogPage() {
  permanentRedirect('/');
}
