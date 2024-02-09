import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import AppNavigation from '@services/navigation/AppNavigation.ts';

import Page from '@templates/page/Page.tsx';

import { Typography } from '@atoms/index.ts';

function HomePage() {
    const { t } = useTranslation();

    return (
        <Page className={'home-page'} defaultSideMenuMode={'expanded'}>
            <Typography variant={'title'} size={'large'}>
                {() => t('organization.name')}
            </Typography>
            <NavLink to={AppNavigation.counter}>
                <Typography>{() => 'Counter'}</Typography>
            </NavLink>
        </Page>
    );
}

export default HomePage;
