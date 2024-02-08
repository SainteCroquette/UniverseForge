import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

import { getCounter, updateCounter } from '@core/queries/CounterQueries.ts';
import { useStore } from '@core/features/counterStore.ts';

import Counter from '@molecules/counter/Counter.tsx';
import Typography from "@atoms/typography/Typography.tsx";

import './CounterDemo.styles.scss';

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
                <Typography className={'demo-label'} text={'Server state counter'} />
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
                <Typography className={'demo-label'} text={'App state counter'} />
                <Counter count={count} isLoading={false} error={null} setCount={setCount} />
            </article>
        </div>
    );
};

export default CountersDemo;
