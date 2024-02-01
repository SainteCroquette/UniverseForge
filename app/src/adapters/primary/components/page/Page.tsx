import { ReactNode, useEffect } from 'react';

import './Page.styles.scss';
import { SideMenuModes, useSideMenuStore } from '@core/features/sideMenuStore.ts';
interface PageProps {
    children?: ReactNode;
    className?: string;
    defaultSideMenuMode?: SideMenuModes;
}

const Page = ({ children, className, defaultSideMenuMode }: PageProps): JSX.Element => {
    const { setDefaultMode } = useSideMenuStore();

    useEffect(() => {
        if (defaultSideMenuMode) {
            setDefaultMode(defaultSideMenuMode);
        }
    }, [setDefaultMode, defaultSideMenuMode]);

    return <div className={`page ${className ? className : ''}`}>{children}</div>;
};

export default Page;
