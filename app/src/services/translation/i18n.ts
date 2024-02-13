import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resourcesToBackend from 'i18next-resources-to-backend';

const AVAILABLE_LANGUAGES = ['en', 'es', 'fr'];

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(
    resourcesToBackend(async (lang, namespace, callback) => {
        const { default: trad } = await import(`./locales/${lang}/${namespace}.json`);

        callback(null, trad);
    }),
)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        defaultNS: 'translation',
        lng: 'en',
    })
    .then();

export const changeLanguage = (lng: string) => {
    // eslint-disable-next-line import/no-named-as-default-member
    i18n.use(initReactI18next).changeLanguage(lng).then();
};

export const getLanguage = (): string => {
    return i18n.language;
};

export const getFallbackLanguage = (): string => {
    return i18n.options.fallbackLng as string;
};

export const getLanguages = (): readonly string[] => {
    return AVAILABLE_LANGUAGES;
};
