'use client';

import { useI18n } from '@/contexts/I18nContext';
import { useTheme } from '@/contexts/ThemeContext';

export function Statusbar() {
  const { lang, toggleLang, t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="statusbar">
      <div className="sb-side">
        <span className="sb-item">
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="6" cy="6" r="2.5" />
            <circle cx="6" cy="18" r="2.5" />
            <circle cx="18" cy="12" r="2.5" />
            <path d="M6 8.5v7M8.5 18h3.5a4 4 0 0 0 4-4v-1" />
          </svg>
          <span>{t('sbBranch')}</span>
        </span>
      </div>
      <div className="sb-side">
        <span className="sb-item">{t('sbUtf')}</span>
        <button type="button" className="sb-item click" title="Toggle language" onClick={toggleLang}>
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
          </svg>
          <span>{lang === 'pt' ? 'PT-BR' : 'EN'}</span>
        </button>
        <button type="button" className="sb-item click" title="Toggle theme" onClick={toggleTheme}>
          <span>
            {theme === 'dark' ? (
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
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
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
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            )}
          </span>
          <span>{theme === 'dark' ? 'dark' : 'light'}</span>
        </button>
      </div>
    </footer>
  );
}
