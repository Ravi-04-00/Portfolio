import React from 'react';

export function PythonIcon({ size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" {...props}>
      <defs>
        <linearGradient id="pyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="pyYellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE873" />
          <stop offset="100%" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
      <path
        d="M63.4 14C37.3 14 38.9 25.3 38.9 25.3l.03 11.7h24.8v3.5H29.4S14 38.8 14 64.9s13.4 24.3 13.4 24.3h8v-11.3s-.4-13.4 13.1-13.4h24.7s12.7.2 12.7-12.3V26.3S89.5 14 63.4 14zm-13.6 7.6c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4z"
        fill="url(#pyBlue)"
      />
      <path
        d="M64.6 114c26.1 0 24.5-11.3 24.5-11.3l-.03-11.7H64.3v-3.5h34.3s15.4 1.7 15.4-24.4-13.4-24.3-13.4-24.3h-8v11.3s.4 13.4-13.1 13.4H34.8s-12.7-.2-12.7 12.3v25.9S38.5 114 64.6 114zm13.6-7.6c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-2 4.4-4.4 4.4z"
        fill="url(#pyYellow)"
      />
    </svg>
  );
}

export function DjangoIcon({ size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#092E20" />
      <path
        d="M58.7 32h11.2v38.4c-4.2 1.4-8.8 2.2-13.8 2.2-13.4 0-21.8-6.9-21.8-19.9 0-12.7 8.9-20.7 22.1-20.7 1 0 1.9.1 2.3.2V32zm0 18.2c-.7-.3-1.6-.4-2.8-.4-6.8 0-10.7 4.1-10.7 11.2 0 6.9 3.8 10.7 10.3 10.7 1.4 0 2.3-.2 3.2-.5V50.2zm20.8-18.2h11.2v46.8c-2.8 1.4-7.2 2.7-12.3 2.7-11.4 0-16.7-4.6-16.7-14.8V64h10.9v2.5c0 4.3 1.9 6.2 6.9 6.2h.02V32z"
        fill="#FFFFFF"
      />
      <circle cx="85.1" cy="22.5" r="5.6" fill="#44B78B" />
    </svg>
  );
}

export function PostgreSQLIcon({ size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#336791" />
      <path
        d="M64 22c-15.6 0-28.5 9.7-33.1 23.3-1.8 5.3-2.6 11.1-2.2 17 .9 13.8 8.8 25.5 20.3 31.4v12.3h10v-9.5c1.6.3 3.3.5 5 .5 1.7 0 3.4-.2 5-.5v9.5h10v-12.3c11.5-5.9 19.4-17.6 20.3-31.4.4-5.9-.4-11.7-2.2-17C92.5 31.7 79.6 22 64 22zm0 14c10 0 18.5 6.4 21.6 15.3-2.9-1.2-6.1-1.9-9.6-1.9-9.4 0-17.4 5.3-21.3 13.1-1.3-.8-2.7-1.4-4.2-1.8 1.8-6.1 7.1-11 13.5-11v-13.7zm-14.5 29c2.3 0 4.4.8 6.1 2.1-4.8 5.1-7.8 11.9-8.1 19.4-4.7-2.6-8.2-7.1-9.3-12.6 2.3-5.2 6.7-8.9 11.3-8.9zm29 0c4.6 0 9 3.7 11.3 8.9-1.1 5.5-4.6 10-9.3 12.6-.3-7.5-3.3-14.3-8.1-19.4 1.7-1.3 3.8-2.1 6.1-2.1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function HTML5Icon({ size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" {...props}>
      <path d="M19 14l9.1 102 35.9 10 35.9-10 9.1-102H19z" fill="#E44D26" />
      <path d="M64 121.7l31.7-8.8 8.1-90.9H64v99.7z" fill="#F16529" />
      <path d="M64 54.3H46.4l-1.2-14h18.8V26.2H30.4l3.6 42.1H64V54.3zm0 37.3l-.1.1-14.8-4-1-10.7H34.3l1.9 21.3 27.8 7.7V91.6z" fill="#EBEBEB" />
      <path d="M64 54.3h17.6l-1.7 18.5-15.9 4.3v14.5l27.8-7.7 3.5-39.6.9-10.1H64v14.1h32.7" fill="#FFFFFF" />
    </svg>
  );
}

export function CSS3Icon({ size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" {...props}>
      <path d="M19 14l9.1 102 35.9 10 35.9-10 9.1-102H19z" fill="#1572B6" />
      <path d="M64 121.7l31.7-8.8 8.1-90.9H64v99.7z" fill="#33A9DC" />
      <path d="M64 53.6H46.4l-1.2-14h18.8V25.5H30.4l3.6 42.1H64V53.6zm0 37.3l-.1.1-14.8-4-1-10.7H34.3l1.9 21.3 27.8 7.7V90.9z" fill="#EBEBEB" />
      <path d="M64 53.6h17.6l-1.7 18.5-15.9 4.3v14.5l27.8-7.7 3.5-39.6.9-10.1H64v14.1h32.7" fill="#FFFFFF" />
    </svg>
  );
}

export function JavaScriptIcon({ size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="24" fill="#F7DF1E" />
      <path
        d="M36 102l12-7.2c2.5 4.3 5.4 7.7 10.9 7.7 5.6 0 9.2-2.3 9.2-11.2V44H84v47.2c0 17.5-10.3 25.3-24.8 25.3-12.8 0-20.2-6.6-23.2-14.5zm55.4-1.2l12-6.9c3.2 5.2 7.7 9 14.3 9 6.2 0 10.2-3.1 10.2-7.4 0-5.1-4.1-7-11.1-10.1l-3.8-1.6c-11-4.7-18.3-10.6-18.3-22.9 0-11.4 8.7-20.1 22.3-20.1 9.8 0 16.8 3.5 21.8 12.3l-11.2 7.2c-2.4-4.3-5.2-6.1-10.6-6.1-4.7 0-7.8 2.9-7.8 6.6 0 4.5 3.3 6.3 9.4 8.9l3.8 1.6c13 5.6 20.3 11.2 20.3 23.9 0 13.7-10.8 21.5-25.2 21.5-14.3 0-23.4-7.2-26.1-16.9z"
        fill="#000000"
      />
    </svg>
  );
}

export function ReactIcon({ size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" {...props}>
      <circle cx="64" cy="64" r="12" fill="#61DAFB" />
      <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="5" fill="none" />
      <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="5" fill="none" transform="rotate(60 64 64)" />
      <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="5" fill="none" transform="rotate(120 64 64)" />
    </svg>
  );
}

export function BootstrapIcon({ size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" {...props}>
      <defs>
        <linearGradient id="bsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7952B3" />
          <stop offset="100%" stopColor="#563D7C" />
        </linearGradient>
      </defs>
      <rect width="128" height="128" rx="28" fill="url(#bsGrad)" />
      <path
        d="M45 32h26.4c10.4 0 17 5.2 17 13.6 0 6.4-4 10.6-9.6 12 7.2 1.4 11.6 6.4 11.6 13.8 0 9.4-7.4 15.6-18.4 15.6H45V32zm14.2 11.6v15h11.2c5.4 0 8.6-2.8 8.6-7.4 0-4.8-3.2-7.6-8.6-7.6H59.2zm0 25.4v16.4h12.6c5.8 0 9.2-3 9.2-8.2 0-5.2-3.4-8.2-9.2-8.2H59.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function GitIcon({ size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="28" fill="#F05032" />
      <path
        d="M93.8 55.4L72.6 34.2c-2.4-2.4-6.4-2.4-8.8 0L57.5 40.5l11.1 11.1c2.6-.9 5.6-.3 7.6 1.7 2.1 2.1 2.6 5.1 1.7 7.7l10.8 10.8c2.6-.9 5.6-.3 7.6 1.7 2.9 2.9 2.9 7.6 0 10.5-2.9 2.9-7.6 2.9-10.5 0-2.2-2.2-2.7-5.5-1.5-8.2L74.4 64.9v23.2c.7.4 1.3.8 1.9 1.4 2.9 2.9 2.9 7.6 0 10.5-2.9 2.9-7.6 2.9-10.5 0-2.9-2.9-2.9-7.6 0-10.5.8-.8 1.8-1.4 2.9-1.8V64.3c-1.1-.4-2.1-1-2.9-1.8-2.2-2.2-2.7-5.4-1.6-8.1L53.1 43.3 34.2 62.2c-2.4 2.4-2.4 6.4 0 8.8l21.2 21.2c2.4 2.4 6.4 2.4 8.8 0l29.6-29.6c2.5-2.4 2.5-6.3 0-7.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function GitHubIcon({ size = 32, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" {...props}>
      <rect width="128" height="128" rx="28" fill="#24292E" />
      <path
        d="M64 26C42.9 26 26 42.9 26 64c0 16.9 11 31.2 26.2 36.2 1.9.4 2.6-.8 2.6-1.8v-6.5c-10.6 2.3-12.8-5.1-12.8-5.1-1.7-4.4-4.2-5.6-4.2-5.6-3.5-2.4.3-2.3.3-2.3 3.8.3 5.9 3.9 5.9 3.9 3.4 5.8 8.9 4.1 11.1 3.2.3-2.5 1.4-4.1 2.4-5.1-8.5-1-17.4-4.2-17.4-18.8 0-4.2 1.5-7.6 3.9-10.2-.4-1-.1.7-4.8 0 0 3.2-1 10.5 3.9 3.1-.9 6.3-1.3 9.6-1.3 3.3 0 6.5.4 9.6 1.3 7.3-5 10.5-3.9 10.5-3.9 2.1 5.3.8 9.2.4 10.2 2.5 2.7 3.9 6.1 3.9 10.2 0 14.7-8.9 17.8-17.5 18.8 1.4 1.2 2.6 3.6 2.6 7.2v10.7c0 1 .7 2.2 2.6 1.8C91 95.2 102 80.9 102 64c0-21.1-16.9-38-38-38z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export const TECH_ICON_MAP = {
  python: PythonIcon,
  django: DjangoIcon,
  react: ReactIcon,
  javascript: JavaScriptIcon,
  html: HTML5Icon,
  css: CSS3Icon,
  postgresql: PostgreSQLIcon,
  bootstrap: BootstrapIcon,
  git: GitIcon,
  github: GitHubIcon
};
