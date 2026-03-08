import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found — MPL Digital',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-heading text-h1 font-bold tracking-[-0.02em] text-text-primary mb-4">
          404 — Page not found.
        </h1>
        <p className="text-body text-text-secondary mb-8 leading-[1.7]">
          {"The page you're looking for doesn't exist or has been moved."}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-8 py-3 bg-accent text-white font-heading font-semibold text-body rounded transition-all duration-150 hover:brightness-110 active:scale-95 focus-ring"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
