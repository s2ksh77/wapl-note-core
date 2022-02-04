import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from '~/locales/ko/translation.json';
import en from '~/locales/en/translation.json';

const resources = {
  ko: {
    translation: ko,
  },
  en: {
    translation: en,
  },
};

const i18n = i18next.createInstance();
i18n.use(initReactI18next).init(
  {
    debug: false,
    resources,
    lng: 'ko',
    fallbackLng: 'ko',
    ns: ['translation'],
    defaultNS: 'translation',
    keySeparator: false,
    interpolation: { escapeValue: false },
    react: {
      useSuspense: false,
    },
  },
  err => {
    if (err) {
      console.log(err);
    }
  },
);

export { i18n };
