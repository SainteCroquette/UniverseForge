import Button from '@atoms/button/Button.tsx';

import './Counter.styles.scss';
import Card from '@atoms/card/Card.tsx';
import Typography from '@atoms/typography/Typography.tsx';

interface CounterProps {
    count: number;
    isLoading: boolean;
    updatePending?: boolean;
    updateError?: boolean;
    updateSuccess?: boolean;
    error: Error | null;
    setCount: (count: number) => void;
}

const Counter = ({ count, isLoading, updatePending, error, updateError, updateSuccess, setCount }: CounterProps) => {
    if (isLoading) {
        return (
            <Card>
                <Typography>{() => 'Loading...'}</Typography>
            </Card>
        );
    }

    if (error) {
        return (
            <Card>
                <Typography>{() => 'Error'}</Typography>
            </Card>
        );
    }

    const handleIncrement = async () => {
        setCount(count + 1);
    };

    const handleDecrement = async () => {
        setCount(count - 1);
    };

    return (
        <Card className={'counter'}>
            <Typography>{() => `Count: ${count}`}</Typography>

            <section className={'counter-buttons'}>
                <Button onClick={handleIncrement}>{(k) => k.counter.increment}</Button>

                <Button onClick={handleDecrement}>{(k) => k.counter.decrement}</Button>
            </section>

            <div>
                {updatePending && <Typography>{(k) => k.common.saving}</Typography>}
                {updateError && <Typography>{(k) => k.common.error}</Typography>}
                {updateSuccess && <Typography>{(k) => k.common.saved}</Typography>}
            </div>
        </Card>
    );
};

export default Counter;
