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
                <Typography t={'counter.loading'} />
            </Card>
        );
    }

    if (error) {
        return (
            <Card>
                <Typography t={'counter.error'} />
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
            <Typography t={'counter.value'} />

            <section className={'counter-buttons'}>
                <Button onClick={handleIncrement} label={'counter.increment'} />

                <Button onClick={handleDecrement} label={'counter.decrement'} />
            </section>

            <div>
                {updatePending && <Typography t={'common.saving'} />}
                {updateError && <Typography t={'counter.error'} />}
                {updateSuccess && <Typography t={'common.saved'} />}
            </div>
        </Card>
    );
};

export default Counter;
