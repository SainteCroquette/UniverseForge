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
                <Typography text={'Loading...'} />
            </Card>
        );
    }

    if (error) {
        return (
            <Card>
                <Typography text={'Error'} />
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
            <Typography text={`Count: ${count}`} />

            <section className={'counter-buttons'}>
                <Button onClick={handleIncrement} label={'Increment'} />

                <Button onClick={handleDecrement} label={'Decrement'} />
            </section>

            <div>
                {updatePending && <Typography text={'Saving...'} />}
                {updateError && <Typography text={'Error...'} />}
                {updateSuccess && <Typography text={'Saved'} />}
            </div>
        </Card>
    );
};

export default Counter;
