import { useQuery } from '@tanstack/react-query';
import { getError } from '@core/queries/ErrorQueries.ts';
import { Card } from '@atoms/index.ts';
import { useState } from 'react';
import BaseError from '@services/error/BaseError.ts';
import AppNavigation from '@services/navigation/AppNavigation.ts';

const ErrorsDemo = (): JSX.Element => {
    const { data, error, isLoading } = useQuery(getError);
    const [isError, setIsError] = useState(false);
    const boomWithPossibleRecovery = () => {
        throw new BaseError('Booom !!!', AppNavigation.errorsDemo);
    };

    const boom = () => {
        throw new Error('Boom!');
    };

    return (
        <div>
            <section>
                <h1>Errors Demo</h1>
                <Card>
                    async error from api through react-query (async error), handled by react-query
                    {isLoading && <div>Loading...</div>}
                    {error && <div>Error: {error.message}</div>}
                    <div>Data: {data === undefined ? 'undefined' : 'void'}</div>
                </Card>
                <Card>
                    render error on click (render error)
                    <button onClick={() => setIsError(true)}>Throw error on render</button>
                    {isError && <div>{boomWithPossibleRecovery()}</div>}
                </Card>
                <Card>
                    throw error on click (event error)
                    <button onClick={boom}>Throw error on event</button>
                </Card>
            </section>
        </div>
    );
};

export default ErrorsDemo;
