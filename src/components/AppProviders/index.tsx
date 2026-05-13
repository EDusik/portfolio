'use client';

import { I18nProvider } from '@/contexts/I18nContext';
import { TabsProvider } from '@/contexts/TabsContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import type { ReactNode } from 'react';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        <TabsProvider>{children}</TabsProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
