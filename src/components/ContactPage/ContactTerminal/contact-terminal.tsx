'use client';

import { ContactTerminalBody } from './contact-terminal-body';

import './contact-terminal.scss';

export function ContactTerminal() {
  return (
    <div className="term">
      <div className="term-head">
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
        <span>~/contact — zsh</span>
      </div>
      <ContactTerminalBody />
    </div>
  );
}
