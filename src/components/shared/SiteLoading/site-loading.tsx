'use client';

import { useEffect, useState, type CSSProperties } from 'react';

import './site-loading.scss';

const LABEL = 'Loading';

const HOLD_MS = 800;
const EXIT_MS = 950;

/** Milliseconds before each character appears (index 0 = first letter). */
function delayBeforeCharMs(index: number): number {
  if (index === 0) return 520;
  const pattern = [360, 320, 400, 260, 380, 300, 340] as const;
  return pattern[(index - 1) % pattern.length] ?? 360;
}

type Phase = 'visible' | 'exiting' | 'done';

export function SiteLoading() {
  const [phase, setPhase] = useState<Phase>('visible');
  const [typedLength, setTypedLength] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ids: number[] = [];
    const schedule = (fn: () => void, ms: number) => {
      ids.push(window.setTimeout(fn, ms));
    };

    if (reduced) {
      setTypedLength(LABEL.length);
      schedule(() => setPhase('exiting'), 120);
    } else {
      let cumulative = 0;
      for (let i = 0; i < LABEL.length; i++) {
        cumulative += delayBeforeCharMs(i);
        const next = i + 1;
        schedule(() => setTypedLength(next), cumulative);
      }
      schedule(() => setPhase('exiting'), cumulative + HOLD_MS);
    }

    return () => ids.forEach((id) => window.clearTimeout(id));
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
      aria-label={LABEL}
    >
      <span className="site-loading__line">
        <span className="site-loading__text" aria-hidden="true">
          {LABEL.slice(0, typedLength)
            .split('')
            .map((ch, i) => (
              <span key={`${i}-${ch}`} className="site-loading__char">
                {ch}
              </span>
            ))}
        </span>
        <span className="site-loading__cursor" aria-hidden="true">
          _
        </span>
      </span>
    </div>
  );
}
