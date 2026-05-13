'use client';

import { FileTree, Socials } from '@/components/shared';

import { SidebarHead } from './SidebarHead/sidebar-head';

import './sidebar.scss';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <SidebarHead />
      <FileTree />
      <Socials />
    </aside>
  );
}
