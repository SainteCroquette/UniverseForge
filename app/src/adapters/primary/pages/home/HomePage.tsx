import { NavLink } from 'react-router-dom';

import Page from '@templates/page/Page.tsx';
import { Typography } from '@atoms/index.ts';
import {useTranslation} from "react-i18next";

function HomePage() {
    const { t } = useTranslation();

    return (
        <Page className={'home-page'} defaultSideMenuMode={'expanded'}>
            <Typography variant={'title'} size={'large'} text={t('toto')} />
            <NavLink to={'/counter'}>
                <Typography text={'Counter'} />
            </NavLink>
        </Page>
    );
}

export default HomePage;
