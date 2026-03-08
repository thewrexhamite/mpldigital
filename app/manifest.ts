import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MPL Digital',
    short_name: 'MPL Digital',
    description: 'Web app development and digital strategy consultancy based in North Wales.',
    start_url: '/',
    display: 'standalone',
    theme_color: '#FFFFFF',
    background_color: '#FFFFFF',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
