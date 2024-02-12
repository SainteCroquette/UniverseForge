import Page from '@templates/page/Page.tsx';

import { Typography } from '@atoms/index.ts';

import './ErrorPage.styles.scss';

interface ErrorPageProps {
    error: string;
}

const ErrorPage = ({ error }: ErrorPageProps): JSX.Element => {
    return (
        <Page className={'error-page'}>
            <Typography t={'common.error'} />
            <Typography>{() => error}</Typography>
        </Page>
    );
};

export default ErrorPage;
