'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { dictionaries } from '@/lib/i18n/dictionaries';
import type { DictKey, Locale } from '@/lib/i18n/types';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type I18nContextValue = {
  lang: Locale;
  setLang: (l: Locale) => void;
  toggleLang: () => void;
  t: (key: DictKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLang(): Locale {
  if (typeof window === 'undefined') return 'pt';
  const v = localStorage.getItem('lang');
  return v === 'en' || v === 'pt' ? v : 'pt';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>('pt');

  useIsoLayoutEffect(() => {
    setLangState(readStoredLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = dictionaries[lang].pageTitle;
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((l: Locale) => setLangState(l), []);
  const toggleLang = useCallback(() => setLangState((prev) => (prev === 'pt' ? 'en' : 'pt')), []);

  const t = useCallback(
    (key: DictKey) =>
      (dictionaries[lang] as Record<string, string>)[key] ?? dictionaries.en[key] ?? String(key),
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, toggleLang, t }), [lang, setLang, toggleLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
