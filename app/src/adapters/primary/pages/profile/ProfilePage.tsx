import Page from "@templates/page/Page.tsx";

const ProfilePage = (): JSX.Element => {
    return (
        <Page className={'profile-page'} defaultSideMenuMode={'collapsed'}>
            Private profile page
        </Page>
    );
};

export default ProfilePage;
