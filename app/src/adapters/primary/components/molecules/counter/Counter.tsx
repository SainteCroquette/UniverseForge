import Button from '@atoms/button/Button.tsx';

import './Counter.styles.scss';
import Card from "@atoms/card/Card.tsx";

interface CounterProps {
    count: number;
    isLoading: boolean;
    updatePending?: boolean;
    updateError?: boolean;
    updateSuccess?: boolean;
    error: Error | null;
    setCount: (count: number) => void;
}

const Counter = ({count, isLoading, updatePending, error, updateError, updateSuccess, setCount}: CounterProps) => {

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    const handleIncrement = async () => {
        setCount(count + 1);
    };

    const handleDecrement = async () => {
        setCount(count - 1);
    };

    return (
        <Card className={'counter'}>
            <p>Counter: {count}</p>

            <Button className={'counter-button'} onClick={handleIncrement} label={'Increment'} />

            <Button className={'counter-button'} onClick={handleDecrement} label={'Decrement'} />

            <div>
                {updatePending && 'Saving...'}
                {updateError && 'Error...'}
                {updateSuccess && 'Saved'}
            </div>
        </Card>
    );
};

export default Counter;
