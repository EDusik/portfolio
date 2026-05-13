'use client';

import { useTabs } from '@/contexts/TabsContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useCallback, useEffect, useState } from 'react';

export function Topbar() {
  const { activeTab } = useTabs();
  const isMobile = useMediaQuery('(max-width: 880px)');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (!isMobile && typeof window !== 'undefined') {
      if (localStorage.getItem('sidebar') === 'collapsed') setSidebarCollapsed(true);
    }
  }, [isMobile]);

  useEffect(() => {
    if (sidebarCollapsed) document.body.classList.add('sidebar-collapsed');
    else document.body.classList.remove('sidebar-collapsed');
  }, [sidebarCollapsed]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(max-width: 880px)').matches) {
        document.body.classList.remove('sidebar-collapsed');
      } else {
        document.body.classList.remove('menu-open');
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const onBurger = useCallback(() => {
    if (isMobile) {
      document.body.classList.toggle('menu-open');
    } else {
      setSidebarCollapsed((c) => {
        const next = !c;
        try {
          localStorage.setItem('sidebar', next ? 'collapsed' : 'open');
        } catch {
          /* ignore */
        }
        return next;
      });
    }
  }, [isMobile]);

  return (
    <header className="topbar">
      <div className="tb-left">
        <button
          type="button"
          className="icon-btn folder-toggle"
          aria-label="Toggle file explorer"
          title="Toggle Explorer"
          onClick={onBurger}
        >
          <svg className="i-folder" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" />
          </svg>
          <svg className="i-folder-open" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v1H2V6zM2 9h22l-2 9a2 2 0 0 1-2 1.6H4A2 2 0 0 1 2 18V9z" />
          </svg>
        </button>
        <div className="traffic" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="tb-center">
        <span className="file-pill">{activeTab}</span>
      </div>
      <div className="tb-right" />
    </header>
  );
}
