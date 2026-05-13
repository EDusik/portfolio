'use client';

import { Gutter } from '@/components/shared';

import { ContactTerminal } from './ContactTerminal/contact-terminal';
import { useContactPageState } from './hooks/use-contact-page-state';

import './contact-page.scss';

export function ContactPage() {
  const { t } = useContactPageState();

  return (
    <section className="page" id="page-contact_sh">
      <div className="codepane">
        <Gutter tab="contact.sh" />
        <div className="code">
          <h2 className="contactTitle" style={{ marginTop: 0 }}>
            {t('contactTitle')}
          </h2>
          <ContactTerminal />
        </div>
      </div>
    </section>
  );
}
