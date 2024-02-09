import { queryClient } from '@core/queries';
import { getCounter } from '@core/queries/CounterQueries.ts';
import { attachGuardToRoute } from '@services/router/guards.tsx';

const counterRoute = attachGuardToRoute(
    { all: { privileges: 'counterPrivilege' } },
    {
        path: '/counter',
        lazy: () => import('@pages/counter/CounterPage.lazy.ts'),
        loader: () => {
            queryClient.prefetchQuery(getCounter);
            return null;
        },
    },
);

export default counterRoute;
