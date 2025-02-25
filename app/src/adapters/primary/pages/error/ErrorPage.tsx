import Page from '@templates/page/Page.tsx';

import { Typography } from '@atoms/index.ts';

import './ErrorPage.styles.scss';
import { useMemo } from 'react';

interface ErrorPageProps {
    error: string;
    stacktrace?: string;
    onReset?: () => void;
}

const ErrorPage = ({ error, stacktrace, onReset }: ErrorPageProps): JSX.Element => {
    const stacktraceLines = useMemo(() => {
        if (!stacktrace) {
            return [];
        }

        return stacktrace.split('\n');
    }, [stacktrace]);

    return (
        <Page className={'error-page'}>
            <Typography t={'common.error'} />
            <Typography>{() => error}</Typography>
            {stacktraceLines.map((line, index) => (
                <Typography key={index}>{() => line}</Typography>
            ))}
            {onReset && <button onClick={onReset}>Reset</button>}
        </Page>
    );
};

export default ErrorPage;
