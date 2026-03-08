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
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-28">
        <p
          className={`uppercase tracking-[0.15em] text-small text-text-secondary font-medium mb-4 transition-all duration-700 ease-[var(--ease-out-soft)] ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          How we work
        </p>
        <h2
          id="process-heading"
          className={`font-heading text-h2 font-bold text-text-primary mb-5 transition-all duration-700 ease-[var(--ease-out-soft)] ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isIntersecting ? '80ms' : '0ms' }}
        >
          {PROCESS.headline}
        </h2>
        <p
          className={`text-lg text-text-secondary max-w-2xl mb-16 leading-relaxed transition-all duration-700 ease-[var(--ease-out-soft)] ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isIntersecting ? '160ms' : '0ms' }}
        >
          {PROCESS.subheadline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Desktop connector line */}
          <div
            className={`hidden md:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-border transition-all duration-1000 ease-[var(--ease-out-soft)] origin-left ${
              isIntersecting ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: isIntersecting ? '300ms' : '0ms' }}
            aria-hidden="true"
          />

          {PROCESS.steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.number}
                className={`group relative text-center md:text-left transition-all duration-700 ease-[var(--ease-out-soft)] ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: isIntersecting ? `${240 + i * 120}ms` : '0ms',
                }}
              >
                <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mx-auto md:mx-0 mb-5 relative z-10 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-soft">
                  <Icon size={18} className="text-accent" aria-hidden="true" />
                </div>
                <p className="text-small font-semibold text-accent mb-1" aria-hidden="true">
                  {step.number}
                </p>
                <h3 className="font-heading text-h3 font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
