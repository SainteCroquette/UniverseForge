import Page from '@templates/page/Page.tsx';
import { Typography } from '@atoms/index.ts';

const NotFoundPage = (): JSX.Element => {
    console.log(window.location.hostname);
    return (
        <Page defaultSideMenuMode={'collapsed'}>
            <Typography variant={'title'} size={'large'}>
                {() => '404 - Not Found'}
            </Typography>
        </Page>
    );
};

export default NotFoundPage;
