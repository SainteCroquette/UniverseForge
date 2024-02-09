import './Typography.styles.scss';

interface TypographyProps {
    variant?: 'title' | 'subtitle' | 'body' | 'caption';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    children: () => string;
}

const Typography = ({ variant, children, size = 'medium', className }: TypographyProps): JSX.Element => {
    let Element: keyof JSX.IntrinsicElements = 'div';
    let variantClass = '';

    if (variant === 'title') {
        variantClass = 'title';
        switch (size) {
            case 'small':
                Element = 'h3';
                break;
            case 'medium':
                Element = 'h2';
                break;
            case 'large':
                Element = 'h1';
                break;
        }
    }

    if (variant === 'subtitle') {
        variantClass = 'subtitle';
        switch (size) {
            case 'small':
                Element = 'h6';
                break;
            case 'medium':
                Element = 'h5';
                break;
            case 'large':
                Element = 'h4';
                break;
        }
    }

    if (variant === 'caption') {
        variantClass = 'caption';
        Element = 'p';
    }

    const classes = `typography ${variantClass} ${size} ${className ?? ''}`;

    return <Element className={classes}>{children()}</Element>;
};

export default Typography;
