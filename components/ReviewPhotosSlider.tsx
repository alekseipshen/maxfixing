'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { GOOGLE_BUSINESS_PROFILE_URL, GOOGLE_REVIEW_COUNT } from '@/lib/utils';

interface ReviewPhotosSliderProps {
  photos: string[];
}

export default function ReviewPhotosSlider({ photos }: ReviewPhotosSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll by ~2 cards width
    const cardWidth = el.querySelector('[data-card]')?.clientWidth || 280;
    const gap = 16;
    const distance = (cardWidth + gap) * 2;
    el.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
  }, []);

  if (photos.length === 0) return null;

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">4.8</span>
              <span className="text-sm text-gray-500">({GOOGLE_REVIEW_COUNT}+ reviews)</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Real Repairs by Our Technicians
            </h2>
          </div>
          
          {/* Desktop nav arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-default transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-default transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider - full-bleed on mobile */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-4 md:px-[max(1rem,calc((100vw-1280px)/2+1.5rem))] no-scrollbar"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {photos.map((src, index) => (
            <div
              key={src}
              data-card
              className="flex-shrink-0 snap-start w-[260px] sm:w-[280px] md:w-[300px] group"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={src}
                  alt={`Appliance repair by Max Fixing technician - photo ${index + 1}`}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                {/* Google badge on first card */}
                {index === 0 && (
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-xs font-semibold text-gray-800">Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Last card: View All Reviews CTA */}
          <div data-card className="flex-shrink-0 snap-start w-[260px] sm:w-[280px] md:w-[300px]">
            <a
              href={GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[4/5] rounded-xl overflow-hidden flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group/cta"
              style={{ background: 'linear-gradient(135deg, #334e64 0%, #1a3a4f 100%)' }}
            >
              {/* Google logo */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-5 shadow-lg group-hover/cta:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-white/90 text-lg font-bold mb-1">
                {GOOGLE_REVIEW_COUNT}+ Reviews
              </p>
              <p className="text-white/70 text-sm mb-6">
                on Google
              </p>
              
              <div className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg group-hover/cta:bg-green-500 group-hover/cta:text-white transition-colors duration-300 shadow-lg">
                View All Reviews →
              </div>
            </a>
          </div>
        </div>

        {/* Gradient fades on edges (desktop only) */}
        {canScrollLeft && (
          <div className="hidden md:block absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-white/80 to-transparent pointer-events-none z-10" />
        )}
        {canScrollRight && (
          <div className="hidden md:block absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white/80 to-transparent pointer-events-none z-10" />
        )}
      </div>
    </section>
  );
}
