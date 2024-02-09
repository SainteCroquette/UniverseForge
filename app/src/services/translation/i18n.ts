import { use } from 'i18next';
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

use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources,
        lng: 'fr',
    })
    .then();
