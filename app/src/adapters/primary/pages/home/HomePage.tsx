import { NavLink } from 'react-router-dom';

import Page from '@templates/page/Page.tsx';

function HomePage() {
    return (
        <Page className={'home-page'} defaultSideMenuMode={'expanded'}>
            app
            <NavLink to={'/counter'}>Counter</NavLink>
        </Page>
    );
}

export default HomePage;
