'use client';

import Image from 'next/image';
import { Lock } from 'lucide-react';
import { WORK } from '@/constants/content';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';

export default function Work() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-surface"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-28">
        <h2
          id="work-heading"
          className={`font-heading text-h2 font-bold text-text-primary mb-5 transition-all duration-700 ease-[var(--ease-out-soft)] ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {WORK.headline}
        </h2>
        <p
          className={`text-lg text-text-secondary max-w-2xl mb-14 leading-relaxed transition-all duration-700 ease-[var(--ease-out-soft)] ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: isIntersecting ? '80ms' : '0ms' }}
        >
          {WORK.subheadline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {WORK.projects.map((project, i) => (
            <div
              key={`${project.tag}-${i}`}
              className={`group relative bg-background rounded-lg overflow-hidden border border-border/60 transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:shadow-soft-lg hover:border-border
                ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                transitionDelay: isIntersecting ? `${160 + i * 120}ms` : '0ms',
                transitionProperty: isIntersecting
                  ? 'opacity, transform, box-shadow, border-color'
                  : 'opacity, transform',
                transitionDuration: isIntersecting ? '700ms' : '300ms',
              }}
              aria-label="Project coming soon"
            >
              {/* Brand icon as placeholder cover */}
              <div className="h-36 bg-background relative overflow-hidden flex items-center justify-center">
                <Image
                  src="/brand/mpl-icon.svg"
                  alt=""
                  width={120}
                  height={120}
                  className="opacity-[0.06] transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
              </div>

              <div className="p-6">
                <span className="inline-block text-[0.75rem] font-medium text-accent tracking-wide uppercase mb-3">
                  {project.tag}
                </span>
                <h3 className="font-heading text-h3 font-semibold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.placeholder && (
                <div className="absolute inset-0 bg-surface/85 backdrop-blur-[2px] flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-surface/80">
                  <Lock
                    size={24}
                    className="text-text-secondary/60 mb-2 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span className="text-small font-medium text-text-secondary">Coming soon</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
