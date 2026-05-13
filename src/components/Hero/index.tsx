'use client';

import { useI18n } from '@/contexts/I18nContext';
import { useTabs } from '@/contexts/TabsContext';
import dynamic from 'next/dynamic';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

const HeroScene = dynamic(() => import('@/components/HeroScene').then((m) => m.HeroScene), {
  ssr: false,
});

export function Hero() {
  const { t } = useI18n();
  const { openTab } = useTabs();
  const { theme } = useTheme();
  const [mode, setMode] = useState<'stars' | 'snow'>(() => (theme === 'light' ? 'snow' : 'stars'));

  useEffect(() => {
    setMode(theme === 'light' ? 'snow' : 'stars');
  }, [theme]);

  useEffect(() => {
    const fn = (e: Event) => {
      const ce = e as CustomEvent<'dark' | 'light'>;
      if (ce.detail === 'light' || ce.detail === 'dark') {
        setMode(ce.detail === 'light' ? 'snow' : 'stars');
      }
    };
    window.addEventListener('themechange', fn as EventListener);
    return () => window.removeEventListener('themechange', fn as EventListener);
  }, []);

  return (
    <div className="hero">
      <HeroScene mode={mode} />
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="pulse" />
          <span>{t('eyebrow')}</span>
        </div>
        <h1>
          <span>{t('heroName')}</span>
          <span className="caret" />
          <br />
          <span className="accent">{t('heroRole')}</span>
        </h1>
        <p className="lede">{t('lede')}</p>
        <div className="btn-row">
          <button type="button" className="btn primary" onClick={() => openTab('projects.json')}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span>{t('btnProjects')}</span>
          </button>
          <button type="button" className="btn" onClick={() => openTab('contact.sh')}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16v12H5.17L4 17.17V4z" />
            </svg>
            <span>{t('btnContact')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
