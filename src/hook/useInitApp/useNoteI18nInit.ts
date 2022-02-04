import { useI18nInit } from 'teespace-core';
import { i18n } from '~/i18n';

export const useNoteI18nInit = (): void => {
  useI18nInit(i18n);
};
