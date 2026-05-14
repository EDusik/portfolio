import { dictionaries } from '@/lib/i18n/dictionaries';
import type { Metadata, Viewport } from 'next';

function metadataBaseUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (raw) {
    try {
      return new URL(raw);
    } catch {}
  }
  return new URL('http://localhost:3000');
}

export const siteViewport: Viewport = {
  themeColor: '#6272a4',
  viewportFit: 'cover',
};

const defaultTitle = dictionaries.en.pageTitle;

export const siteMetadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: defaultTitle,
  description: 'Eduardo Dusik - Front-End Engineer',
  keywords: ['eduardo', 'dusik', 'developer', 'front-end', 'portfolio', 'web'],
  authors: [{ name: 'Eduardo Dusik' }],
  manifest: '/static/manifest.json',
  icons: {
    icon: [{ url: '/static/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/static/favicon.svg',
  },
  openGraph: {
    type: 'website',
    title: defaultTitle,
    description: 'Eduardo Dusik - Front-End Engineer',
    siteName: 'Eduardo Dusik - Front-End Engineer',
    images: [
      {
        url: '/static/logo192.png',
        width: 192,
        height: 192,
        alt: 'Eduardo Dusik',
      },
    ],
  },
  other: {
    language: 'EN',
    title: defaultTitle,
  },
};
