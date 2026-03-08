'use client';

import Image from 'next/image';
import { HERO } from '@/constants/content';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Perspective grid background — right side */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute right-0 bottom-0 w-[70%] h-full" viewBox="0 0 800 600" fill="none">
          <defs>
            <linearGradient id="grid-fade" x1="0" y1="0" x2="0.4" y2="0">
              <stop offset="0" stopColor="#2563EB" stopOpacity="0" />
              <stop offset="1" stopColor="#2563EB" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="grid-fade-v" x1="0" y1="0" x2="0" y2="0.3">
              <stop offset="0" stopColor="#2563EB" stopOpacity="0" />
              <stop offset="1" stopColor="#2563EB" stopOpacity="0.06" />
            </linearGradient>
            <mask id="grid-mask">
              <radialGradient id="grid-radial" cx="0.7" cy="0.7" r="0.5">
                <stop offset="0" stopColor="white" />
                <stop offset="1" stopColor="black" />
              </radialGradient>
              <rect width="800" height="600" fill="url(#grid-radial)" />
            </mask>
          </defs>
          <g
            mask="url(#grid-mask)"
            style={{
              transform: 'perspective(600px) rotateX(55deg) rotateZ(-5deg)',
              transformOrigin: '70% 80%',
            }}
          >
            {/* Horizontal lines */}
            {Array.from({ length: 16 }, (_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 40}
                x2="800"
                y2={i * 40}
                stroke="url(#grid-fade)"
                strokeWidth="1"
              />
            ))}
            {/* Vertical lines */}
            {Array.from({ length: 21 }, (_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 40}
                y1="0"
                x2={i * 40}
                y2="600"
                stroke="url(#grid-fade-v)"
                strokeWidth="1"
              />
            ))}
          </g>
        </svg>

        {/* Soft radial glow behind the icon */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/3 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[100px]" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div>
          <h1
            id="hero-heading"
            className="font-heading text-display font-bold tracking-[-0.04em] leading-[1.05] text-text-primary mb-6"
          >
            {HERO.headlineBold} <span className="font-normal">{HERO.headlineLight}</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-md mb-10 leading-relaxed">
            {HERO.subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            {HERO.ctas.map((cta) => (
              <a
                key={cta.href + cta.label}
                href={cta.href}
                className={`inline-flex items-center justify-center min-h-[48px] min-w-[44px] px-7 py-3 font-medium text-body rounded-lg transition-all duration-150 focus-ring ${
                  cta.variant === 'primary'
                    ? 'bg-accent text-white hover:bg-accent/90 active:scale-[0.98] shadow-sm shadow-accent/20'
                    : 'border border-border text-text-primary hover:border-text-secondary/40 hover:bg-surface active:scale-[0.98]'
                }`}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — brand icon */}
        <div className="hidden md:flex items-center justify-center relative">
          <Image
            src="/brand/mpl-icon.svg"
            alt=""
            width={340}
            height={340}
            className="drop-shadow-[0_20px_40px_rgba(37,99,235,0.15)]"
            aria-hidden="true"
            priority
          />
        </div>
      </div>
    </section>
  );
}
