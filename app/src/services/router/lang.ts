import { type Params, redirect } from 'react-router-dom';

import {
    doLanguageExist,
    getDefaultLanguage,
    getLanguageFromBrowser,
    switchLanguage,
} from '@services/translation/language.ts';

export const handlePathAndLanguageSync = ({ params, request }: { params?: Params<string>; request: Request }) => {
    if (!params?.lang) {
        return handleDefaultLanguageRedirection();
    }
    if (doLanguageExist(params.lang)) {
        switchLanguage(params.lang);
    } else {
        return handleDefaultLanguageRedirection(request.url.split(`/${params.lang}/`)[1]);
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
