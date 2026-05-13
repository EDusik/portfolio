import type { SVGProps } from 'react';

export function MailIcon({ width = 14, height = 14, ...rest }: SVGProps<SVGSVGElement>) {
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
      <path d="M4 4h16v12H5.17L4 17.17V4z" />
    </svg>
  );
}
