import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found — MPL Digital',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-6">
        <Image
          src="/brand/mpl-icon.svg"
          alt=""
          width={48}
          height={48}
          className="mx-auto mb-6 opacity-20"
          aria-hidden="true"
        />
        <h1 className="font-heading text-h1 font-bold text-text-primary mb-4">
          404 — Page not found.
        </h1>
        <p className="text-lg text-text-secondary mb-10 leading-relaxed">
          {"The page you're looking for doesn't exist or has been moved."}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center min-h-[48px] min-w-[44px] px-7 py-3 bg-accent text-white font-medium text-body rounded-lg transition-all duration-150 hover:bg-accent/90 active:scale-[0.98] focus-ring"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
