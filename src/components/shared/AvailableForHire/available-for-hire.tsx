'use client';

import { useAvailableForHireState } from './hooks/use-available-for-hire-state';

import './available-for-hire.scss';

type AvailableForHireProps = {
  visible?: boolean;
};

export function AvailableForHire({ visible = false }: AvailableForHireProps) {
  const { t } = useAvailableForHireState();
  if (!visible) return null;

  return (
    <div className="hero-eyebrow">
      <span className="pulse" />
      <span>{t('eyebrow')}</span>
    </div>
  );
}
