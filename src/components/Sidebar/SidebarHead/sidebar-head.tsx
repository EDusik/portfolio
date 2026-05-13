'use client';

import { useSidebarHeadState } from './hooks/use-sidebar-head-state';

import './sidebar-head.scss';

export function SidebarHead() {
  const { t } = useSidebarHeadState();

  return (
    <div className="sidebar-head">
      <span>{t('explorer')}</span>
    </div>
  );
}
