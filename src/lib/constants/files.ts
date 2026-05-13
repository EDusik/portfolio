export const FILES = {
  'hero.js': { icon: 'js' as const, dirty: false },
  'projects.json': { icon: 'json' as const, dirty: true },
  'contact.sh': { icon: 'sh' as const, dirty: false },
} as const;

export type TabFile = keyof typeof FILES;

export const OPEN_TABS: TabFile[] = ['hero.js', 'projects.json', 'contact.sh'];
