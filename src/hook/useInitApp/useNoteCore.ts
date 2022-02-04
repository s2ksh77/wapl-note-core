import { isActive } from '~/utils/util';
import { useNoteI18nInit } from '~/hook/useInitApp/useNoteI18nInit';

export const useNoteCore = (): void => {
  useNoteI18nInit();
};
