import type { ParseKeys } from 'i18next';

import Typography from '@atoms/typography/Typography.tsx';

import './Button.styles.scss';

interface ButtonProps {
    label: ParseKeys;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ label, onClick, disabled, className, type = 'button' }: ButtonProps): JSX.Element => {
    return (
        <button className={`button ${className ?? ''}`} type={type} onClick={onClick} disabled={disabled}>
            <Typography className={'button-typo'} t={label} />
        </button>
    );
};

export default Button;
