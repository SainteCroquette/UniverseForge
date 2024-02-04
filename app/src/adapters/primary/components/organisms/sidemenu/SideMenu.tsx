import { useSideMenuStore } from '@core/features/sideMenuStore.ts';

import './SideMenu.styles.scss';
import { NavLink } from 'react-router-dom';
import { useUserStore } from '@core/features/userStore.ts';
import Button from '@atoms/button/Button.tsx';

const SideMenu = (): JSX.Element => {
    const { currentMode, toggle } = useSideMenuStore();
    const { login, logout, authorization } = useUserStore();

    return (
        <div className={`side-menu ${currentMode}`}>
            <div className={'side-menu-content'}>
                side menu {authorization.roles}
                <button onClick={toggle}>toggle</button>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/counter'}>Counter</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
                {
                    authorization.satisfy({ all: { roles: ['guest'] } }) && <Button label={'Login'} onClick={login}/>
                }
                {
                    !authorization.satisfy({ all: { roles: ['guest'] } }) && <Button label={'Logout'} onClick={logout}/>
                }
            </div>
        </div>
    )
        ;
};

export default SideMenu;
