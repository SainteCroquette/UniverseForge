import { type RouteObject } from 'react-router-dom';
import {queryClient} from "@core/queries";
import {getCounter} from "@core/queries/CounterQueries.ts";

const counterRoute: RouteObject = {
    path: '/counter',
    lazy: () => import('@pages/counter/CounterPage.view.ts'),
    loader: () => {
        queryClient.prefetchQuery({
            queryKey: ['counter'],
            queryFn: getCounter,
        });
        return null;
    },
};

export default counterRoute;
