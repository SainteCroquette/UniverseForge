import { useMutation, useQuery } from '@tanstack/react-query';
import { useStore } from '@core/features/counterStore.ts';
import { useEffect } from 'react';
import { getCounter, updateCounter } from '@core/queries/CounterQueries.ts';

import './Counter.styles.scss';

const Counter = () => {
    const { count, setCount } = useStore();

    const { data, error, isLoading } = useQuery({
        queryKey: ['counter'],
        queryFn: getCounter,
    });

    const { isPending, isError, isSuccess, mutate } = useMutation({
        mutationFn: updateCounter,
        onSuccess: (data) => {
            setCount(data);
        },
    });

    useEffect(() => {
        if (data) {
            setCount(data.count);
        }
    }, [data]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    const handleIncrement = async () => {
        mutate(count + 1);
    };

    const handleDecrement = async () => {
        mutate(count - 1);
    };

    return (
        <div className={'counter'}>
            <p>Counter: {count}</p>

            <button className={'counter-button'} onClick={handleIncrement}>Increment</button>

            <button className={'counter-button'} onClick={handleDecrement}>Decrement</button>

            <div>
                {isPending && 'Saving...'}
                {isError && 'Error...'}
                {isSuccess && 'Saved'}
            </div>
        </div>
    );
};

export default Counter;
