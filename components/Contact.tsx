'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
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

  const inputClasses =
    'w-full bg-surface border border-border rounded-lg px-4 py-3 text-body text-text-primary placeholder:text-text-secondary/40 focus-ring transition-all duration-200 hover:border-text-secondary/30 focus:shadow-soft';

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-surface"
    >
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-24">
        <h2
          id="contact-heading"
          className={`font-heading text-h2 font-bold text-text-primary mb-5 transition-all duration-700 ease-[var(--ease-out-soft)] ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {CONTACT.headline}
        </h2>
        <p
          className={`text-lg text-text-secondary mb-4 leading-relaxed transition-all duration-700 ease-[var(--ease-out-soft)] ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isIntersecting ? '80ms' : '0ms' }}
        >
          {CONTACT.subtext}
        </p>
        <p
          className={`text-body text-text-secondary mb-12 transition-all duration-700 ease-[var(--ease-out-soft)] ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isIntersecting ? '160ms' : '0ms' }}
        >
          Or email us directly at{' '}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-accent font-medium hover:underline underline-offset-4 transition-colors duration-150 focus-ring"
          >
            {CONTACT.email}
          </a>
        </p>

        <div
          className={`transition-all duration-700 ease-[var(--ease-out-soft)] ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isIntersecting ? '240ms' : '0ms' }}
        >
          {formState === 'success' ? (
            <div className="bg-surface border border-border rounded-lg p-10 text-center animate-scale-in">
              <CheckCircle2 size={40} className="text-accent mx-auto mb-4" aria-hidden="true" />
              <p className="text-h3 font-heading font-semibold text-text-primary mb-2">
                Message sent!
              </p>
              <p className="text-body text-text-secondary">{"We'll get back to you soon."}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
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

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-small font-medium text-text-primary mb-1.5"
                >
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
                  className={inputClasses}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="flex items-center gap-1.5 mt-2 text-small text-red-600 animate-slide-up"
                  >
                    <AlertCircle size={14} aria-hidden="true" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-small font-medium text-text-primary mb-1.5"
                >
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
                  className={inputClasses}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="flex items-center gap-1.5 mt-2 text-small text-red-600 animate-slide-up"
                  >
                    <AlertCircle size={14} aria-hidden="true" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-small font-medium text-text-primary mb-1.5"
                >
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
                  className={`${inputClasses} resize-y`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="flex items-center gap-1.5 mt-2 text-small text-red-600 animate-slide-up"
                  >
                    <AlertCircle size={14} aria-hidden="true" />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="group inline-flex items-center justify-center gap-2 min-h-[48px] min-w-[44px] px-7 py-3 bg-accent text-white font-medium text-body rounded-lg transition-all duration-300 ease-in-out hover:bg-accent/90 hover:shadow-soft-lg hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none focus-ring"
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
                    <>
                      Send message
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>
              </div>

              <p className="text-small text-text-secondary">
                {CONTACT.formNote.replace('Privacy Policy', '')}{' '}
                <a
                  href="/privacy"
                  className="text-accent font-medium hover:underline underline-offset-4 transition-colors duration-150 focus-ring"
                >
                  Privacy Policy
                </a>{' '}
                for details.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
