import Page from '@templates/page/Page.tsx';

import { Typography } from '@atoms/index.ts';

const NotFoundPage = (): JSX.Element => {
    return (
        <Page defaultSideMenuMode={'collapsed'}>
            <Typography variant={'title'} size={'large'} t={'common.notFound'} />
        </Page>
    );
};

export default NotFoundPage;
