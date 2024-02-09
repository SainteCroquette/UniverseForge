import { createBrowserRouter, Navigate, redirect } from 'react-router-dom';

import ErrorBoundary from '@services/router/ErrorBoundary.tsx';
import { doLanguageExist, getLanguageFromBrowser, switchLanguage } from '@services/translation/language.ts';

import AppLayout from '@templates/appLayout/AppLayout.tsx';

import routes from './routes';
import { getLanguage } from '@services/translation/i18n.ts';

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
                                    element: <Navigate to={`/${getLanguage()}/404`} />,
                                },
                            ],
                        },
                    ],
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
