import {createBrowserRouter} from "react-router-dom";

import ErrorBoundary from "./errorBoundary.tsx";

import routes from './routes';
import Layout from "@components/Layout.tsx";

const appRouter = createBrowserRouter([
    {
        element: <Layout/>,
        children: routes,
        errorElement: <ErrorBoundary/>,
    },
]);

export default appRouter;
