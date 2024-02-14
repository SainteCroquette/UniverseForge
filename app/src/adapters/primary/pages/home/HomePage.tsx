import { NavLink } from 'react-router-dom';

import AppNavigation from '@services/navigation/AppNavigation.ts';

import Page from '@templates/page/Page.tsx';

import ErrorsDemo from '@organisms/errorsDemo/ErrorsDemo.tsx';

import { Button, Typography } from '@atoms/index.ts';

function HomePage() {
    const handleBoom = () => {
        console.log('Boom!');
        throw new Error('Boom!');
    };

    return (
        <Page className={'home-page'} defaultSideMenuMode={'expanded'}>
            <Typography variant={'title'} size={'large'} t={'organization.name'} />
            <ErrorsDemo />
            <Button label={'common.collapse'} onClick={handleBoom} />
            <NavLink to={AppNavigation.counter}>
                <Typography t={'counter.counter'} />
            </NavLink>
        </Page>
    );
}

export default HomePage;
