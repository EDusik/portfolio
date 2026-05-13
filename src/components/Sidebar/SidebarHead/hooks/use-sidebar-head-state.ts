'use client';

import { useI18n } from '@/contexts/I18nContext';

export function useSidebarHeadState() {
  const { t } = useI18n();

  return { t };
}
