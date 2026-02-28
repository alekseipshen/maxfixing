import Hero from '@/components/Hero';
import ReviewPhotosSection from '@/components/ReviewPhotosSection';
import Reviews from '@/components/Reviews';
import BrandsSection from '@/components/BrandsSection';
import { appliances, featuredCommercialAppliances } from '@/lib/data/appliances';
import { getBestImageForType } from '@/lib/data/applianceImages';
import { cities } from '@/lib/data/cities';
import { CheckCircle, Clock, Users, Wrench, Building2 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateLocalBusinessSchema, generateOrganizationSchema, generateWebSiteSchema, generateFAQSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://maxfixing.com/',
  },
};

const HOMEPAGE_FAQS = [
  {
    question: 'How quickly can you repair my appliance in Los Angeles?',
    answer: 'We offer same-day and next-day appointments across Los Angeles, Orange County, and surrounding areas. Call (888) 608-6404 to schedule.',
  },
  {
    question: 'What appliances do you repair?',
    answer: 'We repair refrigerators, washers, dryers, dishwashers, ovens, ranges, cooktops, freezers, range hoods, ice makers, and coffee machines. All major brands including LG, Samsung, Whirlpool, GE, and Maytag.',
  },
  {
    question: 'Do you offer a warranty on repairs?',
    answer: 'Yes, all our repairs come with a solid warranty on parts and labor. We stand behind our work.',
  },
  {
    question: 'Are your technicians certified?',
    answer: 'Yes, our technicians are factory-trained and certified to repair all major appliance brands. We have 20+ years of experience.',
  },
  {
    question: 'How much does appliance repair cost?',
    answer: 'We offer upfront, transparent pricing before we start any work. Prices vary by appliance and issue. Call (888) 608-6404 for a free estimate.',
  },
];

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema({});
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();
  const faqSchema = generateFAQSchema(HOMEPAGE_FAQS);

  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <Hero
        title="Same-Day Appliance Repair in Los Angeles & Orange County"
        subtitle="Professional repair services for all major appliance brands"
        applianceImage={getBestImageForType('refrigerator')?.src}
      />

      {/* Review Photos Slider */}
      <ReviewPhotosSection />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Max Fixing?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">20+ Years Experience</h3>
              <p className="text-gray-600">
                Over two decades repairing Los Angeles and Orange County appliances. Factory-trained, certified technicians.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Same-Day Service</h3>
              <p className="text-gray-600">
                Same-day or next-day appointments available. We know you can't wait — we respond fast.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Trusted by Neighbors</h3>
              <p className="text-gray-600">
                Most new customers come from referrals. We fix it right the first time, every time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Wrench className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Upfront Pricing</h3>
              <p className="text-gray-600">
                Transparent pricing and solid warranty on every repair. Fully insured for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Same-Day Appliance Repair in Los Angeles & Orange County
            </h2>

            <div className="text-gray-700 space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                Your fridge stopped cooling? Washer won't spin? We've got you covered. For over 20 years, Los Angeles families
                have trusted <strong>Max Fixing</strong> for fast, reliable repairs on all major brands - LG, Samsung,
                Whirlpool, GE, Maytag, and more.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Our factory-trained technicians provide <strong>same-day service</strong> across Glendale, Pasadena, Burbank, and Irvine areas.
                Upfront pricing, solid warranty, and most customers come from referrals. Fully insured and ready to fix it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              We repair all major appliance brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appliances.map((appliance) => {
              const showcaseImage = getBestImageForType(appliance.slug);
              const cardImage = showcaseImage?.src || appliance.image;
              return (
                <Link
                  key={appliance.slug}
                  href={`/services/${appliance.slug}-repair`}
                  prefetch={false}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group"
                >
                  {cardImage && (
                    <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={cardImage}
                        alt={appliance.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {appliance.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{appliance.description}</p>
                    <span className="text-green-600 font-semibold hover:underline">
                      Learn more →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commercial Appliance Repair */}
      <section
        className="py-16 text-white"
        style={{
          background: 'linear-gradient(to bottom right, #334e64, #2a4054)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Building2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Commercial Appliance Repair
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Professional repair services for restaurants, hotels, and commercial kitchens across Los Angeles & Orange County
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {featuredCommercialAppliances.slice(0, 4).map((appliance) => (
              <Link
                key={appliance.slug}
                href={`/commercial/${appliance.slug.replace('commercial-', '')}-repair`}
                prefetch={false}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition border border-white/20"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {appliance.name}
                </h3>
                <p className="opacity-90 mb-4">{appliance.description}</p>
                <span className="text-white font-semibold hover:underline inline-flex items-center gap-2">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg opacity-90 mb-6">
              Same-day service available for commercial clients
            </p>
            <Link
              href="/commercial"
              prefetch={false}
              className="inline-block bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-xl"
              style={{ color: '#334e64' }}
            >
              View All Commercial Services
            </Link>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <BrandsSection />

      {/* Service Areas */}
      <section id="service-area" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas in Los Angeles & Orange County
            </h2>
            <p className="text-xl text-gray-600">
              We serve Los Angeles County and Orange County
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'San Fernando Valley', slug: 'santa-clarita', description: 'Santa Clarita, Northridge, Sherman Oaks, Woodland Hills' },
              { name: 'Glendale & Pasadena', slug: 'glendale', description: 'Glendale, Pasadena, Burbank, Arcadia, Monrovia' },
              { name: 'South Bay', slug: 'torrance', description: 'Torrance, Long Beach, Carson, Lakewood' },
              { name: 'Orange County', slug: 'irvine', description: 'Irvine, Anaheim, Santa Ana, Fullerton, Huntington Beach' }
            ].map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas#${area.slug}`}
                prefetch={false}
                className="bg-gray-50 p-6 rounded-lg hover:bg-green-50 hover:shadow-lg transition border border-gray-200 cursor-pointer"
              >
                <h3 className="font-bold text-xl text-gray-900 mb-2">{area.name}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/service-areas"
              prefetch={false}
              className="inline-block text-green-600 hover:text-green-700 font-semibold text-lg hover:underline"
            >
              View all 89 cities we serve →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {HOMEPAGE_FAQS.map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />
    </>
  );
}
