import { OPEN_TABS, type TabFile } from '@/lib/constants/files';

export const GUTTER_LINE_COUNT: Record<TabFile, number> = {
  'hero.js': 0,
  'projects.json': 60,
  /** Fewer lines than projects: row height follows content; gutter may show empty tail like an editor past EOF. */
  'contact.sh': 26,
};

export function getGutterRange(tab: TabFile): { startLine: number; lines: number } {
  const lines = GUTTER_LINE_COUNT[tab];
  let startLine = 1;
  for (const t of OPEN_TABS) {
    if (t === tab) return { startLine, lines };
    startLine += GUTTER_LINE_COUNT[t];
  }
  return { startLine, lines };
}
