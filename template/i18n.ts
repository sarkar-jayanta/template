import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import english from './Translations/en/english.json'
import hebrew from './Translations/he/hebrew.json'
import i18next from "i18next";

export const changeLanguage = (key: any) => {
  i18next.changeLanguage(key);
};

export default i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: english,
      },
      he: {
        common: hebrew,
      },
    },

    lng: `${i18next.changeLanguage}`,

    ns: "common",
    defaultNS: "common",
    fallbackNS: "common",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      bindI18n: "languageChanged loaded",
      nsMode: "default",
      useSuspense: true,
    },
    compatibilityJSON: "v3",
  });
