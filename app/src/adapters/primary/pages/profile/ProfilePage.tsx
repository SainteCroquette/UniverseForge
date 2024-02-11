import Page from '@templates/page/Page.tsx';
import { Typography } from '@atoms/index.ts';

const ProfilePage = (): JSX.Element => {
    return (
        <Page className={'profile-page'} defaultSideMenuMode={'collapsed'}>
            <Typography variant={'title'} size={'large'} t={'user.profile'}/>
        </Page>
    );
};

export default ProfilePage;
