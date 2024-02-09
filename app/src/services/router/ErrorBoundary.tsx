import { isRouteErrorResponse, Navigate, useRouteError } from 'react-router-dom';
import ErrorPage from '@pages/error/ErrorPage.tsx';
import ForbiddenError from '@domain/error/ForbiddenError.ts';
import {useTranslation} from "react-i18next";

const ErrorBoundary = () => {
    const {i18n} = useTranslation();
    const error = useRouteError();

    if (isForbiddenError(error)) {
        return <Navigate to={`/${i18n.language}/forbidden`} />;
    }

    // @ts-expect-error unknown error type
    const text = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : `${error.message || error}`;

    return <ErrorPage error={text} />;
};

function isForbiddenError(error: unknown) {
    return error instanceof ForbiddenError;
}

export default ErrorBoundary;
