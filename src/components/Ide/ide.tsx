'use client';

import { ContactPage } from '@/components/ContactPage';
import { Editor } from '@/components/Editor';
import { HomePage } from '@/components/HomePage';
import { ProjectsPage } from '@/components/ProjectsPage';
import { Sidebar } from '@/components/Sidebar';
import { Statusbar } from '@/components/Statusbar';
import { Topbar } from '@/components/Topbar';
import type { Project } from '@/lib/github';

import './ide.scss';

export function Ide({ initialProjects }: { initialProjects: Project[] }) {
  return (
    <div className="ide">
      <Topbar />
      <div className="main">
        <Sidebar />
        <Editor>
          <HomePage />
          <ProjectsPage initialProjects={initialProjects} />
          <ContactPage />
        </Editor>
        <div
          className="scrim"
          id="scrim"
          onClick={() => document.body.classList.remove('menu-open')}
          aria-hidden
        />
      </div>
      <Statusbar />
    </div>
  );
}
