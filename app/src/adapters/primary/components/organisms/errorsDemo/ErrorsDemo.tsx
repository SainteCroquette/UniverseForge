import { useQuery } from '@tanstack/react-query';
import { getError } from '@core/queries/ErrorQueries.ts';

const ErrorsDemo = (): JSX.Element => {
    const { data, error, isLoading } = useQuery(getError);
    return (
        <div>
            <h1>Errors Demo</h1>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            <div>Data: {data === undefined ? 'undefined' : 'void'}</div>
        </div>
    );
};

export default ErrorsDemo;
