import type { SVGProps } from 'react';

export function BlogIcon({ width = 16, height = 16, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M4 4h16v16H4z" />
      <path d="M4 8h16M8 4v16" />
    </svg>
  );
}
