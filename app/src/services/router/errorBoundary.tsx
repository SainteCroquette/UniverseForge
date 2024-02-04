import {isRouteErrorResponse, Navigate, useRouteError} from 'react-router-dom';
import ErrorPage from "@/adapters/primary/pages/error/ErrorPage.tsx";
import ForbiddenError from "@domain/error/ForbiddenError.ts";

const ErrorBoundary = () => {
    const error = useRouteError();

    if (isForbiddenError(error)) {
        return <Navigate to={'/forbidden'} />;
    }

    // @ts-expect-error unknown error type
    const text = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : `${error.message || error}`;

    return <ErrorPage error={text} />;
};

function isForbiddenError(error: unknown) {
    return error instanceof ForbiddenError;
}

export default ErrorBoundary;
