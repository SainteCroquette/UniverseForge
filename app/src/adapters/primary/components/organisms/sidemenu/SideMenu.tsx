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
                <Typography>{(k) => k.common.sideMenu}</Typography>
                <Button onClick={toggle}>{(k) => k.common.toggle}</Button>
                <NavLink to={AppNavigation.home}>
                    <Typography className={'side-menu-item'}>{(k) => k.common.home}</Typography>
                </NavLink>
                <NavLink to={AppNavigation.counter}>
                    <Typography className={'side-menu-item'}>{(k) => k.counter.counter}</Typography>
                </NavLink>
                <NavLink to={AppNavigation.profile}>
                    <Typography className={'side-menu-item'}>{(k) => k.user.profile}</Typography>
                </NavLink>
                {authorization.satisfy({ all: { roles: ['guest'] } }) && (
                    <Button onClick={login}>{(k) => k.user.login}</Button>
                )}
                {!authorization.satisfy({ all: { roles: ['guest'] } }) && (
                    <Button onClick={logout}>{(k) => k.user.logout}</Button>
                )}
            </div>
        </div>
    );
};

export default SideMenu;
