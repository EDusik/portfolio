'use client';

import { BlogIcon, GitHubIcon, LinkedInIcon } from '@/components/shared';
import { CONTACT } from '@/lib/constants/contact';

import { useSocialsState } from './hooks/use-socials-state';

import './socials.scss';

export function Socials() {
  const { t } = useSocialsState();

  return (
    <div className="sidebar-foot">
      <div className="head">{t('connect')}</div>
      <a className="social-row" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon aria-hidden />
        <span>{t('linkedin')}</span>
        <span className="ext">↗</span>
      </a>
      <a className="social-row" href={CONTACT.github} target="_blank" rel="noopener noreferrer">
        <GitHubIcon aria-hidden />
        <span>{t('github')}</span>
        <span className="ext">↗</span>
      </a>
      <a className="social-row" href={CONTACT.blog} target="_blank" rel="noopener noreferrer">
        <BlogIcon aria-hidden />
        <span>{t('blog')}</span>
        <span className="ext">↗</span>
      </a>
    </div>
  );
}
