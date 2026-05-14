'use client';

import type { ReactNode } from 'react';

import { I18nProvider } from '@/contexts/I18nContext';
import { TabsProvider } from '@/contexts/TabsContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

import './app-providers.scss';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <div className="app-providers">
      <ThemeProvider>
        <I18nProvider>
          <TabsProvider>{children}</TabsProvider>
        </I18nProvider>
      </ThemeProvider>
    </div>
  );
}
