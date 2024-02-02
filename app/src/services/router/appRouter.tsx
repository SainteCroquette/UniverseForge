import {createBrowserRouter} from "react-router-dom";

import AppLayout from "@templates/appLayout/AppLayout.tsx";

import ErrorBoundary from "./errorBoundary.tsx";

import routes from './routes';

const appRouter = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: routes,
        errorElement: <ErrorBoundary/>,
    },
]);

export default appRouter;
