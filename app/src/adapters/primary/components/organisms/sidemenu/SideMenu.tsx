import { useSideMenuStore } from '@core/features/sideMenuStore.ts';

import './SideMenu.styles.scss';
import {NavLink} from "react-router-dom";

const SideMenu = (): JSX.Element => {
    const { currentMode, toggle } = useSideMenuStore();

    return (
        <div className={`side-menu ${currentMode}`}>
            <div className={'side-menu-content'}>
                side menu
                <button onClick={toggle}>toggle</button>
                <NavLink to={'/'} >Home</NavLink>
                <NavLink to={'/counter'}>Counter</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
        </div>
    );
};

export default SideMenu;
