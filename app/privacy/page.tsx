import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/constants/content';

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE.name}`,
  description: `Privacy policy for ${SITE.name}. How we collect, use, and protect your data.`,
  alternates: {
    canonical: `${SITE.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 pt-32">
        <h1 className="font-heading text-h1 font-bold tracking-[-0.02em] text-text-primary mb-8">
          Privacy Policy
        </h1>
        <p className="text-small text-text-secondary mb-12">Last updated: March 2026</p>

        <div className="space-y-10 text-body text-text-secondary leading-[1.7]">
          <section>
            <h2 className="font-heading text-h3 font-semibold text-text-primary mb-3">
              1. Data Controller
            </h2>
            <p>
              MPL Digital is the data controller for your personal data. You can contact us at{' '}
              <a
                href={`mailto:${SITE.email}`}
                className="text-accent underline-offset-4 hover:underline transition-colors duration-150 focus-ring"
              >
                {SITE.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-h3 font-semibold text-text-primary mb-3">
              2. Data We Collect
            </h2>
            <p className="mb-3">We collect the following personal data:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-text-primary">Contact form submissions:</strong> your name,
                email address, and message content.
              </li>
              <li>
                <strong className="text-text-primary">Analytics data:</strong> anonymised page
                views, performance metrics, and device information collected via Vercel Analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-h3 font-semibold text-text-primary mb-3">
              3. Purpose and Legal Basis
            </h2>
            <p className="mb-3">We process your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-text-primary">Contact form enquiries:</strong> to respond to
                your enquiry. Legal basis: performance of a contract or steps prior to entering into
                a contract (UK GDPR Article 6(1)(b)).
              </li>
              <li>
                <strong className="text-text-primary">Analytics:</strong> to understand site
                performance and improve our services. Legal basis: legitimate interest (UK GDPR
                Article 6(1)(f)).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-h3 font-semibold text-text-primary mb-3">
              4. Data Retention
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Contact form submissions are retained for up to 2 years from the date of your
                enquiry, or until the purpose for which they were collected has been fulfilled.
              </li>
              <li>
                Analytics data is retained in accordance with Vercel&apos;s data retention policies
                (typically aggregated and anonymised).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-h3 font-semibold text-text-primary mb-3">
              5. Your Rights Under UK GDPR
            </h2>
            <p className="mb-3">
              Under the UK General Data Protection Regulation, you have the following rights:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>
                <strong className="text-text-primary">Right of access</strong> — You have the right
                to request a copy of the personal data we hold about you.
              </li>
              <li>
                <strong className="text-text-primary">Right to rectification</strong> — You have the
                right to request correction of inaccurate personal data.
              </li>
              <li>
                <strong className="text-text-primary">Right to erasure</strong> — You have the right
                to request deletion of your personal data.
              </li>
              <li>
                <strong className="text-text-primary">Right to data portability</strong> — You have
                the right to receive your personal data in a structured, commonly used format.
              </li>
              <li>
                <strong className="text-text-primary">Right to restriction of processing</strong> —
                You have the right to request restriction of processing in certain circumstances.
              </li>
              <li>
                <strong className="text-text-primary">Right to object</strong> — You have the right
                to object to processing based on legitimate interests.
              </li>
              <li>
                <strong className="text-text-primary">Right to withdraw consent</strong> — Where
                processing is based on consent, you have the right to withdraw it at any time.
              </li>
              <li>
                <strong className="text-text-primary">
                  Rights related to automated decision-making
                </strong>{' '}
                — We do not use automated decision-making or profiling.
              </li>
            </ol>
            <p className="mt-3">
              To exercise any of these rights, contact us at{' '}
              <a
                href={`mailto:${SITE.email}`}
                className="text-accent underline-offset-4 hover:underline transition-colors duration-150 focus-ring"
              >
                {SITE.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-h3 font-semibold text-text-primary mb-3">
              6. Cookies
            </h2>
            <p className="mb-3">We use the following cookies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-text-primary">mpl_cookie_consent</strong> — Records your
                cookie consent preference. Essential cookie, set for 1 year.
              </li>
              <li>
                <strong className="text-text-primary">Vercel Analytics</strong> — Performance
                analytics cookies. Only set after you provide consent via our cookie banner.
              </li>
            </ul>
            <p className="mt-3">We do not use advertising or third-party tracking cookies.</p>
          </section>

          <section>
            <h2 className="font-heading text-h3 font-semibold text-text-primary mb-3">
              7. Third-Party Processors
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-text-primary">Vercel Inc.</strong> — Hosting and analytics
                provider. Data may be processed outside the UK under appropriate safeguards.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-h3 font-semibold text-text-primary mb-3">
              8. ICO Registration
            </h2>
            {/* TODO: Add ICO registration number once registered */}
            <p>
              MPL Digital is in the process of registering with the Information Commissioner&apos;s
              Office (ICO). Registration details will be updated here once complete.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-h3 font-semibold text-text-primary mb-3">
              9. Complaints
            </h2>
            <p>
              If you are unhappy with how we handle your personal data, you have the right to lodge
              a complaint with the Information Commissioner&apos;s Office (ICO) at{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline transition-colors duration-150 focus-ring"
              >
                ico.org.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-h3 font-semibold text-text-primary mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on
              this page with an updated revision date.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-slate/40">
          <Link
            href="/"
            className="text-accent underline-offset-4 hover:underline transition-colors duration-150 focus-ring"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
