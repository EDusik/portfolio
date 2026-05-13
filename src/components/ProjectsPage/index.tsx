'use client';

import type { Project, ProjectTag } from '@/lib/github';
import { Gutter } from '@/components/CodePane/Gutter';
import { ProjectCard } from '@/components/ProjectCard';
import { useI18n } from '@/contexts/I18nContext';
import clsx from 'clsx';
import { useMemo, useState } from 'react';

const FILTERS: { key: ProjectTag | 'all'; dict: 'fAll' | 'fWeb' | 'fTooling' | 'fOSS' }[] = [
  { key: 'all', dict: 'fAll' },
  { key: 'web', dict: 'fWeb' },
  { key: 'tooling', dict: 'fTooling' },
  { key: 'oss', dict: 'fOSS' },
];

export function ProjectsPage({ initialProjects }: { initialProjects: Project[] }) {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<ProjectTag | 'all'>('all');
  const [query, setQuery] = useState('');

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = filter === 'all' ? initialProjects : initialProjects.filter((p) => p.tag === filter);
    if (q) {
      rows = rows.filter((p) => {
        const desc = (lang === 'pt' ? p.desc_pt : p.desc_en) || '';
        return (
          p.name.toLowerCase().includes(q) ||
          desc.toLowerCase().includes(q) ||
          (p.lang || '').toLowerCase().includes(q) ||
          (p.stack || []).some((s) => String(s).toLowerCase().includes(q))
        );
      });
    }
    return rows;
  }, [initialProjects, filter, query, lang]);

  return (
    <section className="page" id="page-projects_json">
      <div className="codepane">
        <Gutter lines={60} />
        <div className="code">
          <div className="projects-head">
            <div>
              <h2>{t('projTitle')}</h2>
              <div className="sub">{t('projSub')}</div>
            </div>
            <div className="proj-tools">
              <div className="search proj-search">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('projSearch')}
                  aria-label={t('projSearch')}
                />
              </div>
              <div className="filters">
                {FILTERS.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    className={clsx('filter', filter === f.key && 'active')}
                    data-filter={f.key}
                    onClick={() => setFilter(f.key)}
                  >
                    {t(f.dict)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="grid">
            {!list.length ? (
              <div
                style={{
                  gridColumn: '1 / -1',
                  color: 'var(--muted)',
                  padding: '24px 4px',
                  fontSize: 13,
                }}
              >
                {t('noMatches')}{' '}
                <span style={{ color: 'var(--accent)' }}>&quot;{query || filter}&quot;</span>
              </div>
            ) : (
              list.map((p) => (
                <ProjectCard
                  key={p.name}
                  project={p}
                  desc={lang === 'pt' ? p.desc_pt : p.desc_en}
                  openLabel={t('open')}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
