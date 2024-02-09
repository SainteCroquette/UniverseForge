import { type Params, redirect } from 'react-router-dom';

import { doLanguageExist, getLanguageFromBrowser, switchLanguage } from '@services/translation/language.ts';

export const handlePathAndLanguageSync = ({ params, request }: { params?: Params<string>; request: Request }) => {
    if (!params?.lang) {
        return redirect(`/${getLanguageFromBrowser()}`);
    }

    if (doLanguageExist(params.lang)) {
        switchLanguage(params.lang);
    } else {
        const urlAfterLang = request.url.split(`/${params.lang}/`)[1];

        return redirect(`/${getLanguageFromBrowser()}${urlAfterLang ? `/${urlAfterLang}` : ''}`);
    }
    return null;
};
