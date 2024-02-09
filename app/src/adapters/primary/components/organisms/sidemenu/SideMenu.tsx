import { NavLink } from 'react-router-dom';

import { useSideMenuStore } from '@core/features/sideMenuStore.ts';
import { useUserStore } from '@core/features/userStore.ts';

import AppNavigation from '@services/navigation/AppNavigation.ts';

import { Button, Typography } from '@atoms/index.ts';

import './SideMenu.styles.scss';

const SideMenu = (): JSX.Element => {
    const { currentMode, toggle } = useSideMenuStore();
    const { login, logout, authorization } = useUserStore();

    return (
        <div className={`side-menu ${currentMode}`}>
            <div className={'side-menu-content'}>
                <Typography>{() => `side menu ${authorization.roles}`}</Typography>
                <Button onClick={toggle} label={'toggle'} />
                <NavLink to={AppNavigation.home}>
                    <Typography className={'side-menu-item'}>{() => 'Home'}</Typography>
                </NavLink>
                <NavLink to={AppNavigation.counter}>
                    <Typography className={'side-menu-item'}>{() => 'Counter'}</Typography>
                </NavLink>
                <NavLink to={AppNavigation.profile}>
                    <Typography className={'side-menu-item'}>{() => 'Profile'}</Typography>
                </NavLink>
                {authorization.satisfy({ all: { roles: ['guest'] } }) && <Button label={'Login'} onClick={login} />}
                {!authorization.satisfy({ all: { roles: ['guest'] } }) && <Button label={'Logout'} onClick={logout} />}
            </div>
        </div>
    );
};

export default SideMenu;
