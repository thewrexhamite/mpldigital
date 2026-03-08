'use client';

import { Lock } from 'lucide-react';
import { WORK } from '@/constants/content';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';

export default function Work() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="work" aria-labelledby="work-heading" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <h2
          id="work-heading"
          className="font-heading text-h2 font-bold tracking-[-0.01em] text-text-primary mb-4"
        >
          {WORK.headline}
        </h2>
        <p className="text-body text-text-secondary max-w-2xl mb-12 leading-[1.7]">
          {WORK.subheadline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORK.projects.map((project, i) => (
            <div
              key={`${project.tag}-${i}`}
              className={`relative bg-surface border border-slate rounded overflow-hidden transition-all duration-500 ease-out ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: isIntersecting ? `${i * 100}ms` : '0ms',
              }}
              aria-label="Project coming soon"
            >
              <div className="p-6">
                <span className="inline-block uppercase tracking-widest text-[0.75rem] font-semibold text-amber bg-amber/10 px-2 py-1 rounded-sm mb-4">
                  {project.tag}
                </span>
                <h3 className="font-heading text-h3 font-semibold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-body text-text-secondary leading-[1.7]">{project.description}</p>
              </div>

              {project.placeholder && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center">
                  <Lock size={32} className="text-text-secondary mb-2" aria-hidden="true" />
                  <span className="text-small text-text-secondary">Coming soon</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
