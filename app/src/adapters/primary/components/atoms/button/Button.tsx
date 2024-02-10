import Typography from '@atoms/typography/Typography.tsx';

import './Button.styles.scss';
import { TranslationKeys } from '@services/translation/i18n.ts';

interface ButtonProps {
    children: (k: TranslationKeys) => string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, disabled, className, type = 'button' }: ButtonProps): JSX.Element => {
    return (
        <button className={`button ${className ?? ''}`} type={type} onClick={onClick} disabled={disabled}>
            <Typography className={'button-typo'}>{children}</Typography>
        </button>
    );
};

export default Button;
