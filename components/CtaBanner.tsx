'use client';

import { ArrowRight } from 'lucide-react';
import { CTA_BANNER } from '@/constants/content';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';

export default function CtaBanner() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      aria-label="Call to action"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-gradient-to-br from-accent to-[#1d4ed8] relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.06] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/[0.04] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div
        className={`relative z-10 max-w-3xl mx-auto px-6 sm:px-8 py-20 text-center transition-all duration-700 ease-[var(--ease-out-soft)] ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h2 className="font-heading text-h2 font-bold text-white mb-4">{CTA_BANNER.headline}</h2>
        <p className="text-lg text-white/80 mb-8 leading-relaxed">{CTA_BANNER.subtext}</p>
        <a
          href={CTA_BANNER.cta.href}
          className="group inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-white text-accent font-medium text-body rounded-lg transition-all duration-300 ease-in-out hover:bg-white/90 hover:shadow-soft-lg hover:-translate-y-0.5 active:scale-[0.98] focus-ring"
        >
          {CTA_BANNER.cta.label}
          <ArrowRight
            size={16}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
