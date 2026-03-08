'use client';

import { useSyncExternalStore, useCallback } from 'react';

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

const COOKIE_NAME = 'mpl_cookie_consent';

function subscribe(callback: () => void) {
  window.addEventListener('consentGranted', callback);
  return () => window.removeEventListener('consentGranted', callback);
}

function getSnapshot(): boolean {
  return getCookie(COOKIE_NAME) === 'accepted';
}

function getServerSnapshot(): boolean {
  return false;
}

export function useCookieConsent() {
  const consented = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const accept = useCallback(() => {
    document.cookie = `${COOKIE_NAME}=accepted; max-age=31536000; path=/; SameSite=Lax`;
    window.dispatchEvent(new CustomEvent('consentGranted'));
  }, []);

  return { consented, accept };
}
