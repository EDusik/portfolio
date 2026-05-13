'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { CONTACT } from '@/lib/constants/contact';
import { useEffect, useMemo, useState } from 'react';
import {
  finalizeStep,
  makeSteps,
  stepMaxChars,
  type Finished,
} from '../helpers/contact-terminal-typing';

export type { Finished, Step } from '../helpers/contact-terminal-typing';

export function useContactTerminalTyping() {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const steps = useMemo(() => makeSteps(CONTACT), []);

  const [lines, setLines] = useState<Finished[]>([]);
  const [si, setSi] = useState(0);
  const [ci, setCi] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const step = steps[si];
    if (!step) return;

    let id: ReturnType<typeof setTimeout>;

    if (step.kind === 'restartPause') {
      id = setTimeout(() => {
        setLines([]);
        setSi(0);
        setCi(0);
      }, step.gap || 0);
      return () => clearTimeout(id);
    }

    if (step.kind === 'blank') {
      id = setTimeout(() => {
        setLines((current) => [...current, { k: 'blank' }]);
        setSi((current) => current + 1);
        setCi(0);
      }, step.gap);
      return () => clearTimeout(id);
    }

    const max = stepMaxChars(step);

    if (ci < max) {
      id = setTimeout(() => {
        setCi((current) => current + 1);
      }, step.speed);
      return () => clearTimeout(id);
    }

    const finished = finalizeStep(step);
    id = setTimeout(() => {
      if (finished) setLines((current) => [...current, finished]);
      setSi((current) => current + 1);
      setCi(0);
    }, step.gap);
    return () => clearTimeout(id);
  }, [reduceMotion, steps, si, ci]);

  const current = steps[si];
  const showCurrent = current && current.kind !== 'blank' && current.kind !== 'restartPause';

  return {
    reduceMotion,
    lines,
    current,
    showCurrent,
    char: ci,
  };
}
