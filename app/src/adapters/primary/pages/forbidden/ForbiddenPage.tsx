import Page from '@templates/page/Page.tsx';
import { Typography } from '@atoms/index.ts';

const ForbiddenPage = (): JSX.Element => {
    return (
        <Page>
            <Typography variant={'title'} size={'large'}>
                {() => 'Forbidden'}
            </Typography>
            <Typography>{() => 'Sorry, you are not allowed to access this page.'}</Typography>
        </Page>
    );
};

export default ForbiddenPage;
