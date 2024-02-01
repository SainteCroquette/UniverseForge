import { ReactNode } from 'react';

import './Page.styles.scss';
interface PageProps {
    children?: ReactNode;
    className?: string;
}

const Page = ({ children, className }: PageProps): JSX.Element => {
    return <div className={`page ${className ? className : ''}`}>{children}</div>;
};

export default Page;
