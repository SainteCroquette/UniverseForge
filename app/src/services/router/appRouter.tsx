import { createBrowserRouter, Navigate } from 'react-router-dom';

import ErrorBoundary from '@services/router/ErrorBoundary.tsx';
import { getLanguageFromBrowser, switchLanguage } from '@services/translation/language.ts';

import AppLayout from '@templates/appLayout/AppLayout.tsx';

import routes from './routes';

const appRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: <AppLayout />,
            errorElement: <ErrorBoundary />,
            children: [
                {
                    path: '/:lang',
                    loader: ({ params }) => {
                        switchLanguage(params.lang);
                        return null;
                    },
                    children: routes,
                },
                {
                    index: true,
                    element: <Navigate to={`/${getLanguageFromBrowser()}`} />,
                },
            ],
        },
    ],
    {},
);

export default appRouter;
