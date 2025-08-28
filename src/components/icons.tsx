import type { SVGProps } from 'react';

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v5" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M4 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M4 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  ),
};
