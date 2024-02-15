import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import AppNavigation from '@services/navigation/AppNavigation.ts';
import { getCurrentLanguage } from '@services/translation/language.ts';

const useAppNavigation = () => {
    const navigate = useNavigate();

    const goToHome = useCallback(() => navigate(AppNavigation.home), [navigate]);

    const goToCounter = useCallback(() => navigate(AppNavigation.counter), [navigate]);

    const goToNotFound = useCallback(() => navigate(AppNavigation.notFound), [navigate]);

    const goToProfile = useCallback(() => navigate(AppNavigation.profile), [navigate]);

    const goToForbidden = useCallback(() => navigate(AppNavigation.forbidden), [navigate]);

    const goToErrorsDemo = useCallback(() => navigate(AppNavigation.errorsDemo), [navigate]);

    const goToLangSameRoute = useCallback(
        (lang: string) => {
            const currentLang = getCurrentLanguage();

            if (!lang || currentLang === lang) {
                return;
            }
            const path = window.location.pathname;
            const subPath = path.split(`/${currentLang}/`);

            const urlAfterLang = subPath.length === 1 ? path.split(`/${currentLang}`)[0] : subPath[1];

            navigate(`/${lang}${urlAfterLang ? `/${urlAfterLang}` : ''}`);
        },
        [navigate],
    );

    return {
        navigate,
        goToHome,
        goToCounter,
        goToNotFound,
        goToProfile,
        goToForbidden,
        goToErrorsDemo,
        goToLangSameRoute,
    };
};

export default useAppNavigation;
