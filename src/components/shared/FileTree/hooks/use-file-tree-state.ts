'use client';

import { useI18n } from '@/contexts/I18nContext';
import { useTabs } from '@/contexts/TabsContext';
import type { TabFile } from '@/lib/constants/files';
import { useCallback, useState, type KeyboardEvent, type MouseEvent } from 'react';

export function useFileTreeState() {
  const { t } = useI18n();
  const { activeTab, openTab, files } = useTabs();
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [sectionsOpen, setSectionsOpen] = useState(true);

  const togglePortfolio = useCallback(() => setPortfolioOpen((open) => !open), []);
  const toggleSections = useCallback(() => setSectionsOpen((open) => !open), []);

  const onPortfolioKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') togglePortfolio();
    },
    [togglePortfolio],
  );

  const onSectionsKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') toggleSections();
    },
    [toggleSections],
  );

  const onFile = useCallback(
    (event: MouseEvent, file: TabFile) => {
      event.stopPropagation();
      openTab(file);
    },
    [openTab],
  );

  const onFileKeyDown = useCallback(
    (event: KeyboardEvent, file: TabFile) => {
      if (event.key === 'Enter') openTab(file);
    },
    [openTab],
  );

  return {
    t,
    activeTab,
    files,
    portfolioOpen,
    sectionsOpen,
    togglePortfolio,
    toggleSections,
    onPortfolioKeyDown,
    onSectionsKeyDown,
    onFile,
    onFileKeyDown,
  };
}
