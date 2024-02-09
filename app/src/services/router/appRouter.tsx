import { createBrowserRouter, Navigate } from 'react-router-dom';

import AppNavigation from '@services/navigation/AppNavigation.ts';
import { handlePathAndLanguageSync } from '@services/router/lang.ts';

import AppLayout from '@templates/appLayout/AppLayout.tsx';

import ErrorBoundary from './ErrorBoundary.tsx';

import routes from './routes';

const appRouter = createBrowserRouter(
    [
        {
            path: '/',
            errorElement: <ErrorBoundary />,
            element: <AppLayout />,
            children: [
                {
                    path: '/:lang',
                    loader: handlePathAndLanguageSync,
                    children: [
                        ...routes,
                        {
                            path: '*',
                            element: <Navigate to={AppNavigation.notFound} />,
                        },
                    ],
                },
                {
                    index: true,
                    element: <Navigate to={AppNavigation.home} />,
                },
            ],
        },
    ],
    {},
);

export default appRouter;
