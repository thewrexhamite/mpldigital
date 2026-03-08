'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { CONTACT } from '@/constants/content';
import { useIntersectionObserver } from '@/lib/useIntersectionObserver';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(name: string, email: string, message: string): FormErrors {
  const errors: FormErrors = {};
  if (!name || name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!message || message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>('idle');
  const { ref, isIntersecting } = useIntersectionObserver();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(name, email, message);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setFormState('loading');

    // TODO: Connect to backend (Resend recommended). Handle data per privacy policy. Do not forward to any third party without explicit user consent.
    // Honeypot for spam prevention — validate server-side: reject submission if website field is not empty
    setTimeout(() => {
      if (website) {
        setFormState('success');
        return;
      }
      setFormState('success');
    }, 1000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div
        className={`max-w-3xl mx-auto px-4 sm:px-6 py-24 transition-all duration-500 ease-out ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2
          id="contact-heading"
          className="font-heading text-h2 font-bold tracking-[-0.01em] text-text-primary mb-4"
        >
          {CONTACT.headline}
        </h2>
        <p className="text-body text-text-secondary mb-4 leading-[1.7]">{CONTACT.subtext}</p>
        <p className="text-body text-text-secondary mb-10 leading-[1.7]">
          Or email us directly at{' '}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-accent underline-offset-4 hover:underline transition-colors duration-150 focus-ring"
          >
            {CONTACT.email}
          </a>
        </p>

        {formState === 'success' ? (
          <div className="bg-surface border border-slate rounded p-8 text-center">
            <CheckCircle2 size={48} className="text-accent mx-auto mb-4" aria-hidden="true" />
            <p className="text-h3 font-heading font-semibold text-text-primary mb-2">
              Message sent!
            </p>
            <p className="text-body text-text-secondary">{"We'll get back to you soon."}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {/* Honeypot for spam prevention — validate server-side: reject submission if this field is not empty */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: 'none' }}
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            <div className="mb-6">
              <label htmlFor="contact-name" className="block text-small text-text-primary mb-2">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="w-full bg-white border border-slate rounded px-4 py-3 text-body text-text-primary placeholder:text-text-secondary/50 focus-ring transition-colors duration-200"
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" className="flex items-center gap-1 mt-2 text-small text-red-600">
                  <AlertCircle size={14} aria-hidden="true" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="contact-email" className="block text-small text-text-primary mb-2">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full bg-white border border-slate rounded px-4 py-3 text-body text-text-primary placeholder:text-text-secondary/50 focus-ring transition-colors duration-200"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="flex items-center gap-1 mt-2 text-small text-red-600"
                >
                  <AlertCircle size={14} aria-hidden="true" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="contact-message" className="block text-small text-text-primary mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                rows={5}
                className="w-full bg-white border border-slate rounded px-4 py-3 text-body text-text-primary placeholder:text-text-secondary/50 focus-ring transition-colors duration-200 resize-y"
                placeholder="Tell us about your project..."
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="flex items-center gap-1 mt-2 text-small text-red-600"
                >
                  <AlertCircle size={14} aria-hidden="true" />
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={formState === 'loading'}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-8 py-3 bg-accent text-white font-heading font-semibold text-body rounded transition-all duration-150 hover:brightness-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus-ring"
            >
              {formState === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : formState === 'error' ? (
                <>
                  <AlertCircle size={18} aria-hidden="true" />
                  Try again
                </>
              ) : (
                'Send message'
              )}
            </button>

            <p className="text-small text-text-secondary mt-4">
              {CONTACT.formNote.replace('Privacy Policy', '')}{' '}
              <a
                href="/privacy"
                className="text-accent underline-offset-4 hover:underline transition-colors duration-150 focus-ring"
              >
                Privacy Policy
              </a>{' '}
              for details.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
