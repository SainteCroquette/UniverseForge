import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

import { getCounter, updateCounter } from '@core/queries/CounterQueries.ts';
import { useStore } from '@core/features/counterStore.ts';

import Counter from '@molecules/counter/Counter.tsx';

const CountersDemo = (): JSX.Element => {
    const queryClient = useQueryClient();
    const { count, setCount } = useStore();

    const { data, error, isLoading } = useQuery<{count: number}>({
        queryKey: ['counter'],
        queryFn: getCounter,
    });

    const { isPending, isError, isSuccess, mutate } = useMutation({
        mutationFn: updateCounter,
        onSuccess: (mutationData) => {
            console.log('data', data);
            console.log('mutationData', mutationData);
            queryClient.setQueryData(['counter'], mutationData);
        },
    });

    return (
        <div className={'counters-demo'}>
            <article className={'counter-article'}>
                <div className={'counter-title'}>Server state counter</div>
                <Counter
                    count={data?.count ?? 0}
                    isLoading={isLoading}
                    error={error}
                    setCount={mutate}
                    updateError={isError}
                    updatePending={isPending}
                    updateSuccess={isSuccess}
                />
            </article>
            <article className={'counter-article'}>
                <div className={'counter-title'}>App state counter</div>
                <Counter count={count} isLoading={false} error={null} setCount={setCount} />
            </article>
        </div>
    );
};

export default CountersDemo;
