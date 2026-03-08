import { Linkedin, Github } from 'lucide-react';
import { SITE, FOOTER } from '@/constants/content';

const iconMap = {
  Linkedin,
  Github,
} as const;

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-slate/40 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-h3 font-heading font-bold mb-2">
              <span className="text-accent">MPL</span>
              <span className="text-text-primary">Digital</span>
            </p>
            <p className="text-small text-text-secondary">{FOOTER.tagline}</p>
            <p className="text-small text-text-secondary mt-1">{FOOTER.location}</p>
          </div>

          <div>
            <p className="text-small font-semibold text-text-primary mb-3 uppercase tracking-widest">
              Links
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {FOOTER.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-small text-text-secondary hover:text-text-primary transition-colors duration-150 focus-ring"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-small font-semibold text-text-primary mb-3 uppercase tracking-widest">
              Connect
            </p>
            <div className="flex gap-4">
              {FOOTER.social.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href || '#'}
                    aria-label={`MPL Digital on ${social.label}`}
                    className="min-h-[44px] min-w-[44px] flex items-center justify-center text-text-secondary hover:text-accent transition-colors duration-150 focus-ring"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="text-small text-text-secondary hover:text-accent transition-colors duration-150 focus-ring mt-3 inline-block"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="border-t border-slate/40 pt-6 text-center">
          <p className="text-small text-text-secondary">
            {`© ${new Date().getFullYear()} MPL Digital. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
