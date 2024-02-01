import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import ErrorPage from "@/adapters/primary/pages/error/ErrorPage.tsx";

const ErrorBoundary = () => {
    const error = useRouteError();

    // @ts-ignore unknown error type
    const text = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : `${error.message || error}`;

    return <ErrorPage error={text} />;
};

export default ErrorBoundary;
