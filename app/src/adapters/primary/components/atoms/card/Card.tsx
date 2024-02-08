import { ReactNode } from 'react';

import './Card.styles.scss';

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card = (props: CardProps): JSX.Element => {
    return <article className={`card ${props?.className ?? ''}`}>{props.children}</article>;
};

export default Card;
