'use client';

import { GitBranchIcon, GlobeIcon, MoonIcon, SunIcon } from '@/components/shared';
import { useStatusbarState } from './hooks/use-statusbar-state';

import './statusbar.scss';

export function Statusbar() {
  const { lang, toggleLang, t, theme, toggleTheme } = useStatusbarState();

  return (
    <footer className="statusbar">
      <div className="sb-side">
        <span className="sb-item">
          <GitBranchIcon aria-hidden />
          <span>{t('sbBranch')}</span>
        </span>
      </div>
      <div className="sb-side">
        <span className="sb-item">{t('sbUtf')}</span>
        <button
          type="button"
          className="sb-item click"
          title="Toggle language"
          onClick={toggleLang}
        >
          <GlobeIcon aria-hidden />
          <span>{lang === 'pt' ? 'PT-BR' : 'EN'}</span>
        </button>
        <button type="button" className="sb-item click" title="Toggle theme" onClick={toggleTheme}>
          <span>{theme === 'dark' ? <MoonIcon aria-hidden /> : <SunIcon aria-hidden />}</span>
          <span>{theme === 'dark' ? 'dark' : 'light'}</span>
        </button>
      </div>
    </footer>
  );
}
