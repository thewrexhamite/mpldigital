import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MPL Digital',
    short_name: 'MPL Digital',
    description: 'Web app development and digital strategy consultancy based in North Wales.',
    start_url: '/',
    display: 'standalone',
    theme_color: '#F5F5F7',
    background_color: '#F5F5F7',
    icons: [
      {
        src: '/brand/mpl-icon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/brand/mpl-icon-180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/brand/mpl-icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
