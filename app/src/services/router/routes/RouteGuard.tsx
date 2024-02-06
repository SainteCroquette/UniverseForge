import { AuthorizationGuard } from '@domain/AuthorizationDetails.ts';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '@core/features/userStore.ts';

interface RouteGuardProps {
    guard: AuthorizationGuard;
}

const RouteGuard = ({ guard }: RouteGuardProps): JSX.Element => {
    const { authorization } = useUserStore();

    if (authorization.satisfy(guard)) {
        return <Outlet />;
    }

    return <Navigate to={'/forbidden'} />;
};

export default RouteGuard;
