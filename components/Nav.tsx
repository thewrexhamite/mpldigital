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
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
        <Link href="/" className="focus-ring" aria-label="MPL Digital home">
          <Image
            src="/brand/mpl-logo-dark.png"
            alt="MPL Digital"
            width={600}
            height={180}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-small font-medium transition-colors duration-200 focus-ring py-1 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-text-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
              {/* Active underline indicator */}
              <span
                className={`absolute -bottom-0.5 left-0 h-[2px] bg-accent rounded-full transition-all duration-300 ease-[var(--ease-out-soft)] ${
                  activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
          <a
            href={NAV.cta.href}
            className="inline-flex items-center justify-center min-h-[40px] px-5 py-2 bg-accent text-white font-medium text-small rounded-lg transition-all duration-300 ease-in-out hover:bg-accent/90 hover:shadow-soft hover:-translate-y-0.5 active:scale-[0.98] focus-ring"
          >
            {NAV.cta.label}
          </a>
        </div>

        <button
          ref={menuButtonRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-text-secondary transition-transform duration-200 active:scale-90 focus-ring"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu with slide animation */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden border-t border-border/60 bg-white/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ease-[var(--ease-out-soft)] ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {NAV.links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`text-body py-2.5 font-medium transition-all duration-200 focus-ring ${
                activeSection === link.href.replace('#', '')
                  ? 'text-text-primary translate-x-1'
                  : 'text-text-secondary hover:text-text-primary hover:translate-x-1'
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={NAV.cta.href}
            onClick={closeMenu}
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 bg-accent text-white font-medium text-small rounded-lg transition-all duration-300 ease-in-out hover:bg-accent/90 active:scale-[0.98] focus-ring mt-3"
          >
            {NAV.cta.label}
          </a>
        </div>
      </div>
    </nav>
  );
}
