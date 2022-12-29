import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation, initReactI18next } from 'react-i18next';
import ptBR from './pt-BR';
import en from './en';

const resources = {
  en: en,
  'pt-BR': ptBR,
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'locale'
    },
    resources
  });

export const languages = Object.entries(resources).map(([language, resource]) => ({
  value: language, country: resource.metadata.country, label: resource.metadata.name
}))
export default useTranslation;
