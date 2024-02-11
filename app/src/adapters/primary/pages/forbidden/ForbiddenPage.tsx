import Page from '@templates/page/Page.tsx';
import { Typography } from '@atoms/index.ts';

const ForbiddenPage = (): JSX.Element => {
    return (
        <Page>
            <Typography variant={'title'} size={'large'} t={'common.forbidden'} />
            <Typography t={'common.noAccess'} />
        </Page>
    );
};

export default ForbiddenPage;
