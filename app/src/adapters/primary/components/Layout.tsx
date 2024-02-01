import { Outlet } from 'react-router-dom';
import SideMenu from "@components/sidemenu/SideMenu.tsx";

import './Layout.styles.scss';

const Layout = (): JSX.Element => {
    return (
        <div className={'app-layout'}>
            <SideMenu />
            <div className={'page-container'}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
