import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, Shield, Wrench, Users } from 'lucide-react';
import Hero from '@/components/Hero';
import ReviewPhotosSection from '@/components/ReviewPhotosSection';
import Reviews from '@/components/Reviews';
import SEOContent from '@/components/SEOContent';
import { cities, getCitiesByCounty } from '@/lib/data/cities';
import { brands } from '@/lib/data/brands';
import { appliances } from '@/lib/data/appliances';
import { getAppliancesForBrand } from '@/lib/data/serviceBrands';
import { getBestImageForBrand, getApplianceImage } from '@/lib/data/applianceImages';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo/schema';

interface PageProps {
  params: Promise<{
    city: string;
    brand: string;
  }>;
}

// Dynamic rendering — pages generated on-demand
export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, brand: brandSlug } = await params;
  const cleanBrandSlug = brandSlug.replace('-repair', '');
  const city = cities.find(c => c.slug === citySlug);
  const brand = brands.find(b => b.slug === cleanBrandSlug);
  if (!city || !brand) return {};

  return generatePageMetadata({ city: citySlug, brand: cleanBrandSlug });
}

export default async function CityBrandPage({ params }: PageProps) {
  const { city: citySlug, brand: brandSlug } = await params;
  const cleanBrandSlug = brandSlug.replace('-repair', '');
  const city = cities.find(c => c.slug === citySlug);
  const brand = brands.find(b => b.slug === cleanBrandSlug);

  if (!city || !brand) {
    notFound();
  }

  // Get appliances that this brand manufactures
  const relevantApplianceSlugs = getAppliancesForBrand(cleanBrandSlug);
  const relevantAppliances = appliances.filter(a => relevantApplianceSlugs.includes(a.slug));

  // Get best brand-specific hero image
  const brandHeroImage = getBestImageForBrand(cleanBrandSlug);

  const nearbyCities = getCitiesByCounty(city.county).filter(c => c.slug !== city.slug).slice(0, 6);

  const localBusinessSchema = generateLocalBusinessSchema({
    city: citySlug,
    brand: cleanBrandSlug,
    county: city.county,
  });
  const serviceSchema = generateServiceSchema({
    city: citySlug,
    brand: cleanBrandSlug,
  });
  const breadcrumbSchema = generateBreadcrumbSchema({
    city: citySlug,
    brand: cleanBrandSlug,
  });

  const cityDisplayName = `${city.name} & Surrounding Cities`;

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        title={`Expert ${brand.name} Appliance Repair in ${cityDisplayName}`}
        subtitle="Factory-trained technicians • Genuine parts • Same-day service"
        city={city.name}
        brand={brand.name}
        brandLogo={brand.logo}
        applianceImage={brandHeroImage?.src}
      />

      {/* Review Photos Slider */}
      <ReviewPhotosSection brand={cleanBrandSlug} />

      {/* Appliances Section - Filtered by Brand */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            {brand.name} Appliances We Repair in {city.name} Area
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {relevantAppliances.map((appliance) => {
              const brandImage = getApplianceImage(cleanBrandSlug, appliance.slug);
              return (
                <Link
                  key={appliance.slug}
                  href={`/cities/${citySlug}/brands/${brandSlug}/services/${appliance.slug}-repair`}
                  prefetch={false}
                  className="bg-gray-50 rounded-lg hover:shadow-lg transition text-center border border-gray-200 overflow-hidden group"
                >
                  {brandImage && (
                    <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={brandImage.src}
                        alt={`${brand.name} ${appliance.name} repair in ${city.name}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-lg">{appliance.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {brand.name} {appliance.name} Repair
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for {brand.name} Repairs in {city.name} Area?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Wrench className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{brand.name} Specialists</h3>
              <p className="text-gray-600">Factory-trained on all {brand.name} appliances</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Same-Day Service</h3>
              <p className="text-gray-600">Fast appointments in {city.name} and surrounding areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Genuine Parts</h3>
              <p className="text-gray-600">Only authentic {brand.name} replacement parts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Local to {city.name}</h3>
              <p className="text-gray-600">Serving {city.name} and the entire {city.county.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} region</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <SEOContent city={citySlug} brand={cleanBrandSlug} county={city.county} />

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              {brand.name} Repair in Nearby Cities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/cities/${nearbyCity.slug}/brands/${brandSlug}`}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition"
                >
                  <span className="text-gray-900 font-medium">{nearbyCity.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      <Reviews />
    </>
  );
}
