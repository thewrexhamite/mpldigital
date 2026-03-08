'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV } from '@/constants/content';
import { useActiveSection } from '@/lib/useIntersectionObserver';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const sectionIds = useMemo(() => NAV.links.map((l) => l.href.replace('#', '')), []);
  const activeSection = useActiveSection(sectionIds);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();

      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>('a[href], button');
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
  }, [menuOpen, closeMenu]);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/70 border-b border-border/60"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between h-[72px]">
        <Link href="/" className="focus-ring" aria-label="MPL Digital home">
          <Image
            src="/brand/mpl-logo-dark.svg"
            alt="MPL Digital"
            width={200}
            height={60}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-small font-medium transition-colors duration-150 focus-ring ${
                activeSection === link.href.replace('#', '')
                  ? 'text-text-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={NAV.cta.href}
            className="inline-flex items-center justify-center min-h-[40px] px-5 py-2 bg-accent text-white font-medium text-small rounded-lg transition-all duration-150 hover:bg-accent/90 active:scale-[0.98] focus-ring"
          >
            {NAV.cta.label}
          </a>
        </div>

        <button
          ref={menuButtonRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-text-secondary focus-ring"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden border-t border-border/60 bg-white/95 backdrop-blur-xl"
        >
          <div className="px-6 py-5 flex flex-col gap-1">
            {NAV.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-body py-2.5 font-medium transition-colors duration-150 focus-ring ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={NAV.cta.href}
              onClick={closeMenu}
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 bg-accent text-white font-medium text-small rounded-lg transition-all duration-150 hover:bg-accent/90 active:scale-[0.98] focus-ring mt-3"
            >
              {NAV.cta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
