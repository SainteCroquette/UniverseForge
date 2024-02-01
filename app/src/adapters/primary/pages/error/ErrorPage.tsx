import Page from "@components/page/Page.tsx";

import './ErrorPage.styles.scss';

interface ErrorPageProps {
    error: string;
}

const ErrorPage = (props: ErrorPageProps): JSX.Element => {
    return (
        <Page className={'error-page'}>
            <h1>Error</h1>
            <p>{props.error}</p>
        </Page>
    );
};

export default ErrorPage;
