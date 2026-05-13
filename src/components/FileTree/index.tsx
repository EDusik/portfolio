'use client';

import { useI18n } from '@/contexts/I18nContext';
import { useTabs } from '@/contexts/TabsContext';
import type { TabFile } from '@/lib/constants/files';
import { FileIcon } from '@/lib/icons/FileIcon';
import clsx from 'clsx';
import { useCallback, useState } from 'react';

export function FileTree() {
  const { t } = useI18n();
  const { activeTab, openTab, files } = useTabs();
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [sectionsOpen, setSectionsOpen] = useState(true);

  const onFile = useCallback(
    (e: React.MouseEvent, file: TabFile) => {
      e.stopPropagation();
      openTab(file);
    },
    [openTab],
  );

  return (
    <nav className="tree">
      <div
        className={clsx('tree-row', portfolioOpen && 'open')}
        data-folder="folder-portfolio"
        onClick={() => setPortfolioOpen((o) => !o)}
        onKeyDown={(e) => e.key === 'Enter' && setPortfolioOpen((o) => !o)}
        role="button"
        tabIndex={0}
      >
        <span className="chev">▸</span>
        <span className="ficon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity=".8">
            <path d="M2 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v1H2V6zM2 9h22l-2 9a2 2 0 0 1-2 1.6H4A2 2 0 0 1 2 18V9z" />
          </svg>
        </span>
        <span className="lbl tree-section">{t('portfolio')}</span>
      </div>

      <div className={clsx('tree-children', !portfolioOpen && 'collapsed')} id="folder-portfolio">
        <div
          className={clsx('tree-row', sectionsOpen && 'open')}
          data-folder="folder-sections"
          onClick={() => setSectionsOpen((o) => !o)}
          onKeyDown={(e) => e.key === 'Enter' && setSectionsOpen((o) => !o)}
          role="button"
          tabIndex={0}
        >
          <span className="chev">▸</span>
          <span className="ficon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity=".75">
              <path d="M2 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v1H2V6zM2 9h22l-2 9a2 2 0 0 1-2 1.6H4A2 2 0 0 1 2 18V9z" />
            </svg>
          </span>
          <span className="lbl">{t('sections')}</span>
        </div>
        <div className={clsx('tree-children', !sectionsOpen && 'collapsed')} id="folder-sections">
          {(['home.js', 'projects.json', 'contact.sh'] as const).map((file) => (
            <div
              key={file}
              className={clsx(
                'tree-row file',
                activeTab === file && 'active',
                files[file].dirty && 'dirty',
              )}
              data-file={file}
              onClick={(e) => onFile(e, file)}
              onKeyDown={(e) => e.key === 'Enter' && openTab(file)}
              role="button"
              tabIndex={0}
            >
              <span className="chev" style={{ visibility: 'hidden' }}>
                ▸
              </span>
              <span className="ficon">
                <FileIcon kind={files[file].icon} />
              </span>
              <span className="lbl">{file}</span>
              {files[file].dirty ? <span className="dot" title="unsaved changes" /> : null}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
