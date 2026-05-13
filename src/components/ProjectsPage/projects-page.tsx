'use client';

import { ChevronToggleIcon, Gutter, ProjectCard, SearchIcon } from '@/components/shared';
import type { Project } from '@/lib/github';

import { useProjectsPageState } from './hooks/use-projects-page-state';

import './projects-page.scss';

export function ProjectsPage({ initialProjects }: { initialProjects: Project[] }) {
  const { t, lang, query, setQuery, expanded, visible, list, showToggle, toggleExpanded } =
    useProjectsPageState(initialProjects);

  return (
    <section className="page" id="page-projects_json">
      <div className="codepane">
        <Gutter tab="projects.json" />
        <div className="code">
          <div className="projects-head">
            <div>
              <h2>{t('projTitle')}</h2>
            </div>
            <div className="proj-tools">
              <div className="search proj-search">
                <SearchIcon aria-hidden />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('projSearch')}
                  aria-label={t('projSearch')}
                />
              </div>
            </div>
          </div>
          <div className="grid" id="projects-grid">
            {!list.length ? (
              <div className="projects-grid-empty">
                {t('noMatches')}{' '}
                <span style={{ color: 'var(--accent)' }}>&quot;{query.trim() || '—'}&quot;</span>
              </div>
            ) : (
              visible.map((p) => (
                <ProjectCard
                  key={p.name}
                  project={p}
                  desc={lang === 'pt' ? p.desc_pt : p.desc_en}
                  openLabel={t('open')}
                  copyLabel={t('copyProjectShare')}
                  copyDoneLabel={t('copyProjectShareDone')}
                />
              ))
            )}
          </div>
          {showToggle ? (
            <div className="projects-more">
              <button
                type="button"
                className="btn projects-more-btn"
                onClick={toggleExpanded}
                aria-expanded={expanded}
                aria-controls="projects-grid"
                aria-label={expanded ? t('projShowLess') : t('projShowMore')}
              >
                <ChevronToggleIcon expanded={expanded} aria-hidden />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
