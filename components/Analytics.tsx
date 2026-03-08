'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useCookieConsent } from '@/lib/useCookieConsent';

export default function Analytics() {
  const { consented } = useCookieConsent();

  if (!consented) return null;

  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
}
