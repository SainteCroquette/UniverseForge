import Page from "@templates/page/Page.tsx";
import {Typography} from "@atoms/index.ts";


const NotFoundPage = (): JSX.Element => {
    console.log(window.location.hostname);
    return (
        <Page defaultSideMenuMode={'collapsed'}>
            <Typography text={'404 - Not Found'} variant={'title'} size={'large'} />
        </Page>
    );
};

export default NotFoundPage;
