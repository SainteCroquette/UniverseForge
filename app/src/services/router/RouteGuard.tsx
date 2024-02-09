import { Navigate, Outlet } from 'react-router-dom';

import { AuthorizationGuard } from '@domain/AuthorizationDetails.ts';
import { useUserStore } from '@core/features/userStore.ts';
import {useTranslation} from "react-i18next";

interface RouteGuardProps {
    guard: AuthorizationGuard;
}

const RouteGuard = ({ guard }: RouteGuardProps): JSX.Element => {
    const {i18n} = useTranslation();
    const { authorization } = useUserStore();


    if (authorization.satisfy(guard)) {
        return <Outlet />;
    }
    return <Navigate to={`/${i18n.language}/forbidden`} />;
};

export default RouteGuard;
