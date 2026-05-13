'use client';

import { useTabs } from '@/contexts/TabsContext';
import type { TabFile } from '@/lib/constants/files';
import { useCallback, type KeyboardEvent } from 'react';

export function useTabsState() {
  const { openTabs, activeTab, files, openTab } = useTabs();

  const onTabKeyDown = useCallback(
    (event: KeyboardEvent, name: TabFile) => {
      if (event.key === 'Enter') openTab(name);
    },
    [openTab],
  );

  return { openTabs, activeTab, files, openTab, onTabKeyDown };
}
