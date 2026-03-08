'use client';

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
        <h2 id="work-heading" className="font-heading text-h2 font-bold text-text-primary mb-5">
          {WORK.headline}
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mb-14 leading-relaxed">
          {WORK.subheadline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {WORK.projects.map((project, i) => (
            <div
              key={`${project.tag}-${i}`}
              className={`relative bg-background rounded-lg overflow-hidden border border-border/60 transition-all duration-500 ease-out ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: isIntersecting ? `${i * 100}ms` : '0ms',
              }}
              aria-label="Project coming soon"
            >
              {/* Abstract node motif as placeholder cover */}
              <div className="h-36 bg-background relative overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full opacity-[0.05]"
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                >
                  <g stroke="#2563EB" strokeWidth="2" fill="#2563EB">
                    <circle cx="40" cy="40" r="4" />
                    <circle cx="40" cy="216" r="4" />
                    <circle cx="216" cy="40" r="4" />
                    <circle cx="216" cy="216" r="4" />
                    <circle cx="128" cy="128" r="4" />
                  </g>
                  <g stroke="#2563EB" strokeWidth="2">
                    <line x1="40" y1="40" x2="40" y2="216" />
                    <line x1="40" y1="40" x2="128" y2="128" />
                    <line x1="128" y1="128" x2="216" y2="40" />
                    <line x1="216" y1="40" x2="216" y2="216" />
                    <line x1="128" y1="128" x2="216" y2="216" />
                  </g>
                </svg>
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
                <div className="absolute inset-0 bg-surface/85 backdrop-blur-[2px] flex flex-col items-center justify-center">
                  <Lock size={24} className="text-text-secondary/60 mb-2" aria-hidden="true" />
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
