import type { SVGProps } from 'react';

export function FolderOpenIcon({ width = 22, height = 22, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor" {...rest}>
      <path d="M2 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v1H2V6zM2 9h22l-2 9a2 2 0 0 1-2 1.6H4A2 2 0 0 1 2 18V9z" />
    </svg>
  );
}
