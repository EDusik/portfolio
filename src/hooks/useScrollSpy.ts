'use client';

import { SCROLL_SPY_MAP } from '@/lib/constants/sections';
import type { TabFile } from '@/lib/constants/files';
import { useEffect, useRef } from 'react';

export function useScrollSpy(
  container: HTMLElement | null,
  onTabChange: (tab: TabFile) => void,
  activeTab: TabFile,
) {
  const raf = useRef<number | null>(null);
  const activeTabRef = useRef(activeTab);
  const onTabChangeRef = useRef(onTabChange);

  activeTabRef.current = activeTab;
  onTabChangeRef.current = onTabChange;

  useEffect(() => {
    if (!container) return;

    const sections = Array.from(container.querySelectorAll<HTMLElement>('.page'));

    const update = () => {
      if (!sections.length) return;
      const refLine = container.clientHeight * 0.25;
      let chosen = sections[0]!;
      for (const s of sections) {
        const top = s.offsetTop - container.scrollTop;
        if (top - refLine <= 0) chosen = s;
      }
      const name = SCROLL_SPY_MAP[chosen.id];
      if (name && name !== activeTabRef.current) onTabChangeRef.current(name);
    };

    const onScroll = () => {
      if (raf.current != null) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(update);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      container.removeEventListener('scroll', onScroll);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, [container]);
}
