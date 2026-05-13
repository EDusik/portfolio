'use client';

import { Tabs } from '@/components/shared';
import { useEditorScrollRegistration } from './hooks/use-editor-scroll-registration';

import './editor.scss';

export function Editor({ children }: { children: React.ReactNode }) {
  const setPagesEl = useEditorScrollRegistration();

  return (
    <main className="editor">
      <Tabs />
      <div ref={setPagesEl} className="pages">
        {children}
      </div>
    </main>
  );
}
