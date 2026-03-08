import Image from 'next/image';
import { Linkedin, Github } from 'lucide-react';
import { SITE, FOOTER } from '@/constants/content';

const iconMap = {
  Linkedin,
  Github,
} as const;

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-foreground">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Image
              src="/brand/mpl-logo-light.svg"
              alt="MPL Digital"
              width={160}
              height={48}
              className="h-10 w-auto mb-4"
            />
            <p className="text-small text-white/60 leading-relaxed">{FOOTER.tagline}</p>
            <p className="text-small text-white/60 mt-1">{FOOTER.location}</p>
          </div>

          <div>
            <p className="text-small font-semibold text-white mb-4">Navigation</p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {FOOTER.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-small text-white/60 hover:text-white transition-colors duration-150 focus-ring"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-small font-semibold text-white mb-4">Connect</p>
            <div className="flex gap-3 mb-4">
              {FOOTER.social.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href || '#'}
                    aria-label={`MPL Digital on ${social.label}`}
                    className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all duration-150 focus-ring"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="text-small text-white/60 hover:text-accent transition-colors duration-150 focus-ring"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-small text-white/40">
            {`© ${new Date().getFullYear()} MPL Digital. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
