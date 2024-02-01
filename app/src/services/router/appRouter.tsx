import {createBrowserRouter} from "react-router-dom";
import App from "@/App.tsx";


const appRouter = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: '/counter', lazy: () => import("@views/counter/CounterView.tsx")},
]);

export default appRouter;
