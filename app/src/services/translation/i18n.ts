import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en/en';
import fr from './translations/fr/fr';

const resources = {
    en: {
        translation: en,
    },
    fr: {
        translation: fr,
    },
};

i18n.use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources,
        lng: 'fr',
    })
    .then();

export const changeLanguage = (lng: string) => {
    i18n.use(initReactI18next).changeLanguage(lng).then();
};

export const getLanguage = (): string => {
    return i18n.language;
}

export const getLanguages = (): readonly string[] => {
    return i18n.languages;
}