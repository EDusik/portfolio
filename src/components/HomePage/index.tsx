'use client';

import { Gutter } from '@/components/CodePane/Gutter';
import { Hero } from '@/components/Hero';
import { useI18n } from '@/contexts/I18nContext';
import { SKILLS } from '@/lib/constants/skills';
import type { CSSProperties } from 'react';

export function HomePage() {
  const { t } = useI18n();

  return (
    <section className="page" id="page-home_js">
      <Hero />
      <div className="codepane">
        <Gutter lines={48} />
        <div className="code">
          <h2 className="kw" style={{ marginTop: 0 }}>
            {t('aboutTitle')}
          </h2>
          <div className="about-grid">
            <div className="about-portrait">
              <span className="label">{t('portraitLabel')}</span>
              <div className="silhouette" aria-hidden>
                <svg viewBox="0 0 120 140" width="120" height="140">
                  <path
                    fill="currentColor"
                    opacity="0.12"
                    d="M60 20c16 0 28 12 28 28 0 10-4 18-12 24 18 6 30 22 30 42H14c0-20 12-36 30-42-8-6-12-14-12-24 0-16 12-28 28-28z"
                  />
                </svg>
              </div>
            </div>
            <div className="about-body">
              <h2>{t('aboutHeading')}</h2>
              <div className="role">{t('aboutRole')}</div>
              <p>{t('aboutP1')}</p>
              <p>{t('aboutP2')}</p>
              <p>{t('aboutP3')}</p>
            </div>
          </div>
          <div className="skills-block">
            <h3>{t('skillsTitle')}</h3>
            <div className="skills">
              {SKILLS.map((s) => (
                <div key={s.name} className="skill">
                  <span className="name">{s.name}</span>
                  <span className="bar">
                    <i style={{ '--p': `${s.pct}%` } as CSSProperties} />
                  </span>
                  <span className="pct">{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
