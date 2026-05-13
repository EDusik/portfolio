'use client';

import { useI18n } from '@/contexts/I18nContext';
import { FileTree } from '@/components/FileTree';
import { Socials } from '@/components/Socials';

export function Sidebar() {
  const { t } = useI18n();

  return (
    <aside className="sidebar">
      <div className="sidebar-head">
        <span>{t('explorer')}</span>
      </div>
      <FileTree />
      <Socials />
    </aside>
  );
}
