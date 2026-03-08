'use client';

import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/constants/content';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';

export default function Testimonials() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-surface"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24">
        <div className="text-center mb-14">
          <p
            className={`uppercase tracking-[0.15em] text-small text-text-secondary font-medium mb-4 transition-all duration-700 ease-[var(--ease-out-soft)] ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {TESTIMONIALS.label}
          </p>
          <h2
            id="testimonials-heading"
            className={`font-heading text-h2 font-bold text-text-primary transition-all duration-700 ease-[var(--ease-out-soft)] ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: isIntersecting ? '80ms' : '0ms' }}
          >
            {TESTIMONIALS.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.items.map((item, i) => (
            <blockquote
              key={i}
              className={`relative bg-background rounded-lg p-6 sm:p-8 border border-border/60 transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:shadow-soft-lg hover:border-border
                ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                transitionDelay: isIntersecting ? `${160 + i * 120}ms` : '0ms',
                transitionProperty: isIntersecting
                  ? 'opacity, transform, box-shadow, border-color'
                  : 'opacity, transform',
                transitionDuration: isIntersecting ? '700ms' : '300ms',
              }}
            >
              <Quote size={24} className="text-accent/20 mb-4" aria-hidden="true" />
              <p className="text-body text-text-secondary leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/[0.07] flex items-center justify-center">
                  <span className="text-small font-semibold text-accent">
                    {item.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <p className="text-small font-semibold text-text-primary">
                    {item.placeholder ? 'Client Testimonial' : item.name}
                  </p>
                  <p className="text-small text-text-secondary">
                    {item.placeholder ? 'Coming soon' : `${item.role}, ${item.company}`}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
