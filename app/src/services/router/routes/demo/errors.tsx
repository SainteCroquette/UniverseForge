import type { RouteObject } from 'react-router-dom';
import ErrorsDemoPage from '@pages/demo/errors/ErrorsDemoPage.tsx';

const errorsRoute: RouteObject = {
    path: 'errors',
    element: <ErrorsDemoPage />,
};

export default errorsRoute;