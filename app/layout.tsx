import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import { ModalProvider } from '@/contexts/ModalContext';
import LeadFormModalWrapper from '@/components/LeadFormModalWrapper';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Max Fixing | Professional Appliance Repair in Los Angeles & Orange County',
  description: 'Expert appliance repair services in Los Angeles and Orange County. Same-day service, certified technicians, 20+ years of experience. Call now for a free estimate!',
  keywords: 'appliance repair, Los Angeles, Orange County, refrigerator repair, washer repair, dryer repair, same-day service',
  openGraph: {
    title: 'Max Fixing | Same-Day Appliance Repair in Los Angeles & Orange County',
    description: 'Expert appliance repair services in Los Angeles and Orange County. Same-day service available.',
    type: 'website',
    images: [
      {
        url: 'https://maxfixing.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Max Fixing',
      },
    ],
  },
};

import Script from 'next/script';

const GTM_ID = 'GTM-P9LKL88V'; // MaxFixing LA container

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      {/* Tawk.to Live Chat Widget */}
      <Script id="tawk-to-chat" strategy="afterInteractive">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5aa7c04ad7591465c708845d/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();

          // Adjust widget position on mobile to avoid overlapping sticky bar
          Tawk_API.onLoad = function(){
            if (window.innerWidth <= 768) {
              const widget = document.querySelector('.tawk-widget-wrapper, #tawk-bubble-container, .tawk-button');
              if (widget) {
                widget.style.setProperty('bottom', '80px', 'important');
              }
              const chatFrame = document.querySelector('iframe[title*="chat"]');
              if (chatFrame) {
                chatFrame.style.setProperty('bottom', '80px', 'important');
                chatFrame.style.setProperty('max-height', 'calc(100vh - 160px)', 'important');
              }
            }
          };

          window.addEventListener('resize', function() {
            if (Tawk_API && Tawk_API.onLoad) {
              setTimeout(function() {
                if (window.innerWidth <= 768) {
                  const widget = document.querySelector('.tawk-widget-wrapper, #tawk-bubble-container, .tawk-button');
                  if (widget) {
                    widget.style.setProperty('bottom', '80px', 'important');
                  }
                }
              }, 100);
            }
          });
        `}
      </Script>
      <body className={inter.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://maxfixing.com#organization',
              name: 'Max Fixing',
              url: 'https://maxfixing.com',
              logo: { '@type': 'ImageObject', url: 'https://maxfixing.com/logo.png' },
              telephone: '+18886086404',
              sameAs: [],
              contactPoint: { '@type': 'ContactPoint', telephone: '+18886086404', contactType: 'customer service', areaServed: 'US', availableLanguage: 'English' },
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://maxfixing.com#website',
              url: 'https://maxfixing.com',
              name: 'Max Fixing',
              publisher: { '@type': 'Organization', '@id': 'https://maxfixing.com#organization' },
            })
          }}
        />
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyMobileBar />
          <LeadFormModalWrapper />
        </ModalProvider>
      </body>
    </html>
  );
}
