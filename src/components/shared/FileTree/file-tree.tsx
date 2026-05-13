'use client';

import { FileIcon, FolderOpenIcon } from '@/components/shared';
import { cn } from '@/lib/utils';

import { useFileTreeState } from './hooks/use-file-tree-state';

import './file-tree.scss';

export function FileTree() {
  const {
    t,
    activeTab,
    files,
    portfolioOpen,
    sectionsOpen,
    togglePortfolio,
    toggleSections,
    onPortfolioKeyDown,
    onSectionsKeyDown,
    onFile,
    onFileKeyDown,
  } = useFileTreeState();

  return (
    <nav className="tree">
      <div
        className={cn('tree-row', portfolioOpen && 'open')}
        data-folder="folder-portfolio"
        onClick={togglePortfolio}
        onKeyDown={onPortfolioKeyDown}
        role="button"
        tabIndex={0}
      >
        <span className="chev">▸</span>
        <span className="ficon">
          <FolderOpenIcon width={20} height={20} opacity={0.8} aria-hidden />
        </span>
        <span className="lbl tree-section">{t('portfolio')}</span>
      </div>

      <div className={cn('tree-children', !portfolioOpen && 'collapsed')} id="folder-portfolio">
        <div
          className={cn('tree-row', sectionsOpen && 'open')}
          data-folder="folder-sections"
          onClick={toggleSections}
          onKeyDown={onSectionsKeyDown}
          role="button"
          tabIndex={0}
        >
          <span className="chev">▸</span>
          <span className="ficon">
            <FolderOpenIcon width={20} height={20} opacity={0.75} aria-hidden />
          </span>
          <span className="lbl">{t('sections')}</span>
        </div>
        <div className={cn('tree-children', !sectionsOpen && 'collapsed')} id="folder-sections">
          {(['hero.js', 'projects.json', 'contact.sh'] as const).map((file) => (
            <div
              key={file}
              className={cn(
                'tree-row file',
                activeTab === file && 'active',
                files[file].dirty && 'dirty',
              )}
              data-file={file}
              onClick={(e) => onFile(e, file)}
              onKeyDown={(e) => onFileKeyDown(e, file)}
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
