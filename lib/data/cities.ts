// Los Angeles & Orange County cities by service region

export interface City {
  slug: string;
  name: string;
  county: string;
}

export const cities: City[] = [
  // San Fernando Valley
  { slug: 'santa-clarita', name: 'Santa Clarita', county: 'san-fernando-valley' },
  { slug: 'northridge', name: 'Northridge', county: 'san-fernando-valley' },
  { slug: 'van-nuys', name: 'Van Nuys', county: 'san-fernando-valley' },
  { slug: 'encino', name: 'Encino', county: 'san-fernando-valley' },
  { slug: 'sherman-oaks', name: 'Sherman Oaks', county: 'san-fernando-valley' },
  { slug: 'woodland-hills', name: 'Woodland Hills', county: 'san-fernando-valley' },
  { slug: 'tarzana', name: 'Tarzana', county: 'san-fernando-valley' },
  { slug: 'reseda', name: 'Reseda', county: 'san-fernando-valley' },
  { slug: 'canoga-park', name: 'Canoga Park', county: 'san-fernando-valley' },
  { slug: 'granada-hills', name: 'Granada Hills', county: 'san-fernando-valley' },
  { slug: 'panorama-city', name: 'Panorama City', county: 'san-fernando-valley' },
  { slug: 'sun-valley', name: 'Sun Valley', county: 'san-fernando-valley' },
  { slug: 'north-hollywood', name: 'North Hollywood', county: 'san-fernando-valley' },
  { slug: 'studio-city', name: 'Studio City', county: 'san-fernando-valley' },
  { slug: 'chatsworth', name: 'Chatsworth', county: 'san-fernando-valley' },
  { slug: 'porter-ranch', name: 'Porter Ranch', county: 'san-fernando-valley' },
  { slug: 'sylmar', name: 'Sylmar', county: 'san-fernando-valley' },
  { slug: 'pacoima', name: 'Pacoima', county: 'san-fernando-valley' },
  { slug: 'calabasas', name: 'Calabasas', county: 'san-fernando-valley' },

  // West Los Angeles
  { slug: 'santa-monica', name: 'Santa Monica', county: 'west-los-angeles' },
  { slug: 'beverly-hills', name: 'Beverly Hills', county: 'west-los-angeles' },
  { slug: 'culver-city', name: 'Culver City', county: 'west-los-angeles' },
  { slug: 'west-hollywood', name: 'West Hollywood', county: 'west-los-angeles' },
  { slug: 'malibu', name: 'Malibu', county: 'west-los-angeles' },
  { slug: 'brentwood', name: 'Brentwood', county: 'west-los-angeles' },
  { slug: 'westwood', name: 'Westwood', county: 'west-los-angeles' },
  { slug: 'mar-vista', name: 'Mar Vista', county: 'west-los-angeles' },
  { slug: 'pacific-palisades', name: 'Pacific Palisades', county: 'west-los-angeles' },
  { slug: 'venice', name: 'Venice', county: 'west-los-angeles' },

  // San Gabriel Valley / Pasadena area
  { slug: 'pasadena', name: 'Pasadena', county: 'san-gabriel-valley' },
  { slug: 'glendale', name: 'Glendale', county: 'san-gabriel-valley' },
  { slug: 'burbank', name: 'Burbank', county: 'san-gabriel-valley' },
  { slug: 'arcadia', name: 'Arcadia', county: 'san-gabriel-valley' },
  { slug: 'monrovia', name: 'Monrovia', county: 'san-gabriel-valley' },
  { slug: 'west-covina', name: 'West Covina', county: 'san-gabriel-valley' },
  { slug: 'covina', name: 'Covina', county: 'san-gabriel-valley' },
  { slug: 'pomona', name: 'Pomona', county: 'san-gabriel-valley' },
  { slug: 'glendora', name: 'Glendora', county: 'san-gabriel-valley' },
  { slug: 'azusa', name: 'Azusa', county: 'san-gabriel-valley' },
  { slug: 'alhambra', name: 'Alhambra', county: 'san-gabriel-valley' },
  { slug: 'san-dimas', name: 'San Dimas', county: 'san-gabriel-valley' },
  { slug: 'la-verne', name: 'La Verne', county: 'san-gabriel-valley' },
  { slug: 'south-pasadena', name: 'South Pasadena', county: 'san-gabriel-valley' },
  { slug: 'eagle-rock', name: 'Eagle Rock', county: 'san-gabriel-valley' },
  { slug: 'altadena', name: 'Altadena', county: 'san-gabriel-valley' },
  { slug: 'duarte', name: 'Duarte', county: 'san-gabriel-valley' },
  { slug: 'claremont', name: 'Claremont', county: 'san-gabriel-valley' },

  // South Bay
  { slug: 'torrance', name: 'Torrance', county: 'south-bay' },
  { slug: 'inglewood', name: 'Inglewood', county: 'south-bay' },
  { slug: 'hawthorne', name: 'Hawthorne', county: 'south-bay' },
  { slug: 'gardena', name: 'Gardena', county: 'south-bay' },
  { slug: 'redondo-beach', name: 'Redondo Beach', county: 'south-bay' },
  { slug: 'manhattan-beach', name: 'Manhattan Beach', county: 'south-bay' },
  { slug: 'hermosa-beach', name: 'Hermosa Beach', county: 'south-bay' },
  { slug: 'el-segundo', name: 'El Segundo', county: 'south-bay' },
  { slug: 'lawndale', name: 'Lawndale', county: 'south-bay' },
  { slug: 'carson', name: 'Carson', county: 'south-bay' },
  { slug: 'lomita', name: 'Lomita', county: 'south-bay' },
  { slug: 'downey', name: 'Downey', county: 'south-bay' },
  { slug: 'compton', name: 'Compton', county: 'south-bay' },
  { slug: 'lakewood', name: 'Lakewood', county: 'south-bay' },

  // Orange County
  { slug: 'anaheim', name: 'Anaheim', county: 'orange-county' },
  { slug: 'santa-ana', name: 'Santa Ana', county: 'orange-county' },
  { slug: 'irvine', name: 'Irvine', county: 'orange-county' },
  { slug: 'huntington-beach', name: 'Huntington Beach', county: 'orange-county' },
  { slug: 'mission-viejo', name: 'Mission Viejo', county: 'orange-county' },
  { slug: 'fullerton', name: 'Fullerton', county: 'orange-county' },
  { slug: 'orange', name: 'Orange', county: 'orange-county' },
  { slug: 'costa-mesa', name: 'Costa Mesa', county: 'orange-county' },
  { slug: 'tustin', name: 'Tustin', county: 'orange-county' },
  { slug: 'corona', name: 'Corona', county: 'orange-county' },
  { slug: 'lake-forest', name: 'Lake Forest', county: 'orange-county' },
  { slug: 'laguna-niguel', name: 'Laguna Niguel', county: 'orange-county' },
  { slug: 'newport-beach', name: 'Newport Beach', county: 'orange-county' },
  { slug: 'buena-park', name: 'Buena Park', county: 'orange-county' },
  { slug: 'garden-grove', name: 'Garden Grove', county: 'orange-county' },
  { slug: 'westminster', name: 'Westminster', county: 'orange-county' },
  { slug: 'yorba-linda', name: 'Yorba Linda', county: 'orange-county' },
  { slug: 'laguna-beach', name: 'Laguna Beach', county: 'orange-county' },
  { slug: 'san-clemente', name: 'San Clemente', county: 'orange-county' },
  { slug: 'dana-point', name: 'Dana Point', county: 'orange-county' },
  { slug: 'aliso-viejo', name: 'Aliso Viejo', county: 'orange-county' },
  { slug: 'rancho-santa-margarita', name: 'Rancho Santa Margarita', county: 'orange-county' },
  { slug: 'cypress', name: 'Cypress', county: 'orange-county' },
  { slug: 'la-habra', name: 'La Habra', county: 'orange-county' },
  { slug: 'placentia', name: 'Placentia', county: 'orange-county' },
  { slug: 'brea', name: 'Brea', county: 'orange-county' },
];

export function getCitiesByCounty(county: string): City[] {
  return cities.filter(city => city.county === county);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}
