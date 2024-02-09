import { Navigate, Outlet } from 'react-router-dom';

import { AuthorizationGuard } from '@domain/AuthorizationDetails.ts';

import { useUserStore } from '@core/features/userStore.ts';

import AppNavigation from "@services/navigation/AppNavigation.ts";

interface RouteGuardProps {
    guard: AuthorizationGuard;
}

const RouteGuard = ({ guard }: RouteGuardProps): JSX.Element => {
    const { authorization } = useUserStore();


    if (authorization.satisfy(guard)) {
        return <Outlet />;
    }
    return <Navigate to={AppNavigation.forbidden} />;
};

export default RouteGuard;
