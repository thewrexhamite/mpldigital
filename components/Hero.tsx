'use client';

import { HERO } from '@/constants/content';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Subtle node-grid motif */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
        <defs>
          <pattern id="node-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="1.5" fill="#2563EB" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#node-grid)" />
      </svg>

      {/* Faint connector lines — system architecture motif */}
      <svg
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04]"
        viewBox="0 0 256 256"
        aria-hidden="true"
      >
        <g stroke="#2563EB" strokeWidth="2" strokeLinecap="round" fill="#2563EB">
          <circle cx="40" cy="40" r="4" />
          <circle cx="40" cy="216" r="4" />
          <circle cx="216" cy="40" r="4" />
          <circle cx="216" cy="216" r="4" />
          <circle cx="128" cy="128" r="4" />
        </g>
        <g stroke="#2563EB" strokeWidth="2" strokeLinecap="round">
          <line x1="40" y1="40" x2="40" y2="216" />
          <line x1="40" y1="40" x2="128" y2="128" />
          <line x1="128" y1="128" x2="216" y2="40" />
          <line x1="216" y1="40" x2="216" y2="216" />
          <line x1="128" y1="128" x2="216" y2="216" />
        </g>
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <h1
          id="hero-heading"
          className="font-heading text-display font-bold tracking-[-0.04em] leading-[1.05] text-text-primary mb-6"
        >
          {HERO.headline}
        </h1>
        <p className="text-lg text-text-secondary max-w-xl mx-auto mb-12 leading-relaxed">
          {HERO.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {HERO.ctas.map((cta) => (
            <a
              key={cta.href + cta.label}
              href={cta.href}
              className={`inline-flex items-center justify-center min-h-[48px] min-w-[44px] px-7 py-3 font-medium text-body rounded-lg transition-all duration-150 focus-ring ${
                cta.variant === 'primary'
                  ? 'bg-accent text-white hover:bg-accent/90 active:scale-[0.98]'
                  : 'border border-border text-text-primary hover:border-text-secondary/40 hover:bg-surface active:scale-[0.98]'
              }`}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
