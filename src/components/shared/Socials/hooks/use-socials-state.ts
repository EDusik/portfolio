'use client';

import { useI18n } from '@/contexts/I18nContext';

export function useSocialsState() {
  const { t } = useI18n();

  return { t };
}
