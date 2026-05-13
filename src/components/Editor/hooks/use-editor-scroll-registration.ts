'use client';

import { useTabs } from '@/contexts/TabsContext';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useEffect, useState } from 'react';

export function useEditorScrollRegistration() {
  const { registerScrollContainer, setActive, activeTab } = useTabs();
  const [pagesEl, setPagesEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    registerScrollContainer(pagesEl);
    return () => registerScrollContainer(null);
  }, [pagesEl, registerScrollContainer]);

  useScrollSpy(pagesEl, setActive, activeTab);

  return setPagesEl;
}
