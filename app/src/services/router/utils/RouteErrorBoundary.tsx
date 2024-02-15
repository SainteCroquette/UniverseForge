import { isRouteErrorResponse, Navigate, useRouteError } from 'react-router-dom';

import AppNavigation from '@services/navigation/AppNavigation.ts';
import ForbiddenError from '@services/router/errors/ForbiddenError.ts';

import ErrorPage from '@pages/error/ErrorPage.tsx';
import { isBaseError } from '@services/error/errorHandler.ts';
import BaseError from '@services/error/BaseError.ts';
import useAppNavigation from '@core/hooks/useAppNavigation.ts';

const RouteErrorBoundary = () => {
    const error = useRouteError();
    const { navigate } = useAppNavigation();

    if (error instanceof Error) {
        if (isForbiddenError(error)) {
            return <Navigate to={AppNavigation.forbidden} />;
        }
        if (isBaseError(error)) {
            const baseError = error as BaseError;
            const redirect = baseError.recoverPath ? () => navigate(baseError.recoverPath) : undefined;
            return <ErrorPage error={baseError.message} stacktrace={baseError.stack} onReset={redirect} />;
        }
        return <ErrorPage error={error.message} stacktrace={error.stack} />;
    }

    if (isRouteErrorResponse(error)) {
        return <ErrorPage error={`${error.status} ${error.statusText}`} />;
    }

    return <ErrorPage error={'Unkown error'} />;
};

function isForbiddenError(error: Error): boolean {
    return error instanceof ForbiddenError;
}

export default RouteErrorBoundary;
