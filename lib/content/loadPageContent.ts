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
    const data = yaml.load(raw) as PageContent;
    if (!data || !data.intro) return null;
    return data;
  } catch {
    return null;
  }
}
