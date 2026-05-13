import type { TabFile } from '@/lib/constants/files';
import { getGutterRange } from '@/lib/constants/gutter';

import './gutter.scss';

export function Gutter({ tab }: { tab: TabFile }) {
  const { startLine, lines } = getGutterRange(tab);
  return (
    <div className="gutter">
      {Array.from({ length: lines }, (_, i) => (
        <span key={i}>{startLine + i}</span>
      ))}
    </div>
  );
}
