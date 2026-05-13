'use client';

import { useEffect, useState, type CSSProperties } from 'react';

import './site-loading.scss';

const LABEL = 'Loading';

const TYPING_MS = 1000;
const HOLD_MS = 250;
const EXIT_MS = 350;

type Phase = 'visible' | 'exiting' | 'done';

export function SiteLoading() {
  const [phase, setPhase] = useState<Phase>('visible');

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delayBeforeExit = reduced ? 120 : TYPING_MS + HOLD_MS;
    const id = window.setTimeout(() => setPhase('exiting'), delayBeforeExit);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (phase !== 'exiting') return;
    const id = window.setTimeout(() => {
      setPhase((p) => (p === 'exiting' ? 'done' : p));
    }, EXIT_MS + 80);
    return () => window.clearTimeout(id);
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div
      className={`site-loading${phase === 'exiting' ? ' site-loading--exit' : ''}`}
      style={{ '--site-loading-exit-ms': `${EXIT_MS}ms` } as CSSProperties}
      onTransitionEnd={(e) => {
        if (e.target !== e.currentTarget || e.propertyName !== 'opacity') return;
        setPhase((p) => (p === 'exiting' ? 'done' : p));
      }}
      role="status"
      aria-live="polite"
      aria-busy={phase === 'visible'}
    >
      <span className="site-loading__line">
        <span className="site-loading__text">{LABEL}</span>
        <span className="site-loading__cursor" aria-hidden="true">
          _
        </span>
      </span>
    </div>
  );
}
