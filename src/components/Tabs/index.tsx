'use client';

import { useTabs } from '@/contexts/TabsContext';
import { FileIcon } from '@/lib/icons/FileIcon';
import clsx from 'clsx';

export function Tabs() {
  const { openTabs, activeTab, files, openTab } = useTabs();

  return (
    <div className="tabs" role="tablist">
      {openTabs.map((name) => (
        <div
          key={name}
          role="tab"
          tabIndex={0}
          className={clsx('tab', activeTab === name && 'active', files[name].dirty && 'dirty')}
          data-file={name}
          onClick={() => openTab(name)}
          onKeyDown={(e) => e.key === 'Enter' && openTab(name)}
        >
          <span className="ficon">
            <FileIcon kind={files[name].icon} />
          </span>
          <span className="lbl">{name}</span>
        </div>
      ))}
    </div>
  );
}
