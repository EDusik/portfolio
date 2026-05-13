'use client';

import { Gutter } from '@/components/CodePane/Gutter';
import { useI18n } from '@/contexts/I18nContext';
import { CONTACT } from '@/lib/constants/contact';

export function ContactPage() {
  const { t } = useI18n();

  return (
    <section className="page" id="page-contact_sh">
      <div className="codepane">
        <Gutter lines={60} />
        <div className="code">
          <h2 className="kw" style={{ marginTop: 0 }}>
            {t('contactTitle')}
          </h2>
          <div className="term">
            <div className="term-head">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
              <span>~/portfolio — zsh — 80×24</span>
            </div>
            <div className="term-body">
              <div>
                <span className="pr">$</span>
                <span className="cmd">whoami</span>
              </div>
              <div>guest</div>
              <div>
                <span className="pr">$</span>
                <span className="cmd">./say-hi.sh</span>
              </div>
              <div className="com"># opening secure channel…</div>
              <div>
                <span className="ok">✓</span> handshake complete
              </div>
              <div>
                <span className="ok">✓</span> reply window: usually &lt; 24h
              </div>
              <br />
              <div>
                <span className="pr">$</span>
                <span className="cmd">cat ./inbox.txt</span>
              </div>
              <div>
                → email&nbsp;&nbsp;&nbsp;
                <a href={CONTACT.email}>{CONTACT.emailDisplay}</a>
              </div>
              <div>
                → linkedin{' '}
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com{CONTACT.linkedinPath}
                </a>
              </div>
              <div>
                → github&nbsp;&nbsp;
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                  github.com/{CONTACT.githubHandle.replace('@', '')}
                </a>
              </div>
              <div>
                → blog&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={CONTACT.blog} target="_blank" rel="noopener noreferrer">
                  {CONTACT.blogUrl}
                </a>
              </div>
              <br />
              <div>
                <span className="pr">$</span>
                <span className="cmd">echo &quot;open to: contract, full-time, advisory&quot;</span>
              </div>
              <div className="warn">open to: contract, full-time, advisory</div>
              <div>
                <span className="pr">$</span>
                <span className="cmd">_</span>
              </div>
            </div>
          </div>

          <div className="com find-me">{t('findMe')}</div>
          <div className="contact-cards">
            <a className="ccard" href={CONTACT.email}>
              <div className="ic">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 6 10 7L22 6" />
                </svg>
              </div>
              <div>
                <div className="lab">email</div>
                <div className="val">{CONTACT.emailDisplay}</div>
              </div>
            </a>
            <a className="ccard" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.55v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V22H7.72V8z" />
                </svg>
              </div>
              <div>
                <div className="lab">linkedin</div>
                <div className="val">{CONTACT.linkedinPath}</div>
              </div>
            </a>
            <a className="ccard" href={CONTACT.github} target="_blank" rel="noopener noreferrer">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.7.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </div>
              <div>
                <div className="lab">github</div>
                <div className="val">{CONTACT.githubHandle}</div>
              </div>
            </a>
            <a className="ccard" href={CONTACT.blog} target="_blank" rel="noopener noreferrer">
              <div className="ic">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M4 8h16M8 4v16" />
                </svg>
              </div>
              <div>
                <div className="lab">blog</div>
                <div className="val">{CONTACT.blogUrl}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
