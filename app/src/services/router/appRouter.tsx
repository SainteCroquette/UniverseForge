import { createBrowserRouter, Navigate, redirect } from 'react-router-dom';

import ErrorBoundary from '@services/router/ErrorBoundary.tsx';
import { doLanguageExist, getLanguageFromBrowser, switchLanguage } from '@services/translation/language.ts';

import AppLayout from '@templates/appLayout/AppLayout.tsx';

import routes from './routes';
import AppNavigation from '@services/navigation/AppNavigation.ts';

const appRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: <AppLayout />,
            children: [
                {
                    errorElement: <ErrorBoundary />,
                    children: [
                        {
                            path: '/:lang',
                            loader: ({ params, request }) => {
                                if (!params?.lang) {
                                    return redirect(`/${getLanguageFromBrowser()}`);
                                }

                                if (doLanguageExist(params.lang)) {
                                    switchLanguage(params.lang);
                                } else {
                                    const urlAfterLang = request.url.split(`/${params.lang}/`)[1];

                                    return redirect(
                                        `/${getLanguageFromBrowser()}${urlAfterLang ? `/${urlAfterLang}` : ''}`,
                                    );
                                }
                                return null;
                            },
                            children: [
                                ...routes,
                                {
                                    path: '*',
                                    element: <Navigate to={AppNavigation.notFound} />,
                                },
                            ],
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
