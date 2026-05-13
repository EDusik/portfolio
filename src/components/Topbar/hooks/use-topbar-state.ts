'use client';

import { useTabs } from '@/contexts/TabsContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useCallback, useEffect, useState } from 'react';

export function useTopbarState() {
  const { activeTab } = useTabs();
  const isMobile = useMediaQuery('(max-width: 880px)');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (isMobile) {
      document.body.classList.remove('sidebar-collapsed');
    } else {
      document.body.classList.remove('menu-open');
      try {
        setSidebarCollapsed(localStorage.getItem('sidebar') === 'collapsed');
      } catch {}
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile && sidebarCollapsed) document.body.classList.add('sidebar-collapsed');
    else document.body.classList.remove('sidebar-collapsed');
  }, [isMobile, sidebarCollapsed]);

  const onBurger = useCallback(() => {
    if (isMobile) {
      document.body.classList.toggle('menu-open');
    } else {
      setSidebarCollapsed((current) => {
        const next = !current;
        try {
          localStorage.setItem('sidebar', next ? 'collapsed' : 'open');
        } catch {}
        return next;
      });
    }
  }, [isMobile]);

  return { activeTab, onBurger };
}
