export const FILES = {
  'home.js': { icon: 'js' as const, dirty: false },
  'projects.json': { icon: 'json' as const, dirty: true },
  'contact.sh': { icon: 'sh' as const, dirty: false },
} as const;

export type TabFile = keyof typeof FILES;

export const OPEN_TABS: TabFile[] = ['home.js', 'projects.json', 'contact.sh'];
