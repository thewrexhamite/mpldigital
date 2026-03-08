'use client';

import { useEffect, useRef } from 'react';
import { useCookieConsent } from '@/lib/useCookieConsent';

export default function CookieBanner() {
  const { consented, accept } = useCookieConsent();
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consented) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        accept();
        return;
      }

      if (e.key === 'Tab' && bannerRef.current) {
        const focusable = bannerRef.current.querySelectorAll<HTMLElement>('a[href], button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [consented, accept]);

  if (consented) return null;

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-slate p-4 sm:p-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p id="cookie-banner-title" className="text-small font-semibold text-text-primary mb-1">
            Cookie preferences
          </p>
          <p id="cookie-banner-desc" className="text-small text-text-secondary">
            We use analytics cookies to understand how our site performs. No advertising or tracking
            cookies are used. See our{' '}
            <a
              href="/privacy"
              className="text-accent underline-offset-4 hover:underline transition-colors duration-150 focus-ring"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="/privacy"
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-4 py-2 border border-slate text-text-primary text-small rounded transition-all duration-150 hover:bg-white/5 hover:border-white/20 active:scale-95 focus-ring"
          >
            Learn more
          </a>
          <button
            onClick={accept}
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-2 bg-accent text-white font-semibold text-small rounded transition-all duration-150 hover:brightness-110 active:scale-95 focus-ring"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
