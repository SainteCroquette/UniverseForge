import Page from '@templates/page/Page.tsx';
import { Typography } from '@atoms/index.ts';

const ForbiddenPage = (): JSX.Element => {
    return (
        <Page>
            <Typography variant={'title'} size={'large'}>
                {(k) => k.common.forbidden}
            </Typography>
            <Typography>{(k) => k.common.noAccess}</Typography>
        </Page>
    );
};

export default ForbiddenPage;
