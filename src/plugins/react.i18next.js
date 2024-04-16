import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import ru from "../locales/ru.json";
import tm from "../locales/tm.json";

export const defaultNS = "translations";
export const resources = {
  tm: {
    translations: tm,
  },
  en: {
    translations: en,
  },
  ru: {
    translations: ru,
  },
};

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("language") || "tm",
  fallbackLng: "tm",
  resources,
  ns: ["translations"],
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

i18n.languages = ["tm", "en", "ru"];

export default i18n;
