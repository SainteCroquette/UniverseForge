import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import appRouter from '@services/router/appRouter.tsx';
import { queryClient } from '@core/queries';

import '@styles/main.scss';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={appRouter} />
        </QueryClientProvider>
    </React.StrictMode>,
);
