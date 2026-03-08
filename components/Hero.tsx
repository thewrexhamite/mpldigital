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
      {/* Stylised background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Blue radial glow — anchored behind the illustration */}
        <div className="absolute top-1/4 right-[-10%] w-[800px] h-[800px] rounded-full bg-accent/[0.04] blur-[120px]" />
        {/* Secondary warm glow — top-left for depth */}
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#e0e7ff]/40 blur-[120px]" />
        {/* Subtle bottom fade to cleanly transition into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
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

        {/* Right — 3D hero illustration */}
        <div className="hidden md:flex items-center justify-center">
          <Image
            src="/brand/mpl-hero-3d.png"
            alt="MPL Digital — abstract node system illustration"
            width={600}
            height={600}
            className="w-full max-w-[540px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
