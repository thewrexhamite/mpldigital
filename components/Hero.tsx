'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { HERO } from '@/constants/content';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#eef2ff] via-[#f5f5f7] to-background"
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Dot grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.35]">
          <defs>
            <pattern
              id="hero-dots"
              x="0"
              y="0"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.8" fill="#c7d2fe" />
            </pattern>
            <linearGradient id="dot-mask-h" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="white" stopOpacity="0" />
              <stop offset="0.3" stopColor="white" stopOpacity="1" />
              <stop offset="0.7" stopColor="white" stopOpacity="1" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="dot-mask-v" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="white" stopOpacity="0.3" />
              <stop offset="0.4" stopColor="white" stopOpacity="1" />
              <stop offset="0.8" stopColor="white" stopOpacity="1" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="dot-fade">
              <rect width="100%" height="100%" fill="url(#dot-mask-h)" />
              <rect
                width="100%"
                height="100%"
                fill="url(#dot-mask-v)"
                style={{ mixBlendMode: 'multiply' }}
              />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" mask="url(#dot-fade)" />
        </svg>

        {/* Radial glow behind illustration */}
        <div className="absolute top-1/3 right-[5%] w-[600px] h-[600px] rounded-full bg-accent/[0.08] blur-[100px]" />

        {/* Secondary glow top-left */}
        <div className="absolute -top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#c7d2fe]/30 blur-[100px]" />

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full pt-28 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left — copy */}
        <div>
          <h1
            id="hero-heading"
            className="font-heading text-[2.75rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.75rem] font-bold tracking-[-0.04em] leading-[1.05] text-text-primary mb-6 animate-fade-in-up"
          >
            {HERO.headlineBold}
            <br />
            <span className="font-normal text-text-secondary">{HERO.headlineLight}</span>
          </h1>
          <p
            className="text-lg sm:text-xl text-text-secondary max-w-lg mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '120ms' }}
          >
            {HERO.subheadline}
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: '240ms' }}
          >
            {HERO.ctas.map((cta) => (
              <a
                key={cta.href + cta.label}
                href={cta.href}
                className={`group inline-flex items-center justify-center min-h-[52px] min-w-[44px] px-8 py-3.5 font-medium text-body rounded-lg transition-all duration-300 ease-in-out focus-ring ${
                  cta.variant === 'primary'
                    ? 'bg-accent text-white hover:bg-accent/90 hover:shadow-soft-lg hover:-translate-y-0.5 active:scale-[0.98] shadow-md shadow-accent/25'
                    : 'border border-border bg-white/60 text-text-primary hover:border-text-secondary/40 hover:bg-white hover:shadow-soft hover:-translate-y-0.5 active:scale-[0.98]'
                }`}
              >
                {cta.label}
                {cta.variant === 'primary' && (
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Right — 3D hero illustration */}
        <div
          className="hidden md:flex items-center justify-center animate-fade-in"
          style={{ animationDelay: '300ms' }}
        >
          <Image
            src="/brand/mpl-hero-3d.png"
            alt="MPL Digital — abstract node system illustration"
            width={700}
            height={700}
            className="w-full max-w-[600px] h-auto drop-shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
