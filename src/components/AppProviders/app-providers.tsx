'use client';

import type { ReactNode } from 'react';

import { SiteLoading } from '@/components/shared';
import { I18nProvider } from '@/contexts/I18nContext';
import { TabsProvider } from '@/contexts/TabsContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

import './app-providers.scss';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <div className="app-providers">
      <ThemeProvider>
        <I18nProvider>
          <TabsProvider>
            <SiteLoading />
            {children}
          </TabsProvider>
        </I18nProvider>
      </ThemeProvider>
    </div>
  );
}
