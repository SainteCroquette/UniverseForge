import Button from '@atoms/button/Button.tsx';
import Card from '@atoms/card/Card.tsx';
import Typography from '@atoms/typography/Typography.tsx';

import './Counter.styles.scss';

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
            <Typography>
                {({ Trans }) => (
                    <Trans i18nKey={'counter.value'} values={{ value: count }} components={{ balise: <b /> }} />
                )}
            </Typography>

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
