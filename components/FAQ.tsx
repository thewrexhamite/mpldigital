'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ as FAQ_CONTENT } from '@/constants/content';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-24">
        <div className="text-center mb-14">
          <p
            className={`uppercase tracking-[0.15em] text-small text-text-secondary font-medium mb-4 transition-all duration-700 ease-[var(--ease-out-soft)] ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {FAQ_CONTENT.label}
          </p>
          <h2
            id="faq-heading"
            className={`font-heading text-h2 font-bold text-text-primary transition-all duration-700 ease-[var(--ease-out-soft)] ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: isIntersecting ? '80ms' : '0ms' }}
          >
            {FAQ_CONTENT.headline}
          </h2>
        </div>

        <div className="divide-y divide-border">
          {FAQ_CONTENT.items.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-[var(--ease-out-soft)] ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isIntersecting ? `${160 + i * 80}ms` : '0ms' }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-5 text-left group focus-ring"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-heading text-h3 font-semibold text-text-primary pr-8 transition-colors duration-200 group-hover:text-accent">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-text-secondary transition-transform duration-300 ease-[var(--ease-out-soft)] ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                className={`overflow-hidden transition-all duration-300 ease-[var(--ease-out-soft)] ${
                  openIndex === i ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-body text-text-secondary leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
