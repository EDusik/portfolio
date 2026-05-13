import type { SVGProps } from 'react';

export function ChevronToggleIcon({
  expanded,
  width = 18,
  height = 18,
  ...rest
}: SVGProps<SVGSVGElement> & { expanded: boolean }) {
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
      {expanded ? <path d="M18 15l-6-6-6 6" /> : <path d="M6 9l6 6 6-6" />}
    </svg>
  );
}
