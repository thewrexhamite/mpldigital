'use client';

import { Search, Map, Hammer, TrendingUp } from 'lucide-react';
import { PROCESS } from '@/constants/content';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';

const iconMap = {
  Search,
  Map,
  Hammer,
  TrendingUp,
} as const;

export default function Process() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-surface"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <p className="uppercase tracking-widest text-small text-text-secondary mb-4">How we work</p>
        <h2
          id="process-heading"
          className="font-heading text-h2 font-bold tracking-[-0.01em] text-text-primary mb-4"
        >
          {PROCESS.headline}
        </h2>
        <p className="text-body text-text-secondary max-w-2xl mb-16 leading-[1.7]">
          {PROCESS.subheadline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Desktop connector line */}
          <div
            className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-slate"
            aria-hidden="true"
          />

          {PROCESS.steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.number}
                className={`relative text-center transition-all duration-500 ease-out ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: isIntersecting ? `${i * 100}ms` : '0ms',
                }}
              >
                <span
                  className="font-heading text-display font-bold text-slate leading-[1.05] block mb-2"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <Icon size={28} className="text-accent mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-heading text-h3 font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-body text-text-secondary leading-[1.7]">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
