import Page from '@templates/page/Page.tsx';

import { Typography } from '@atoms/index.ts';

import './ErrorPage.styles.scss';

interface ErrorPageProps {
    error: string;
}

const ErrorPage = (props: ErrorPageProps): JSX.Element => {
    return (
        <Page className={'error-page'}>
            <Typography>{() => 'Error'}</Typography>
            <Typography>{() => props.error}</Typography>
        </Page>
    );
};

export default ErrorPage;
