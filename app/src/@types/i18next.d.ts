import "i18next";

import en from '../services/translation/translations/en/en';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation';
        resources: {
            translation: typeof en;
        }
    }

}