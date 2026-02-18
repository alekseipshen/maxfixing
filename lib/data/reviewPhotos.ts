/**
 * Review Photos Data & Selection Logic
 * 
 * Photos are real customer repair photos organized by:
 * - Service type (fridge, washer, dryer, dishwasher, oven, wine)
 * - Brand (samsung, lg, whirlpool)
 * - Elite category (sub-zero, viking, thermador, etc.)
 */

export interface ReviewPhoto {
  src: string;
  service: string;      // base service: fridge, washer, dryer, dishwasher, oven, wine
  brand?: string;       // specific brand: samsung, lg, whirlpool, viking
  elite: boolean;       // elite/luxury appliance photo
}

// All 97 photos cataloged
export const ALL_REVIEW_PHOTOS: ReviewPhoto[] = [
  // === DISHWASHER (12) ===
  { src: '/reviews/dishwasher1.webp', service: 'dishwasher', elite: false },
  { src: '/reviews/dishwasher2.webp', service: 'dishwasher', elite: false },
  { src: '/reviews/dishwasher3.webp', service: 'dishwasher', elite: false },
  { src: '/reviews/dishwasher4.webp', service: 'dishwasher', elite: false },
  { src: '/reviews/dishwasher5.webp', service: 'dishwasher', elite: false },
  { src: '/reviews/dishwasher6.webp', service: 'dishwasher', elite: false },
  { src: '/reviews/dishwasher7.webp', service: 'dishwasher', elite: false },
  { src: '/reviews/dishwasher8.webp', service: 'dishwasher', elite: false },
  { src: '/reviews/dishwasher9.webp', service: 'dishwasher', elite: false },
  { src: '/reviews/dishwasher10.webp', service: 'dishwasher', elite: false },
  { src: '/reviews/dishwasher11.webp', service: 'dishwasher', elite: false },
  { src: '/reviews/dishwasher12.webp', service: 'dishwasher', elite: false },

  // === DRYER (14) ===
  { src: '/reviews/dryer1.webp', service: 'dryer', elite: false },
  { src: '/reviews/dryer2.webp', service: 'dryer', elite: false },
  { src: '/reviews/dryer3.webp', service: 'dryer', elite: false },
  { src: '/reviews/dryer4.webp', service: 'dryer', elite: false },
  { src: '/reviews/dryer5.webp', service: 'dryer', elite: false },
  { src: '/reviews/dryer6.webp', service: 'dryer', elite: false },
  { src: '/reviews/dryer7.webp', service: 'dryer', elite: false },
  { src: '/reviews/dryer8.webp', service: 'dryer', elite: false },
  { src: '/reviews/dryer9.webp', service: 'dryer', elite: false },
  { src: '/reviews/dryer10.webp', service: 'dryer', elite: false },
  { src: '/reviews/dryer11.webp', service: 'dryer', elite: false },
  { src: '/reviews/dryer12_lg.webp', service: 'dryer', brand: 'lg', elite: false },
  { src: '/reviews/dryer13_lg.webp', service: 'dryer', brand: 'lg', elite: false },
  { src: '/reviews/dryer14_lg.webp', service: 'dryer', brand: 'lg', elite: false },

  // === FRIDGE (30) ===
  { src: '/reviews/fridge1.webp', service: 'fridge', elite: false },
  { src: '/reviews/fridge2.webp', service: 'fridge', elite: false },
  { src: '/reviews/fridge2_lg.webp', service: 'fridge', brand: 'lg', elite: false },
  { src: '/reviews/fridge3.webp', service: 'fridge', elite: false },
  { src: '/reviews/fridge4.webp', service: 'fridge', elite: false },
  { src: '/reviews/fridge5.webp', service: 'fridge', elite: false },
  { src: '/reviews/fridge6_elite.webp', service: 'fridge', elite: true },
  { src: '/reviews/fridge7.webp', service: 'fridge', elite: false },
  { src: '/reviews/fridge8.webp', service: 'fridge', elite: false },
  { src: '/reviews/fridge9.webp', service: 'fridge', elite: false },
  { src: '/reviews/fridge10.webp', service: 'fridge', elite: false },
  { src: '/reviews/fridge11.webp', service: 'fridge', elite: false },
  { src: '/reviews/fridge12.webp', service: 'fridge', elite: false },
  { src: '/reviews/fridge13.webp', service: 'fridge', elite: false },
  { src: '/reviews/fridge14_elite.webp', service: 'fridge', elite: true },
  { src: '/reviews/fridge15_elite.webp', service: 'fridge', elite: true },
  { src: '/reviews/fridge16_elite.webp', service: 'fridge', elite: true },
  { src: '/reviews/fridge17_elite.webp', service: 'fridge', elite: true },
  { src: '/reviews/fridge18_whirpool.webp', service: 'fridge', brand: 'whirlpool', elite: false },
  { src: '/reviews/fridge19_elite.webp', service: 'fridge', elite: true },
  { src: '/reviews/fridge20_samsung.webp', service: 'fridge', brand: 'samsung', elite: false },
  { src: '/reviews/fridge21_samsung.webp', service: 'fridge', brand: 'samsung', elite: false },
  { src: '/reviews/fridge22_lg.webp', service: 'fridge', brand: 'lg', elite: false },
  { src: '/reviews/fridge23_whirpool.webp', service: 'fridge', brand: 'whirlpool', elite: false },
  { src: '/reviews/fridge24_samsung.webp', service: 'fridge', brand: 'samsung', elite: false },
  { src: '/reviews/fridge25_samsung.webp', service: 'fridge', brand: 'samsung', elite: false },
  { src: '/reviews/fridge26_lg.webp', service: 'fridge', brand: 'lg', elite: false },
  { src: '/reviews/fridge27_samsung.webp', service: 'fridge', brand: 'samsung', elite: false },
  { src: '/reviews/fridge28_elite.webp', service: 'fridge', elite: true },
  { src: '/reviews/fridge29_elite.webp', service: 'fridge', elite: true },
  { src: '/reviews/fridge30_elite.webp', service: 'fridge', elite: true },

  // === OVEN (25) ===
  { src: '/reviews/oven1.webp', service: 'oven', elite: false },
  { src: '/reviews/oven2.webp', service: 'oven', elite: false },
  { src: '/reviews/oven3.webp', service: 'oven', elite: false },
  { src: '/reviews/oven4.webp', service: 'oven', elite: false },
  { src: '/reviews/oven5.webp', service: 'oven', elite: false },
  { src: '/reviews/oven6.webp', service: 'oven', elite: false },
  { src: '/reviews/oven7.webp', service: 'oven', elite: false },
  { src: '/reviews/oven8.webp', service: 'oven', elite: false },
  { src: '/reviews/oven9.webp', service: 'oven', elite: false },
  { src: '/reviews/oven10.webp', service: 'oven', elite: false },
  { src: '/reviews/oven11.webp', service: 'oven', elite: false },
  { src: '/reviews/oven12_elite_viking.webp', service: 'oven', brand: 'viking', elite: true },
  { src: '/reviews/oven13.webp', service: 'oven', elite: false },
  { src: '/reviews/oven14_elite_viking.webp', service: 'oven', brand: 'viking', elite: true },
  { src: '/reviews/oven15.webp', service: 'oven', elite: false },
  { src: '/reviews/oven16.webp', service: 'oven', elite: false },
  { src: '/reviews/oven17_elite.webp', service: 'oven', elite: true },
  { src: '/reviews/oven18_elite.webp', service: 'oven', elite: true },
  { src: '/reviews/oven19_elite.webp', service: 'oven', elite: true },
  { src: '/reviews/oven20_elite.webp', service: 'oven', elite: true },
  { src: '/reviews/oven21_elite.webp', service: 'oven', elite: true },
  { src: '/reviews/oven22_elite.webp', service: 'oven', elite: true },
  { src: '/reviews/oven23_elite_viking.webp', service: 'oven', brand: 'viking', elite: true },
  { src: '/reviews/oven24_elite_viking.webp', service: 'oven', brand: 'viking', elite: true },

  // === WASHER (14) ===
  { src: '/reviews/washer1.webp', service: 'washer', elite: false },
  { src: '/reviews/washer2.webp', service: 'washer', elite: false },
  { src: '/reviews/washer3.webp', service: 'washer', elite: false },
  { src: '/reviews/washer4.webp', service: 'washer', elite: false },
  { src: '/reviews/washer5.webp', service: 'washer', elite: false },
  { src: '/reviews/washer6.webp', service: 'washer', elite: false },
  { src: '/reviews/washer7.webp', service: 'washer', elite: false },
  { src: '/reviews/washer8.webp', service: 'washer', elite: false },
  { src: '/reviews/washer9.webp', service: 'washer', elite: false },
  { src: '/reviews/washer10.webp', service: 'washer', elite: false },
  { src: '/reviews/washer11_samsung.webp', service: 'washer', brand: 'samsung', elite: false },
  { src: '/reviews/washer12_samsung.webp', service: 'washer', brand: 'samsung', elite: false },
  { src: '/reviews/washer13_whirpool.webp', service: 'washer', brand: 'whirlpool', elite: false },
  { src: '/reviews/washer14_lg.webp', service: 'washer', brand: 'lg', elite: false },

  // === WINE (2) ===
  { src: '/reviews/wine1.webp', service: 'wine', elite: false },
  { src: '/reviews/wine2.webp', service: 'wine', elite: false },
];

// Elite/luxury brands list
const ELITE_BRANDS = [
  'sub-zero', 'viking', 'thermador', 'wolf', 'miele',
  'gaggenau', 'dacor', 'monogram', 'jenn-air', 'jennair',
  'fisher-paykel', 'cafe', 'la-cornue', 'bertazzoni', 'smeg'
];

// Map appliance slugs to photo service categories
const APPLIANCE_TO_SERVICE: Record<string, string> = {
  'refrigerator': 'fridge',
  'washer': 'washer',
  'dryer': 'dryer',
  'dishwasher': 'dishwasher',
  'oven': 'oven',
  'range': 'oven',
  'cooktop': 'oven',
  'freezer': 'fridge',
  'double-oven': 'oven',
  'wine-cooler': 'wine',
  'range-hood': '',      // no photos, fallback
  'ice-maker': 'fridge', // closest match
};

// Map brand slugs to photo brand tags
const BRAND_TO_PHOTO_TAG: Record<string, string> = {
  'samsung': 'samsung',
  'lg': 'lg',
  'whirlpool': 'whirlpool',
  'viking': 'viking',
};

/** Deterministic shuffle using a seed string */
function seededShuffle<T>(arr: T[], seed: string): T[] {
  const result = [...arr];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash |= 0;
  }
  for (let i = result.length - 1; i > 0; i--) {
    hash = ((hash << 5) - hash) + i;
    hash |= 0;
    const j = Math.abs(hash) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

interface PhotoSelectionParams {
  appliance?: string;  // appliance slug (e.g., 'refrigerator', 'washer')
  brand?: string;      // brand slug (e.g., 'samsung', 'lg', 'sub-zero')
  min?: number;        // min photos (default 10)
  max?: number;        // max photos (default 20)
}

/**
 * Select review photos for a page based on context:
 * 
 * 1. Service page → photos of that service type
 * 2. Service + Brand → brand photos first, then other service photos
 * 3. Elite brand → elite photos first, then regular service photos
 * 4. Fallback → random mix from all services
 */
export function getReviewPhotos({ appliance, brand, min = 10, max = 20 }: PhotoSelectionParams): string[] {
  const serviceCategory = appliance ? APPLIANCE_TO_SERVICE[appliance] || '' : '';
  const isEliteBrand = brand ? ELITE_BRANDS.includes(brand) : false;
  const photoBrandTag = brand ? BRAND_TO_PHOTO_TAG[brand] : undefined;
  
  // Seed for deterministic results per page
  const seed = `${appliance || 'all'}-${brand || 'none'}`;
  
  let selected: ReviewPhoto[] = [];
  
  if (serviceCategory) {
    // We have a specific service (appliance) context
    const servicePhotos = ALL_REVIEW_PHOTOS.filter(p => p.service === serviceCategory);
    
    if (isEliteBrand) {
      // ELITE BRAND + SERVICE: elite photos of this service first, then regular
      const elitePhotos = servicePhotos.filter(p => p.elite);
      const regularPhotos = servicePhotos.filter(p => !p.elite);
      selected = [...seededShuffle(elitePhotos, seed), ...seededShuffle(regularPhotos, seed)];
    } else if (photoBrandTag) {
      // SPECIFIC BRAND + SERVICE: brand-tagged photos first, then other service photos
      const brandPhotos = servicePhotos.filter(p => p.brand === photoBrandTag);
      const otherPhotos = servicePhotos.filter(p => p.brand !== photoBrandTag);
      selected = [...seededShuffle(brandPhotos, seed), ...seededShuffle(otherPhotos, seed)];
    } else {
      // SERVICE ONLY: all photos of this service, shuffled
      selected = seededShuffle(servicePhotos, seed);
    }
  } else if (isEliteBrand) {
    // ELITE BRAND ONLY (no specific appliance): elite photos first from ALL services
    const elitePhotos = ALL_REVIEW_PHOTOS.filter(p => p.elite);
    const regularPhotos = ALL_REVIEW_PHOTOS.filter(p => !p.elite);
    selected = [...seededShuffle(elitePhotos, seed), ...seededShuffle(regularPhotos, seed)];
  } else if (photoBrandTag) {
    // REGULAR BRAND ONLY (no specific appliance): brand photos first, then others
    const brandPhotos = ALL_REVIEW_PHOTOS.filter(p => p.brand === photoBrandTag);
    const otherPhotos = ALL_REVIEW_PHOTOS.filter(p => p.brand !== photoBrandTag);
    selected = [...seededShuffle(brandPhotos, seed), ...seededShuffle(otherPhotos, seed)];
  }
  
  // If not enough photos, add from other services (diverse mix)
  if (selected.length < min) {
    const usedSrcs = new Set(selected.map(p => p.src));
    const otherPhotos = ALL_REVIEW_PHOTOS.filter(p => !usedSrcs.has(p.src));
    
    // Create a diverse mix: interleave from different services
    const byService: Record<string, ReviewPhoto[]> = {};
    for (const p of seededShuffle(otherPhotos, seed)) {
      if (!byService[p.service]) byService[p.service] = [];
      byService[p.service].push(p);
    }
    
    const services = Object.keys(byService);
    const diverseMix: ReviewPhoto[] = [];
    let idx = 0;
    while (diverseMix.length < min - selected.length) {
      let added = false;
      for (const svc of services) {
        if (idx < byService[svc].length) {
          diverseMix.push(byService[svc][idx]);
          added = true;
          if (diverseMix.length >= min - selected.length) break;
        }
      }
      if (!added) break;
      idx++;
    }
    
    selected = [...selected, ...diverseMix];
  }
  
  // Trim to max
  const result = selected.slice(0, max);
  
  return result.map(p => p.src);
}

/** Check if a brand is an elite/luxury brand */
export function isEliteBrand(brandSlug: string): boolean {
  return ELITE_BRANDS.includes(brandSlug);
}
