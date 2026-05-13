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
};

const defaultTitle = dictionaries.pt.pageTitle;

export const siteMetadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: defaultTitle,
  description: 'Eduardo Dusik - Desenvolvedor Front-End',
  keywords: ['eduardo', 'dusik', 'desenvolvedor', 'front-end', 'portfólio', 'dev'],
  authors: [{ name: 'Eduardo Dusik' }],
  manifest: '/static/manifest.json',
  icons: {
    icon: [{ url: '/static/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/static/favicon.svg',
  },
  openGraph: {
    type: 'website',
    title: defaultTitle,
    description: 'Eduardo Dusik - Desenvolvedor Front-End',
    siteName: 'Eduardo Dusik - Desenvolvedor Front-End',
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
    language: 'PT',
    title: defaultTitle,
  },
};
