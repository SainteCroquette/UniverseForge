import { Outlet } from 'react-router-dom';
import SideMenu from "@organisms/sidemenu/SideMenu.tsx";

import './AppLayout.styles.scss';

const AppLayout = (): JSX.Element => {
    return (
        <div className={'app-layout'}>
            <SideMenu />
            <div className={'page-container'}>
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;
