import { useSideMenuStore } from '@core/features/sideMenuStore.ts';
import { useUserStore } from '@core/features/userStore.ts';
import useAppNavigation from '@core/hooks/useAppNavigation.ts';

import LanguageSelector from '@organisms/languageSelector/LanguageSelector.tsx';

import { Button, Typography } from '@atoms/index.ts';

import './SideMenu.styles.scss';

const SideMenu = (): JSX.Element => {
    const { currentMode, toggle } = useSideMenuStore();
    const { login, logout, authorization } = useUserStore();
    const { goToHome, goToProfile, goToCounter } = useAppNavigation();

    return (
        <div className={`side-menu ${currentMode}`}>
            <div className={'side-menu-content'}>
                <Typography t={'common.sideMenu'} />
                <Button onClick={toggle} label={'common.toggle'} />
                <Button onClick={goToHome} className={'side-menu-item'} label={'common.home'} />
                <Button onClick={goToCounter} className={'side-menu-item'} label={'counter.counter'} />
                <Button onClick={goToProfile} className={'side-menu-item'} label={'user.profile'} />
                {authorization.satisfy({ all: { roles: ['guest'] } }) && (
                    <Button onClick={login} label={'user.login'} />
                )}
                {!authorization.satisfy({ all: { roles: ['guest'] } }) && (
                    <Button onClick={logout} label={'user.logout'} />
                )}
                <LanguageSelector />
            </div>
        </div>
    );
};

export default SideMenu;
