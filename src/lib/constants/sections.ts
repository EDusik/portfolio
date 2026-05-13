import type { TabFile } from './files';

export const PAGE_IDS: Record<TabFile, string> = {
  'home.js': 'page-home_js',
  'projects.json': 'page-projects_json',
  'contact.sh': 'page-contact_sh',
};

export const SCROLL_SPY_MAP: Record<string, TabFile> = {
  'page-home_js': 'home.js',
  'page-projects_json': 'projects.json',
  'page-contact_sh': 'contact.sh',
};

export function fileToPageId(file: TabFile): string {
  return PAGE_IDS[file];
}
