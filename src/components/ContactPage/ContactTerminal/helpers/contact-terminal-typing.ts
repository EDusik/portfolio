import { CONTACT } from '@/lib/constants/contact';

export type Finished =
  | { k: 'prompt'; cmd: string }
  | { k: 'plain'; text: string }
  | { k: 'comment'; text: string }
  | { k: 'ok'; rest: string }
  | { k: 'inbox'; prefix: string; value: string; href: string; external: boolean }
  | { k: 'blank' };

export type Step =
  | { kind: 'blank'; gap: number }
  | { kind: 'restartPause'; gap: number }
  | { kind: 'prompt'; cmd: string; speed: number; gap: number }
  | { kind: 'plain'; text: string; speed: number; gap: number }
  | { kind: 'comment'; text: string; speed: number; gap: number }
  | { kind: 'ok'; rest: string; speed: number; gap: number }
  | {
      kind: 'inbox';
      prefix: string;
      value: string;
      href: string;
      external: boolean;
      speed: number;
      gap: number;
    };

export function makeSteps(c: typeof CONTACT): Step[] {
  return [
    { kind: 'prompt', cmd: 'whoami', speed: 44, gap: 140 },
    { kind: 'plain', text: 'guest', speed: 32, gap: 160 },
    { kind: 'prompt', cmd: './say-hi.sh', speed: 38, gap: 200 },
    { kind: 'comment', text: '# opening secure channel…', speed: 28, gap: 320 },
    { kind: 'ok', rest: 'handshake complete', speed: 24, gap: 220 },
    { kind: 'ok', rest: 'reply window: usually < 24h', speed: 22, gap: 240 },
    { kind: 'blank', gap: 380 },
    { kind: 'prompt', cmd: 'cat ./inbox.txt', speed: 36, gap: 220 },
    {
      kind: 'inbox',
      prefix: '→ linkedin ',
      value: `linkedin.com${c.linkedinPath}`,
      href: c.linkedin,
      external: true,
      speed: 22,
      gap: 120,
    },
    {
      kind: 'inbox',
      prefix: '→ github  ',
      value: `github.com/${c.githubHandle.replace('@', '')}`,
      href: c.github,
      external: true,
      speed: 22,
      gap: 120,
    },
    {
      kind: 'inbox',
      prefix: '→ blog    ',
      value: c.blogUrl,
      href: c.blog,
      external: true,
      speed: 22,
      gap: 120,
    },
    { kind: 'blank', gap: 320 },
    { kind: 'prompt', cmd: '_', speed: 120, gap: 200 },
    { kind: 'restartPause', gap: 20000 },
  ];
}

export function finalizeStep(step: Step): Finished | null {
  switch (step.kind) {
    case 'blank':
      return { k: 'blank' };
    case 'prompt':
      return { k: 'prompt', cmd: step.cmd };
    case 'plain':
      return { k: 'plain', text: step.text };
    case 'comment':
      return { k: 'comment', text: step.text };
    case 'ok':
      return { k: 'ok', rest: step.rest };
    case 'inbox':
      return {
        k: 'inbox',
        prefix: step.prefix,
        value: step.value,
        href: step.href,
        external: step.external,
      };
    default:
      return null;
  }
}

export function stepMaxChars(step: Step): number {
  switch (step.kind) {
    case 'prompt':
      return step.cmd.length;
    case 'plain':
      return step.text.length;
    case 'comment':
      return step.text.length;
    case 'ok':
      return step.rest.length;
    case 'inbox':
      return step.value.length;
    default:
      return 0;
  }
}
