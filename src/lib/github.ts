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

export async function fetchRepos(): Promise<Project[]> {
  try {
    const res = await fetch(
      'https://api.github.com/users/EDusik/repos?sort=updated&per_page=60',
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) throw new Error(`GitHub status ${res.status}`);
    const data = (await res.json()) as GitHubRepo[];
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
        else if (r.license || topics.includes('open-source') || r.stargazers_count >= 5) tag = 'oss';
        return {
          name: r.name,
          desc_en: r.description || '—',
          desc_pt: r.description || '—',
          url: r.html_url,
          stack: topics.length
            ? topics.slice(0, 4)
            : [String(r.language || 'code').toLowerCase()],
          lang: r.language || '—',
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
