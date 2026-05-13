import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';

import { AppProviders } from '@/components/AppProviders';
import { siteMetadata, siteViewport } from '@/components/SiteHead';
import { dictionaries } from '@/lib/i18n/dictionaries';
import '@/styles';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Script
          id="theme-flash"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}",
          }}
        />
        <Script
          id="title-lang"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var l=localStorage.getItem('lang');document.title=l==='pt'?${JSON.stringify(dictionaries.pt.pageTitle)}:${JSON.stringify(dictionaries.en.pageTitle)};}catch(e){}`,
          }}
        />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
