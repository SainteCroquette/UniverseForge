import Typography from '@atoms/typography/Typography.tsx';

import './Button.styles.scss';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ label, onClick, disabled, className, type = 'button' }: ButtonProps): JSX.Element => {
    return (
        <button className={`button ${className ?? ''}`} type={type} onClick={onClick} disabled={disabled}>
            <Typography text={label} />
        </button>
    );
};

export default Button;
