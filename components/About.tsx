'use client';

import { MapPin, Flag, Layers } from 'lucide-react';
import { ABOUT } from '@/constants/content';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';

const iconMap = {
  MapPin,
  Flag,
  Layers,
} as const;

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-surface"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-28">
        <h2
          id="about-heading"
          className={`font-heading text-h2 font-bold text-text-primary mb-6 transition-all duration-700 ease-[var(--ease-out-soft)] ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {ABOUT.headline}
        </h2>
        <p
          className={`text-lg text-text-secondary max-w-3xl mb-14 leading-relaxed transition-all duration-700 ease-[var(--ease-out-soft)] ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: isIntersecting ? '100ms' : '0ms' }}
        >
          {ABOUT.body}
        </p>

        <div
          className={`flex flex-wrap gap-8 mb-14 transition-all duration-700 ease-[var(--ease-out-soft)] ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isIntersecting ? '200ms' : '0ms' }}
        >
          {ABOUT.trustIndicators.map((indicator) => {
            const Icon = iconMap[indicator.icon];
            return (
              <div key={indicator.label} className="flex items-center gap-2.5">
                <Icon size={18} className="text-accent" aria-hidden="true" />
                <span className="text-small font-medium text-text-primary">{indicator.label}</span>
              </div>
            );
          })}
        </div>

        {/* TODO: Replace with verified stats before launch */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {ABOUT.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-l-2 border-accent/20 pl-6 transition-all duration-700 ease-[var(--ease-out-soft)] ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isIntersecting ? `${300 + i * 120}ms` : '0ms' }}
            >
              <p className="font-heading text-h1 font-bold text-text-primary leading-[1.05]">
                {stat.value}
              </p>
              <p className="text-small text-text-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
