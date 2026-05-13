'use client';

import { useI18n } from '@/contexts/I18nContext';
import type { Project } from '@/lib/github';
import { useCallback, useMemo, useState } from 'react';

const PROJECTS_INITIAL = 15;

export function useProjectsPageState(initialProjects: Project[]) {
  const { t, lang } = useI18n();
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return initialProjects;
    return initialProjects.filter((project) => {
      const desc = (lang === 'pt' ? project.desc_pt : project.desc_en) || '';
      return (
        project.name.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        (project.lang || '').toLowerCase().includes(q) ||
        (project.stack || []).some((item) => String(item).toLowerCase().includes(q))
      );
    });
  }, [initialProjects, query, lang]);

  const visible = expanded ? list : list.slice(0, PROJECTS_INITIAL);
  const showToggle = list.length > PROJECTS_INITIAL;
  const toggleExpanded = useCallback(() => setExpanded((value) => !value), []);

  return {
    t,
    lang,
    query,
    setQuery,
    expanded,
    visible,
    list,
    showToggle,
    toggleExpanded,
  };
}
