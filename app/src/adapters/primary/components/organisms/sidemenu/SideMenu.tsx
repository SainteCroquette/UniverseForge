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
                <Typography t={'common.sideMenu'} />
                <Button onClick={toggle} label={'common.toggle'} />
                <NavLink to={AppNavigation.home}>
                    <Typography className={'side-menu-item'} t={'common.home'} />
                </NavLink>
                <NavLink to={AppNavigation.counter}>
                    <Typography className={'side-menu-item'} t={'counter.counter'} />
                </NavLink>
                <NavLink to={AppNavigation.profile}>
                    <Typography className={'side-menu-item'} t={'user.profile'} />
                </NavLink>
                {authorization.satisfy({ all: { roles: ['guest'] } }) && (
                    <Button onClick={login} label={'user.login'} />
                )}
                {!authorization.satisfy({ all: { roles: ['guest'] } }) && (
                    <Button onClick={logout} label={'user.logout'} />
                )}
            </div>
        </div>
    );
};

export default SideMenu;
