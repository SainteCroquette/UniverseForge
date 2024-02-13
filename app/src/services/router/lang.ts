import { type Params, redirect } from 'react-router-dom';

import {
    doLanguageExist,
    getDefaultLanguage,
    getLanguageFromBrowser,
    switchLanguage,
} from '@services/translation/language.ts';

import { useLanguageStore } from '@core/features/languageStore.ts';

export const handlePathAndLanguageSync = ({ params, request }: { params?: Params<string>; request: Request }) => {
    const { setLanguage } = useLanguageStore.getState();
    if (!params?.lang) {
        return handleDefaultLanguageRedirection();
    }
    if (doLanguageExist(params.lang)) {
        switchLanguage(params.lang);
        setLanguage(params.lang);
    } else {
        return handleDefaultLanguageRedirection(getUrlAfterLang(request.url, params.lang));
    }
    return null;
};

const handleDefaultLanguageRedirection = (urlAfterLang?: string) => {
    const browserLang = getLanguageFromBrowser();

    const redirectUrl = doLanguageExist(browserLang)
        ? `/${browserLang}${urlAfterLang ? `/${urlAfterLang}` : ''}`
        : `/${getDefaultLanguage()}${urlAfterLang ? `/${urlAfterLang}` : ''}`;

    return redirect(redirectUrl);
};

export const getUrlAfterLang = (url: string, lang: string) => {
    return url.split(`/${lang}/`)[1];
};
