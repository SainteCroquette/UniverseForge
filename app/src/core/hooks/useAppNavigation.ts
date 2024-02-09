import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import AppNavigation from '@services/navigation/AppNavigation.ts';

const useAppNavigation = () => {
    const navigate = useNavigate();

    const goToHome = useCallback(() => navigate(AppNavigation.home), [navigate]);

    const goToCounter = useCallback(() => navigate(AppNavigation.counter), [navigate]);

    const goToNotFound = useCallback(() => navigate(AppNavigation.notFound), [navigate]);

    const goToProfile = useCallback(() => navigate(AppNavigation.profile), [navigate]);

    const goToForbidden = useCallback(() => navigate(AppNavigation.forbidden), [navigate]);

    return {
        goToHome,
        goToCounter,
        goToNotFound,
        goToProfile,
        goToForbidden,
    };
};

export default useAppNavigation;
