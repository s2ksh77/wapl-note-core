import { useI18nInit } from '~/lib/external';
import { i18n } from '~/i18n';

export const useNoteI18nInit = (): void => {
  useI18nInit(i18n);
};
