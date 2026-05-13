const raw = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

const email =
  raw == null || raw === ''
    ? 'mailto:hello@eduardodusik.dev'
    : raw.startsWith('mailto:')
      ? raw
      : `mailto:${raw}`;

const emailDisplay =
  raw == null || raw === ''
    ? 'hello@eduardodusik.dev'
    : raw.replace(/^mailto:/i, '');

export const CONTACT = {
  email,
  linkedin: 'https://www.linkedin.com/in/eduardodusik',
  github: 'https://github.com/EDusik',
  blog: '#',
  githubHandle: '@EDusik',
  linkedinPath: '/in/eduardodusik',
  blogUrl: 'eduardodusik.dev/notes',
  emailDisplay,
} as const;
