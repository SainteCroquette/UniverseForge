import 'i18next';

import Resources from './i18next-resources.d.ts';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation';
        resources: Resources;
    }
}
