'use client';

import { useI18n } from '@/contexts/I18nContext';

export function useAvailableForHireState() {
  const { t } = useI18n();

  return { t };
}
