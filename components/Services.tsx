'use client';

import { Code2, LineChart, Plug, Megaphone } from 'lucide-react';
import { SERVICES } from '@/constants/content';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';

const iconMap = {
  Code2,
  LineChart,
  Plug,
  Megaphone,
} as const;

export default function Services() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-28">
        <p className="uppercase tracking-[0.15em] text-small text-text-secondary font-medium mb-4">
          {SERVICES.headline}
        </p>
        <h2
          id="services-heading"
          className="font-heading text-h2 font-bold text-text-primary mb-16"
        >
          {SERVICES.headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className={`bg-surface rounded-lg p-7 border border-border/60 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/[0.04] hover:border-border ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: isIntersecting ? `${i * 80}ms` : '0ms',
                }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/[0.07] flex items-center justify-center mb-5">
                  <Icon size={20} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-h3 font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
