import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en/en.json';
import fr from './translations/fr/fr.json';

const resources = {
    en: {
        translation: en,
    },
    fr: {
        translation: fr,
    },
};

use(initReactI18next).init({
    resources,
    lng: 'fr',
}).then();
