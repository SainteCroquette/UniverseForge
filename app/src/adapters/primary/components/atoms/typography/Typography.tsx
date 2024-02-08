import './Typography.styles.scss';

interface TypographyProps {
    text: string;
    variant?: 'title' | 'subtitle' | 'body' | 'caption';
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

const Typography = ({ text, variant, size = 'medium', className }: TypographyProps): JSX.Element => {
    if (variant === 'title') {
        switch (size) {
            case 'small':
                return <h3 className={`typography title small ${className ?? ''}`}>{text}</h3>;
            case 'medium':
                return <h2 className={`typography title medium ${className ?? ''}`}>{text}</h2>;
            case 'large':
                return <h1 className={`typography title large ${className ?? ''}`}>{text}</h1>;
        }
    }

    if (variant === 'subtitle') {
        switch (size) {
            case 'small':
                return <h6 className={`typography subtitle small ${className ?? ''}`}>{text}</h6>;
            case 'medium':
                return <h5 className={`typography subtitle medium ${className ?? ''}`}>{text}</h5>;
            case 'large':
                return <h4 className={`typography subtitle large ${className ?? ''}`}>{text}</h4>;
        }
    }

    if (variant === 'caption') {
        return <p className={`typography caption ${size} ${className ?? ''}`}>{text}</p>;
    }

    return <div className={`typography ${size} ${className ?? ''}`}>{text}</div>;
};

export default Typography;
