import {isRouteErrorResponse, Navigate, useRouteError} from 'react-router-dom';

import ForbiddenError from '@domain/error/ForbiddenError.ts';

import AppNavigation from "@services/navigation/AppNavigation.ts";

import ErrorPage from '@pages/error/ErrorPage.tsx';

const ErrorBoundary = () => {
    const error = useRouteError();

    if (isForbiddenError(error)) {
        return <Navigate to={AppNavigation.forbidden} />;
    }

    // @ts-expect-error unknown error type
    const text = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : `${error.message || error}`;

    return <ErrorPage error={text} />;
};

function isForbiddenError(error: unknown) {
    return error instanceof ForbiddenError;
}

export default ErrorBoundary;
