import { isRouteErrorResponse, Navigate, useRouteError } from 'react-router-dom';

import ForbiddenError from '@domain/error/ForbiddenError.ts';

import AppNavigation from '@services/navigation/AppNavigation.ts';

import ErrorPage from '@pages/error/ErrorPage.tsx';
import BaseError from '@services/error/BaseError.ts';

const RouteErrorBoundary = () => {
    const error = useRouteError();

    if (error instanceof BaseError) {
        return <ErrorPage error={error.message} stacktrace={error.stack} />;
    }

    if (isForbiddenError(error)) {
        console.error('Forbidden error', error);
        return <Navigate to={AppNavigation.forbidden} />;
    }
    if (isRouteErrorResponse(error)) {
        return <ErrorPage error={`${error.status} ${error.statusText}`} />;
    }

    return <ErrorPage error={'Unkown error'} />;
};

function isForbiddenError(error: unknown) {
    return error instanceof ForbiddenError;
}

export default RouteErrorBoundary;
