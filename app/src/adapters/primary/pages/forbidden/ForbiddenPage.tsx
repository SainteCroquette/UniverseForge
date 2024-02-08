import Page from '@templates/page/Page.tsx';
import { Typography } from '@atoms/index.ts';

const ForbiddenPage = (): JSX.Element => {
    return (
        <Page>
            <Typography variant={'title'} size={'large'} text={'Forbidden'} />
            <Typography text={'Sorry, you are not allowed to access this page.'} />
        </Page>
    );
};

export default ForbiddenPage;
