import type { SVGProps } from 'react';

export function ExternalLinkIcon({ width = 11, height = 11, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}
