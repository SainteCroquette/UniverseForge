import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import gateways from '@core/gateways';
import Gateways from "@core/gateways/Gateways.ts";
import {RouterProvider} from "react-router-dom";
import appRouter from "@services/router/appRouter.tsx";

declare module '@tanstack/react-query' {
    interface Register {
        queryMeta: {
            gateways: Gateways;
        }
        mutationMeta: {
            gateways: Gateways;
        }
    }
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            meta: { gateways },
        },
        mutations: {
            meta: { gateways },
        }
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={appRouter} />
        </QueryClientProvider>
    </React.StrictMode>,
);