import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@core/queries';

import appRouter from '@services/router/appRouter.tsx';
import '@services/translation/i18n.ts';

import '@styles/main.scss';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary fallback={<div>Mmmm... You are not supposed to be here </div>}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={appRouter} />
            </QueryClientProvider>
        </ErrorBoundary>
    </React.StrictMode>,
);
