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
// CITY MAPPING (Los Angeles & Orange County areas)
// ============================================
const CITY_NAME_TO_SLUG: Record<string, string> = {
  // San Fernando Valley
  'Santa Clarita': 'santa-clarita',
  'Northridge': 'northridge',
  'Van Nuys': 'van-nuys',
  'Encino': 'encino',
  'Sherman Oaks': 'sherman-oaks',
  'Woodland Hills': 'woodland-hills',
  'Tarzana': 'tarzana',
  'Reseda': 'reseda',
  'Canoga Park': 'canoga-park',
  'Granada Hills': 'granada-hills',
  'Panorama City': 'panorama-city',
  'Sun Valley': 'sun-valley',
  'North Hollywood': 'north-hollywood',
  'Studio City': 'studio-city',
  'Chatsworth': 'chatsworth',
  'Porter Ranch': 'porter-ranch',
  'Sylmar': 'sylmar',
  'Pacoima': 'pacoima',
  'Calabasas': 'calabasas',

  // West Los Angeles
  'Santa Monica': 'santa-monica',
  'Beverly Hills': 'beverly-hills',
  'Culver City': 'culver-city',
  'West Hollywood': 'west-hollywood',
  'Malibu': 'malibu',
  'Brentwood': 'brentwood',
  'Westwood': 'westwood',
  'Mar Vista': 'mar-vista',
  'Pacific Palisades': 'pacific-palisades',
  'Venice': 'venice',

  // San Gabriel Valley
  'Pasadena': 'pasadena',
  'Glendale': 'glendale',
  'Burbank': 'burbank',
  'Arcadia': 'arcadia',
  'Monrovia': 'monrovia',
  'West Covina': 'west-covina',
  'Covina': 'covina',
  'Pomona': 'pomona',
  'Glendora': 'glendora',
  'Azusa': 'azusa',
  'Alhambra': 'alhambra',
  'San Dimas': 'san-dimas',
  'La Verne': 'la-verne',
  'South Pasadena': 'south-pasadena',
  'Eagle Rock': 'eagle-rock',
  'Altadena': 'altadena',
  'Duarte': 'duarte',
  'Claremont': 'claremont',

  // South Bay
  'Torrance': 'torrance',
  'Inglewood': 'inglewood',
  'Hawthorne': 'hawthorne',
  'Gardena': 'gardena',
  'Redondo Beach': 'redondo-beach',
  'Manhattan Beach': 'manhattan-beach',
  'Hermosa Beach': 'hermosa-beach',
  'El Segundo': 'el-segundo',
  'Lawndale': 'lawndale',
  'Carson': 'carson',
  'Lomita': 'lomita',
  'Downey': 'downey',
  'Compton': 'compton',
  'Lakewood': 'lakewood',

  // Orange County
  'Anaheim': 'anaheim',
  'Santa Ana': 'santa-ana',
  'Irvine': 'irvine',
  'Huntington Beach': 'huntington-beach',
  'Mission Viejo': 'mission-viejo',
  'Fullerton': 'fullerton',
  'Orange': 'orange',
  'Costa Mesa': 'costa-mesa',
  'Tustin': 'tustin',
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
  let fallbackCitySlug = 'glendale'; // Default fallback for LA area

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
