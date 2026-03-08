'use client';

import { HERO } from '@/constants/content';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-bg" aria-hidden="true" />

      {/* Rotating geometric accent */}
      <div
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/5 rotate-45 geo-rotate"
        aria-hidden="true"
      />

      {/* Bottom vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1
          id="hero-heading"
          className="font-heading text-display font-bold tracking-[-0.03em] leading-[1.05] text-text-primary mb-6"
        >
          {HERO.headline}
        </h1>
        <p className="text-h3 font-normal text-text-secondary max-w-2xl mx-auto mb-10 leading-[1.3]">
          {HERO.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {HERO.ctas.map((cta) => (
            <a
              key={cta.href + cta.label}
              href={cta.href}
              className={`inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-8 py-3 font-heading font-semibold text-body rounded transition-all duration-150 focus-ring ${
                cta.variant === 'primary'
                  ? 'bg-accent text-white hover:brightness-110 active:scale-95'
                  : 'border border-slate text-text-primary hover:bg-white/5 hover:border-white/20 active:scale-95'
              }`}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dot-grid-bg {
          background-image: radial-gradient(circle, rgba(30, 144, 255, 0.08) 1px, transparent 1px);
          background-size: 32px 32px;
          animation: pulse-grid 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .dot-grid-bg {
            animation: none;
            opacity: 0.6;
          }
          .geo-rotate {
            animation: none !important;
          }
        }
        .geo-rotate {
          animation: slow-rotate 120s linear infinite;
        }
        @keyframes pulse-grid {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes slow-rotate {
          from {
            transform: translateY(-50%) rotate(45deg);
          }
          to {
            transform: translateY(-50%) rotate(405deg);
          }
        }
      `}</style>
    </section>
  );
}
