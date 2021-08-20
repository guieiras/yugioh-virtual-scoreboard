import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation, initReactI18next } from 'react-i18next';
import ptBR from './pt-BR';
import en from './en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'locale'
    },
    resources: {
      en: en,
      'pt-BR': ptBR,
    }
  });

export default useTranslation;
