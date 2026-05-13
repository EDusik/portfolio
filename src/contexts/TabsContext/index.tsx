'use client';

import { FILES, OPEN_TABS, type TabFile } from '@/lib/constants/files';
import { fileToPageId } from '@/lib/constants/sections';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

type TabsContextValue = {
  activeTab: TabFile;
  setActive: (name: TabFile) => void;
  openTab: (name: TabFile) => void;
  openTabs: readonly TabFile[];
  files: typeof FILES;
  registerScrollContainer: (el: HTMLElement | null) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

export function TabsProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabFile>('home.js');
  const scrollRef = useRef<HTMLElement | null>(null);

  const registerScrollContainer = useCallback((el: HTMLElement | null) => {
    scrollRef.current = el;
  }, []);

  const setActive = useCallback((name: TabFile) => {
    setActiveTab(name);
  }, []);

  const openTab = useCallback((name: TabFile) => {
    setActiveTab(name);
    document.body.classList.remove('menu-open');
    const id = fileToPageId(name);
    requestAnimationFrame(() => {
      const root = scrollRef.current;
      const page = root?.querySelector(`#${CSS.escape(id)}`);
      if (root && page) {
        root.scrollTo({ top: (page as HTMLElement).offsetTop, behavior: 'smooth' });
      }
    });
  }, []);

  const value = useMemo(
    () => ({
      activeTab,
      setActive,
      openTab,
      openTabs: OPEN_TABS,
      files: FILES,
      registerScrollContainer,
    }),
    [activeTab, setActive, openTab, registerScrollContainer],
  );

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}

export function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('useTabs must be used within TabsProvider');
  return ctx;
}
