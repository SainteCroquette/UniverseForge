import { NavLink } from 'react-router-dom';

import AppNavigation from '@services/navigation/AppNavigation.ts';

import Page from '@templates/page/Page.tsx';

import { Typography } from '@atoms/index.ts';
import ErrorsDemo from '@organisms/errorsDemo/ErrorsDemo.tsx';

function HomePage() {
    return (
        <Page className={'home-page'} defaultSideMenuMode={'expanded'}>
            <Typography variant={'title'} size={'large'} t={'organization.name'} />
            <ErrorsDemo />
            <NavLink to={AppNavigation.counter}>
                <Typography t={'counter.counter'} />
            </NavLink>
        </Page>
    );
}

export default HomePage;
