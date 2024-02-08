import { NavLink } from 'react-router-dom';

import { useSideMenuStore } from '@core/features/sideMenuStore.ts';
import { useUserStore } from '@core/features/userStore.ts';

import { Typography, Button } from '@atoms/index.ts';

import './SideMenu.styles.scss';

const SideMenu = (): JSX.Element => {
    const { currentMode, toggle } = useSideMenuStore();
    const { login, logout, authorization } = useUserStore();

    return (
        <div className={`side-menu ${currentMode}`}>
            <div className={'side-menu-content'}>
                <Typography text={`side menu ${authorization.roles}`} />

                <Button onClick={toggle} label={'toggle'} />
                <NavLink to={'/'}>
                    <Typography className={'side-menu-item'} text={'Home'} />
                </NavLink>
                <NavLink to={'/counter'}>
                    <Typography className={'side-menu-item'} text={'Counter'} />
                </NavLink>
                <NavLink to={'/profile'}>
                    <Typography className={'side-menu-item'} text={'Profile'} />
                </NavLink>
                {authorization.satisfy({ all: { roles: ['guest'] } }) && <Button label={'Login'} onClick={login} />}
                {!authorization.satisfy({ all: { roles: ['guest'] } }) && <Button label={'Logout'} onClick={logout} />}
            </div>
        </div>
    );
};

export default SideMenu;
