'use client';

import { FolderClosedIcon, FolderOpenIcon } from '@/components/shared';
import { useTopbarState } from './hooks/use-topbar-state';

import './topbar.scss';

export function Topbar() {
  const { activeTab, onBurger } = useTopbarState();

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
          <FolderClosedIcon className="i-folder" aria-hidden />
          <FolderOpenIcon className="i-folder-open" aria-hidden />
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
