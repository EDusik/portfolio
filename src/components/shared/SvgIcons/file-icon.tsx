const fills: Record<string, string> = {
  js: 'var(--file-type-js)',
  json: 'var(--file-type-json)',
  md: 'var(--file-type-md)',
  sh: 'var(--file-type-sh)',
};
const labels: Record<string, string> = {
  js: 'JS',
  json: '{}',
  md: 'M↓',
  sh: '$_',
};

export type FileIconKind = 'js' | 'json' | 'md' | 'sh';

export function FileIcon({ kind, size = 20 }: { kind: FileIconKind; size?: number }) {
  const fill = fills[kind] ?? '#888';
  const label = labels[kind] ?? '?';
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1.5" y="1.5" width="13" height="13" rx="2" fill={fill} opacity=".18" />
      <text
        x="8"
        y="11"
        textAnchor="middle"
        fontSize="7"
        fontFamily="var(--font-mono), ui-monospace, monospace"
        fontWeight="700"
        fill={fill}
      >
        {label}
      </text>
    </svg>
  );
}
