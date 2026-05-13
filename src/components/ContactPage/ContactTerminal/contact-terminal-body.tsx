'use client';

import { CONTACT } from '@/lib/constants/contact';

import {
  useContactTerminalTyping,
  type Finished,
  type Step,
} from './hooks/use-contact-terminal-typing';

import './contact-terminal-body.scss';

function StaticTerminalBody() {
  return (
    <>
      <div>
        <span className="pr">$</span>
        <span className="cmd">whoami</span>
      </div>
      <div>guest</div>
      <div>
        <span className="pr">$</span>
        <span className="cmd">./say-hi.sh</span>
      </div>
      <div className="com"># opening secure channel…</div>
      <div>
        <span className="ok">✓</span> handshake complete
      </div>
      <div>
        <span className="ok">✓</span> reply window: usually &lt; 24h
      </div>
      <br />
      <div>
        <span className="pr">$</span>
        <span className="cmd">cat ./inbox.txt</span>
      </div>
      <div>
        → linkedin{' '}
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
          linkedin.com{CONTACT.linkedinPath}
        </a>
      </div>
      <div>
        → github&nbsp;&nbsp;
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
          github.com/{CONTACT.githubHandle.replace('@', '')}
        </a>
      </div>
      <div>
        → blog&nbsp;&nbsp;&nbsp;&nbsp;
        <a href={CONTACT.blog} target="_blank" rel="noopener noreferrer">
          {CONTACT.blogUrl}
        </a>
      </div>
      <br />
      <div>
        <span className="pr">$</span>
        <span className="cmd">_</span>
      </div>
    </>
  );
}

function renderFinished(line: Finished, key: number) {
  switch (line.k) {
    case 'blank':
      return <br key={key} />;
    case 'prompt':
      return (
        <div key={key}>
          <span className="pr">$</span>
          <span className="cmd">
            {line.cmd === '_' ? <span className="term-cursor">_</span> : line.cmd}
          </span>
        </div>
      );
    case 'plain':
      return <div key={key}>{line.text}</div>;
    case 'comment':
      return (
        <div key={key} className="com">
          {line.text}
        </div>
      );
    case 'ok':
      return (
        <div key={key}>
          <span className="ok">✓</span> {line.rest}
        </div>
      );
    case 'inbox':
      return (
        <div key={key}>
          {line.prefix}
          <a
            href={line.href}
            {...(line.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {line.value}
          </a>
        </div>
      );
    default:
      return null;
  }
}

function CurrentTypingLine({ step, char }: { step: Step; char: number }) {
  if (step.kind === 'blank' || step.kind === 'restartPause') return null;

  if (step.kind === 'prompt') {
    if (step.cmd === '_') {
      if (char < 1) {
        return (
          <div>
            <span className="pr">$</span>
            <span className="cmd" />
          </div>
        );
      }
      return (
        <div>
          <span className="pr">$</span>
          <span className="cmd">
            <span className="term-cursor">_</span>
          </span>
        </div>
      );
    }
    return (
      <div>
        <span className="pr">$</span>
        <span className="cmd">{step.cmd.slice(0, char)}</span>
      </div>
    );
  }

  if (step.kind === 'plain') {
    return <div>{step.text.slice(0, char)}</div>;
  }

  if (step.kind === 'comment') {
    return <div className="com">{step.text.slice(0, char)}</div>;
  }

  if (step.kind === 'ok') {
    return (
      <div>
        <span className="ok">✓</span> {step.rest.slice(0, char)}
      </div>
    );
  }

  if (step.kind === 'inbox') {
    const slice = step.value.slice(0, char);
    const done = char >= step.value.length;
    return (
      <div>
        {step.prefix}
        {done ? (
          <a
            href={step.href}
            {...(step.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {step.value}
          </a>
        ) : (
          slice
        )}
      </div>
    );
  }

  return null;
}

export function ContactTerminalBody() {
  const { reduceMotion, lines, current, showCurrent, char } = useContactTerminalTyping();

  if (reduceMotion) {
    return (
      <div className="term-body">
        <StaticTerminalBody />
      </div>
    );
  }

  return (
    <div className="term-body">
      {lines.map((line, i) => renderFinished(line, i))}
      {showCurrent && current ? <CurrentTypingLine step={current} char={char} /> : null}
    </div>
  );
}
