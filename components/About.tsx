'use client';

import { MapPin, Flag, Layers } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
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
      className="bg-gradient-to-br from-[#eef2ff] via-surface to-surface"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — copy (3 cols) */}
          <div className="lg:col-span-3">
            <h2
              id="about-heading"
              className={`font-heading text-h2 font-bold text-text-primary mb-6 transition-all duration-700 ease-[var(--ease-out-soft)] ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {ABOUT.headline}
            </h2>
            <p
              className={`text-lg text-text-secondary leading-relaxed mb-8 transition-all duration-700 ease-[var(--ease-out-soft)] ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isIntersecting ? '100ms' : '0ms' }}
            >
              {ABOUT.body}
            </p>

            <div
              className={`flex flex-wrap gap-6 mb-8 transition-all duration-700 ease-[var(--ease-out-soft)] ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isIntersecting ? '200ms' : '0ms' }}
            >
              {ABOUT.trustIndicators.map((indicator) => {
                const Icon = iconMap[indicator.icon];
                return (
                  <div key={indicator.label} className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-accent/[0.07] flex items-center justify-center">
                      <Icon size={16} className="text-accent" aria-hidden="true" />
                    </div>
                    <span className="text-small font-medium text-text-primary">
                      {indicator.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div
              className={`transition-all duration-700 ease-[var(--ease-out-soft)] ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isIntersecting ? '300ms' : '0ms' }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4 transition-all duration-200 focus-ring"
              >
                Let&apos;s discuss your goals
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Right — stats (2 cols) */}
          <div className="lg:col-span-2">
            {/* TODO: Replace with verified stats before launch */}
            <div className="grid grid-cols-1 gap-6">
              {ABOUT.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`border-t-2 sm:border-t-0 sm:border-l-2 border-accent/20 pt-4 sm:pt-0 sm:pl-6 transition-all duration-700 ease-[var(--ease-out-soft)] ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isIntersecting ? `${300 + i * 120}ms` : '0ms' }}
                >
                  <p className="font-heading text-h1 font-bold text-accent leading-[1.05]">
                    {stat.value}
                  </p>
                  <p className="text-small text-text-secondary mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
