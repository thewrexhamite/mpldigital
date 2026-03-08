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
    <section id="about" aria-labelledby="about-heading" ref={ref as React.RefObject<HTMLElement>}>
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 py-24 transition-all duration-500 ease-out ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2
          id="about-heading"
          className="font-heading text-h2 font-bold tracking-[-0.01em] text-text-primary mb-6"
        >
          {ABOUT.headline}
        </h2>
        <p className="text-body text-text-secondary max-w-3xl mb-12 leading-[1.7]">{ABOUT.body}</p>

        <div className="flex flex-wrap gap-6 mb-12">
          {ABOUT.trustIndicators.map((indicator) => {
            const Icon = iconMap[indicator.icon];
            return (
              <div key={indicator.label} className="flex items-center gap-2">
                <Icon size={20} className="text-accent" aria-hidden="true" />
                <span className="text-small text-text-primary">{indicator.label}</span>
              </div>
            );
          })}
        </div>

        {/* TODO: Replace with verified stats before launch */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {ABOUT.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-display font-bold text-accent leading-[1.05]">
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
