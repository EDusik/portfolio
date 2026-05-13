'use client';

import { Tabs } from '@/components/Tabs';
import { useTabs } from '@/contexts/TabsContext';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useEffect, useState } from 'react';

export function Editor({ children }: { children: React.ReactNode }) {
  const { registerScrollContainer, setActive, activeTab } = useTabs();
  const [pagesEl, setPagesEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    registerScrollContainer(pagesEl);
    return () => registerScrollContainer(null);
  }, [pagesEl, registerScrollContainer]);

  useScrollSpy(pagesEl, setActive, activeTab);

  return (
    <main className="editor">
      <Tabs />
      <div ref={setPagesEl} className="pages">
        {children}
      </div>
    </main>
  );
}
