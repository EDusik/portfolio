const colors: Record<string, string> = {
  js: '#e8c547',
  json: '#e89b3a',
  md: '#7aa6ff',
  sh: '#7fd17f',
};
const labels: Record<string, string> = {
  js: 'JS',
  json: '{}',
  md: 'M↓',
  sh: '$_',
};

export type FileIconKind = 'js' | 'json' | 'md' | 'sh';

export function FileIcon({ kind }: { kind: FileIconKind }) {
  const fill = colors[kind] ?? '#888';
  const label = labels[kind] ?? '?';
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1.5" y="1.5" width="13" height="13" rx="2" fill={fill} opacity=".18" />
      <text
        x="8"
        y="11"
        textAnchor="middle"
        fontSize="7"
        fontFamily="var(--font-jetbrains-mono), JetBrains Mono, monospace"
        fontWeight="700"
        fill={fill}
      >
        {label}
      </text>
    </svg>
  );
}
