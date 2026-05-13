import { emojify } from 'node-emoji';

import { LANG_COLORS } from '@/lib/constants/langColors';

export type ProjectTag = 'web' | 'tooling' | 'oss';

export type Project = {
  name: string;
  desc_en: string;
  desc_pt: string;
  url: string;
  stack: string[];
  lang: string;
  langColor: string;
  stars: number;
  forks: number;
  tag: ProjectTag;
};

export const FALLBACK_PROJECTS: Project[] = [
  {
    name: 'portfolio',
    desc_en: 'Personal portfolio site.',
    desc_pt: 'Site de portfólio pessoal.',
    url: 'https://github.com/EDusik',
    stack: ['javascript'],
    lang: 'JavaScript',
    langColor: '#e8c547',
    stars: 0,
    forks: 0,
    tag: 'web',
  },
];

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  topics?: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  license: { spdx_id: string } | null;
  updated_at: string;
};

/** Strips chars that can break RSC payloads or look odd in the UI when sourced from GitHub. */
function safeText(s: string): string {
  return s.replace(/\u0000/g, '').replace(/\u2028|\u2029/g, ' ');
}

function parseGitHubReposBody(text: string): GitHubRepo[] {
  const trimmed = text.replace(/^\uFEFF/, '').trim();
  const withoutXssi = trimmed.replace(/^\)\]\}',?\s*/, '');
  const parsed: unknown = JSON.parse(withoutXssi);
  if (!Array.isArray(parsed)) throw new Error('GitHub JSON is not an array');
  return parsed as GitHubRepo[];
}

export async function fetchRepos(): Promise<Project[]> {
  try {
    const res = await fetch('https://api.github.com/users/EDusik/repos?sort=updated&per_page=60', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`GitHub status ${res.status}`);
    const text = await res.text();
    const trimmed = text.replace(/^\uFEFF/, '').trim();
    if (trimmed.startsWith('<')) throw new Error('GitHub returned HTML instead of JSON');
    const data = parseGitHubReposBody(trimmed);
    const projects: Project[] = data
      .filter((r) => !r.fork && !r.archived)
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
      .map((r) => {
        const topics = r.topics ?? [];
        let tag: ProjectTag = 'web';
        if (topics.some((t) => /cli|tool|script/.test(t))) tag = 'tooling';
        else if (r.license || topics.includes('open-source') || r.stargazers_count >= 5)
          tag = 'oss';
        const desc = emojify(safeText(r.description || '—'));
        return {
          name: safeText(r.name),
          desc_en: desc,
          desc_pt: desc,
          url: safeText(r.html_url),
          stack: topics.length
            ? topics.slice(0, 4).map((t) => safeText(String(t)))
            : [safeText(String(r.language || 'code').toLowerCase())],
          lang: safeText(r.language || '—'),
          langColor: LANG_COLORS[r.language ?? ''] ?? '#888',
          stars: r.stargazers_count,
          forks: r.forks_count,
          tag,
        };
      });
    if (!projects.length) return FALLBACK_PROJECTS;
    return projects;
  } catch (e) {
    console.warn('GitHub fetch failed, using fallback', e);
    return FALLBACK_PROJECTS;
  }
}
