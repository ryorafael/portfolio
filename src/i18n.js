// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./en.json";
import frTranslation from "./fr.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTranslation.enTranslation,
      },
      fr: {
        translation: frTranslation.frTranslation,
      },
    },
    react: {
      useSuspense: false,
    },
  })
  .then(() => console.log("i18next initialized successfully!"))
  .catch((error) => console.error("Error initializing i18next:", error));

export const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

console.log("Available languages:", i18n.languages);
console.log("Initial language:", i18n.language);

export default i18n;
