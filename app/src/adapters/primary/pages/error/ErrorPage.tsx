import Page from '@templates/page/Page.tsx';

import './ErrorPage.styles.scss';
import { Typography } from '@atoms/index.ts';

interface ErrorPageProps {
    error: string;
}

const ErrorPage = (props: ErrorPageProps): JSX.Element => {
    return (
        <Page className={'error-page'}>
            <Typography text={'Error'} />
            <Typography text={props.error} />
        </Page>
    );
};

export default ErrorPage;
