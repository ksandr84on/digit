import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)

  .init({
    resources: {
      GB: {
        translation: {
          nav_about: {
            text: 'About',
          },
        },
      },
      RU: {
        translation: {
          nav_about: {
            text: "О нас",
          },
        },
      },
    },
    // lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });