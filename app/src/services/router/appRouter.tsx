import {createBrowserRouter} from "react-router-dom";

import ErrorBoundary from "./errorBoundary.tsx";

import routes from './routes';

const appRouter = createBrowserRouter([
    {
        children: routes,
        errorElement: <ErrorBoundary/>,
    },
]);

export default appRouter;
