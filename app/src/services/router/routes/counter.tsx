import { type RouteObject } from 'react-router-dom';
import { queryClient } from '@core/queries';
import { getCounter } from '@core/queries/CounterQueries.ts';
import { lazyGuard, loaderGuard } from '@services/router/guard.ts';

const counterRoute: RouteObject = {
    path: '/counter',
    lazy: lazyGuard({ all: { privileges: 'counterPrivilege' } }, () => import('@pages/counter/CounterPage.lazy.ts')),
    loader: loaderGuard({ all: { privileges: 'counterPrivilege' } },() => {
        queryClient.prefetchQuery({
            queryKey: ['counter'],
            queryFn: getCounter,
        });
        return null;
    }),
};

export default counterRoute;
