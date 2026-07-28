import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface PageContent {
  answer?: string;
  intro?: string;
  localContext?: string;
  commonProblems?: Array<{
    title: string;
    description: string;
  }>;
  whyChooseUs?: string;
  faq?: Array<{
    q: string;
    a: string;
  }>;
  wordCount?: number;
  generatedAt?: string;
}

export function loadPageContent(params: {
  city?: string;
  service?: string;
  brand?: string;
}): PageContent | null {
  const contentDir = path.join(process.cwd(), 'content');
  let filePath: string | null = null;

  if (params.city && params.service) {
    filePath = path.join(contentDir, 'cities', params.city, 'services', `${params.service}.yaml`);
  } else if (params.city && params.brand) {
    filePath = path.join(contentDir, 'cities', params.city, 'brands', `${params.brand}.yaml`);
  } else if (params.brand && params.service) {
    filePath = path.join(contentDir, 'brands', params.brand, 'services', `${params.service}.yaml`);
  } else if (params.city) {
    filePath = path.join(contentDir, 'cities', params.city, 'seo.yaml');
  } else if (params.brand) {
    filePath = path.join(contentDir, 'brands', params.brand, 'seo.yaml');
  }

  if (!filePath) return null;

  try {
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = yaml.load(raw);
    if (!data || typeof data !== 'object') return null;
    const normalized = normalize(data as Record<string, unknown>);
    if (!normalized.intro) return null;
    return normalized;
  } catch {
    return null;
  }
}

/**
 * The content pipeline has emitted a few different shapes over time. 31 of the
 * ~1,000 files under content/cities deviate from the interface above, and one of
 * them took a page down: rancho-santa-margarita/dishwasher.yaml has
 * commonProblems as a paragraph of prose, so SEOContent's `.length > 0` guard
 * passed and the following `.map` threw — a hard 500 on a URL that is in the
 * sitemap. Rather than hand-edit files the pipeline will regenerate, coerce the
 * known variants here and drop anything still unusable.
 */
function normalize(data: Record<string, unknown>): PageContent {
  const out: PageContent = { ...(data as PageContent) };

  // Some files name the problem list `problems` instead of `commonProblems`.
  const problems = Array.isArray(data.commonProblems)
    ? data.commonProblems
    : Array.isArray(data.problems)
      ? data.problems
      : undefined;

  out.commonProblems = problems?.filter(
    (p): p is { title: string; description: string } =>
      !!p && typeof p === 'object' && 'title' in p && 'description' in p
  );

  // Some files use question/answer where the components expect q/a.
  out.faq = Array.isArray(data.faq)
    ? data.faq
        .map((item) => {
          if (!item || typeof item !== 'object') return null;
          const f = item as Record<string, unknown>;
          const q = typeof f.q === 'string' ? f.q : typeof f.question === 'string' ? f.question : null;
          const a = typeof f.a === 'string' ? f.a : typeof f.answer === 'string' ? f.answer : null;
          return q && a ? { q, a } : null;
        })
        .filter((item): item is { q: string; a: string } => item !== null)
    : undefined;

  return out;
}
