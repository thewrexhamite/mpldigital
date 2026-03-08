import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { SITE, SEO } from '@/constants/content';
import SkipNav from '@/components/SkipNav';
import CookieBanner from '@/components/CookieBanner';
import Analytics from '@/components/Analytics';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SEO.title,
  description: SEO.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SEO.ogTitle,
    description: SEO.ogDescription,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
    images: [
      {
        url: `${SITE.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: SEO.twitterCard,
    title: SEO.ogTitle,
    description: SEO.ogDescription,
    images: [`${SITE.url}/opengraph-image`],
  },
  // TODO: Add verification code after connecting Google Search Console post-launch
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE.name,
  description: 'Web app development and digital strategy consultancy based in North Wales.',
  url: SITE.url,
  email: SITE.email,
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'North Wales' },
    { '@type': 'AdministrativeArea', name: 'North West England' },
  ],
  serviceType: [
    'Web App Development',
    'Digital Strategy',
    'CRM & Systems Integration',
    'Social Media & Marketing Strategy',
  ],
  priceRange: '££',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:30',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <SkipNav />
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
