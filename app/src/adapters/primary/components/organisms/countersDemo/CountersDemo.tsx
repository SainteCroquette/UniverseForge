import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getCounter, QUERY_COUNTER_KEY, updateCounter } from '@core/queries/CounterQueries.ts';
import { useStore } from '@core/features/counterStore.ts';

import Counter from '@molecules/counter/Counter.tsx';
import Typography from '@atoms/typography/Typography.tsx';

import './CounterDemo.styles.scss';

const CountersDemo = (): JSX.Element => {
    const queryClient = useQueryClient();

    const { count, setCount } = useStore();

    const { data, error, isLoading } = useQuery(getCounter);

    const { isPending, isError, isSuccess, mutate } = useMutation({
        ...updateCounter,
        onSuccess: (mutationData) => {
            queryClient.setQueryData(QUERY_COUNTER_KEY, mutationData);
        },
    });

    return (
        <div className={'counters-demo'}>
            <article className={'counter-article'}>
                <Typography className={'demo-label'}>{() => 'Server state counter'}</Typography>
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
                <Typography className={'demo-label'}>{() => 'App state counter'}</Typography>
                <Counter count={count} isLoading={false} error={null} setCount={setCount} />
            </article>
        </div>
    );
};

export default CountersDemo;
