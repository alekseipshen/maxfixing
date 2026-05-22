// Edge Middleware for Google Ads Geolocation
// Purpose: Intercept ad traffic and rewrite URLs to add city-specific path

import { NextRequest, NextResponse } from 'next/server';
import { geolocation } from '@vercel/edge';

export const config = {
  matcher: [
    '/services/:path*',
    '/brands/:path*',
    '/cities/:city*/services/:path*',
    '/cities/:city*/brands/:path*',
  ],
};

// ============================================
// CITY MAPPING — South LA County + Orange County only
// Service zone confirmed by client 2026-03-10: south of Downtown LA only.
// North LA (SF Valley, SG Valley, West LA) intentionally NOT mapped —
// such visitors fall through to FALLBACK_CITY_SLUG.
// ============================================
const FALLBACK_CITY_SLUG = 'anaheim';

const CITY_NAME_TO_SLUG: Record<string, string> = {
  // Orange County
  'Anaheim': 'anaheim',
  'Anaheim Hills': 'anaheim',
  'Santa Ana': 'santa-ana',
  'Irvine': 'irvine',
  'Huntington Beach': 'huntington-beach',
  'Mission Viejo': 'mission-viejo',
  'Fullerton': 'fullerton',
  'Orange': 'orange',
  'Costa Mesa': 'costa-mesa',
  'Tustin': 'tustin',
  'North Tustin': 'tustin',
  'Corona': 'corona',
  'Lake Forest': 'lake-forest',
  'Laguna Niguel': 'laguna-niguel',
  'Newport Beach': 'newport-beach',
  'Buena Park': 'buena-park',
  'Garden Grove': 'garden-grove',
  'Westminster': 'westminster',
  'Yorba Linda': 'yorba-linda',
  'Laguna Beach': 'laguna-beach',
  'San Clemente': 'san-clemente',
  'Dana Point': 'dana-point',
  'Aliso Viejo': 'aliso-viejo',
  'Rancho Santa Margarita': 'rancho-santa-margarita',
  'Cypress': 'cypress',
  'La Habra': 'la-habra',
  'Placentia': 'placentia',
  'Brea': 'brea',

  // South LA County (adjacent to OC, in Google Ads ZIP zone)
  'Carson': 'carson',
  'Compton': 'compton',
  'Downey': 'downey',
  'Gardena': 'gardena',
  'Hawthorne': 'hawthorne',
  'Inglewood': 'inglewood',
  'Lakewood': 'lakewood',
  'Manhattan Beach': 'manhattan-beach',
  'Redondo Beach': 'redondo-beach',
  'Torrance': 'torrance',

  // South-adjacent LA cities that Vercel commonly returns — map to nearest covered slug
  'Long Beach': 'lakewood',
  'Norwalk': 'downey',
  'Cerritos': 'cypress',
  'Bellflower': 'lakewood',
  'Paramount': 'downey',
  'Lynwood': 'downey',
  'Whittier': 'la-habra',
  'La Mirada': 'la-habra',
  'Pico Rivera': 'downey',
  'Santa Fe Springs': 'la-habra',
  'Hacienda Heights': 'la-habra',

  // Downtown LA and unmapped LA → south fallback
  'Los Angeles': FALLBACK_CITY_SLUG,
};

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Check if this is ad traffic
  const utmSource = searchParams.get('utm_source');
  const utmMedium = searchParams.get('utm_medium');

  if (utmSource !== 'google' || utmMedium !== 'cpc') {
    return NextResponse.next();
  }

  // Extract fallback city from URL (if already has /cities/[city])
  let fallbackCitySlug = FALLBACK_CITY_SLUG;

  const citiesMatch = pathname.match(/^\/cities\/([^\/]+)/);
  if (citiesMatch) {
    fallbackCitySlug = citiesMatch[1];
  }

  // Get user's geolocation
  const geo = geolocation(request);
  const cityName = geo.city;

  console.log('[GEO-MIDDLEWARE] Detected location:', {
    city: cityName,
    region: geo.region,
    country: geo.country,
    fallback: fallbackCitySlug,
  });

  // Map city name to slug
  let citySlug = fallbackCitySlug;

  if (cityName) {
    let detectedSlug = CITY_NAME_TO_SLUG[cityName];

    if (!detectedSlug) {
      const cityNameLower = cityName.toLowerCase();
      const matchedKey = Object.keys(CITY_NAME_TO_SLUG).find(
        key => key.toLowerCase() === cityNameLower
      );
      if (matchedKey) {
        detectedSlug = CITY_NAME_TO_SLUG[matchedKey];
      }
    }

    if (detectedSlug) {
      citySlug = detectedSlug;
    }
  }

  // Rewrite URL to add/update city path
  let newPathname = pathname;

  if (pathname.match(/^\/services\/.+/)) {
    const servicePath = pathname.replace('/services/', '');
    newPathname = `/cities/${citySlug}/services/${servicePath}`;
  } else if (pathname.match(/^\/brands\/[^\/]+\/services\/.+/)) {
    const brandAndService = pathname.replace('/brands/', '');
    const [brand, , ...rest] = brandAndService.split('/');
    const servicePath = rest.join('/');
    newPathname = `/cities/${citySlug}/brands/${brand}/services/${servicePath}`;
  } else if (pathname.match(/^\/cities\/[^\/]+\/services\/.+/)) {
    const parts = pathname.split('/');
    parts[2] = citySlug;
    newPathname = parts.join('/');
  } else if (pathname.match(/^\/cities\/[^\/]+\/brands\/[^\/]+\/services\/.+/)) {
    const parts = pathname.split('/');
    parts[2] = citySlug;
    newPathname = parts.join('/');
  }

  if (newPathname === pathname) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = newPathname;

  return NextResponse.rewrite(url);
}
