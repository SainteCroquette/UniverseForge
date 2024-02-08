import { NavLink } from 'react-router-dom';

import Page from '@templates/page/Page.tsx';
import { Typography } from '@atoms/index.ts';

function HomePage() {
    return (
        <Page className={'home-page'} defaultSideMenuMode={'expanded'}>
            <Typography variant={'title'} size={'large'} text={'Counter'} />
            <NavLink to={'/counter'}>
                <Typography text={'Counter'} />
            </NavLink>
        </Page>
    );
}

export default HomePage;
