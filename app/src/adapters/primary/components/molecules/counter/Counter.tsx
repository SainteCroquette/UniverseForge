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
                <Button onClick={handleIncrement} label={'Increment'} />

                <Button onClick={handleDecrement} label={'Decrement'} />
            </section>

            <div>
                {updatePending && <Typography>{() => 'Saving...'}</Typography>}
                {updateError && <Typography>{() => 'Error...'}</Typography>}
                {updateSuccess && <Typography>{() => 'Saved'}</Typography>}
            </div>
        </Card>
    );
};

export default Counter;
