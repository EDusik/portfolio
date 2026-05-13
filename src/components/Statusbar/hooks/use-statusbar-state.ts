'use client';

import { useI18n } from '@/contexts/I18nContext';
import { useTheme } from '@/contexts/ThemeContext';

export function useStatusbarState() {
  const { lang, toggleLang, t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  return { lang, toggleLang, t, theme, toggleTheme };
}
