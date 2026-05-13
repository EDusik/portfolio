'use client';

import dynamic from 'next/dynamic';

import { AvailableForHire, CodeChevronsIcon, MailIcon } from '@/components/shared';
import { useHeroState } from './hooks/use-hero-state';

import './hero.scss';

const HeroScene = dynamic(() => import('./HeroScene/hero-scene').then((m) => m.HeroScene), {
  ssr: false,
});

export function Hero() {
  const { t, mode, openProjects, openContact } = useHeroState();

  return (
    <div className="hero">
      <HeroScene mode={mode} />
      <div className="hero-content">
        <AvailableForHire />
        <h1>
          <span>{t('heroName')}</span>
          <span className="caret" />
          <br />
          <span className="accent">{t('heroRole')}</span>
        </h1>
        <p className="lede">{t('lede')}</p>
        <div className="btn-row">
          <button type="button" className="btn primary" onClick={openProjects}>
            <CodeChevronsIcon aria-hidden />
            <span>{t('btnProjects')}</span>
          </button>
          <button type="button" className="btn" onClick={openContact}>
            <MailIcon aria-hidden />
            <span>{t('btnContact')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
