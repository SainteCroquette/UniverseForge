import { queryClient } from '@core/queries';
import { getCounter } from '@core/queries/CounterQueries.ts';
import { createGuard } from '@services/router/guards.tsx';

const counterRoute = createGuard(
    { all: { privileges: 'counterPrivilege' } },
    {
        path: '/counter',
        lazy: () => import('@pages/counter/CounterPage.lazy.ts'),
        loader: () => {
            queryClient.prefetchQuery({
                queryKey: ['counter'],
                queryFn: getCounter,
            });
            return null;
        },
    },
);

export default counterRoute;
