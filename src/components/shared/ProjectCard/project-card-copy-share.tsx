'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { CopyIcon } from '@/components/shared';

type Props = {
  textToCopy: string;
  label: string;
  doneLabel: string;
};

export function ProjectCardCopyShare({ textToCopy, label, doneLabel }: Props) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => () => clearTimer(), [clearTimer]);

  const onClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      clearTimer();
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, 2000);
    } catch (e) {
      console.warn('clipboard write failed', e);
    }
  }, [textToCopy, clearTimer]);

  return (
    <button
      type="button"
      className="proj-copy"
      onClick={onClick}
      aria-label={copied ? doneLabel : label}
    >
      <CopyIcon aria-hidden />
    </button>
  );
}
