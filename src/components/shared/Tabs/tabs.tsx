'use client';

import { FileIcon } from '@/components/shared';
import { cn } from '@/lib/utils';

import { useTabsState } from './hooks/use-tabs-state';

import './tabs.scss';

export function Tabs() {
  const { openTabs, activeTab, files, openTab, onTabKeyDown } = useTabsState();

  return (
    <div className="tabs" role="tablist">
      {openTabs.map((name) => (
        <div
          key={name}
          role="tab"
          tabIndex={0}
          className={cn('tab', activeTab === name && 'active', files[name].dirty && 'dirty')}
          data-file={name}
          onClick={() => openTab(name)}
          onKeyDown={(e) => onTabKeyDown(e, name)}
        >
          <span className="ficon">
            <FileIcon kind={files[name].icon} size={25} />
          </span>
          <span className="lbl">{name}</span>
        </div>
      ))}
    </div>
  );
}
