'use client';

import { useI18n } from '@/contexts/I18nContext';
import { useTabs } from '@/contexts/TabsContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useCallback } from 'react';

type HeroMode = 'stars' | 'snow';

export function useHeroState() {
  const { t } = useI18n();
  const { openTab } = useTabs();
  const { theme } = useTheme();

  const mode: HeroMode = theme === 'light' ? 'snow' : 'stars';
  const openProjects = useCallback(() => openTab('projects.json'), [openTab]);
  const openContact = useCallback(() => openTab('contact.sh'), [openTab]);

  return { t, mode, openProjects, openContact };
}
