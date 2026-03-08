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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <p className="uppercase tracking-widest text-small text-text-secondary mb-4">
          {SERVICES.headline}
        </p>
        <h2
          id="services-heading"
          className="font-heading text-h2 font-bold tracking-[-0.01em] text-text-primary mb-12"
        >
          {SERVICES.headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className={`bg-white border border-slate rounded p-6 transition-all duration-200 ease-out hover:border-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/10 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: isIntersecting ? `${i * 100}ms` : '0ms',
                }}
              >
                <Icon size={28} className="text-accent mb-4" aria-hidden="true" />
                <h3 className="font-heading text-h3 font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-body text-text-secondary leading-[1.7]">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
