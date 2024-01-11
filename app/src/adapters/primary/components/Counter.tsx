import { useStore } from '@core/store.ts';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const Counter = () => {
    const { count, setCount } = useStore();

    const { data, error, isLoading } = useQuery({
        queryKey: ['counter'],
        queryFn: async (toto) => {
            console.log('toto', toto);
            const response = await fetch(`http://localhost:3000/counter/1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return await response.json();
        },
    });

    const { isPending, isError, isSuccess, mutate } = useMutation({
        mutationFn: async (count: number) => {
            await fetch(`http://localhost:3000/counter/1`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ count }),
            });
            return count;
        },
        onSuccess: (data) => {
            setCount(data);
        }
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
    }

    const handleDecrement = async () => {
        mutate(count - 1);
    }

    return (
        <div>
            <p>Counter: {count}</p>

            <button onClick={handleIncrement}>Increment</button>

            <button onClick={handleDecrement}>Decrement</button>

            <div>
                {isPending && 'Saving...'}
                {isError && 'Error...'}
                {isSuccess && 'Saved'}
            </div>
        </div>
    );
};

export default Counter;
