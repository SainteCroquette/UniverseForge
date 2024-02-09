import useAppTranslation from '@core/hooks/useAppTranslation.ts';

import { TranslationKeys } from '@services/translation/i18n.ts';

import './Typography.styles.scss';

interface TypographyProps {
    variant?: 'title' | 'subtitle' | 'body' | 'caption';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    children: (k: TranslationKeys) => string;
}

const Typography = ({ variant, children, size = 'medium', className }: TypographyProps): JSX.Element => {
    const { t } = useAppTranslation();
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

    return <Element className={classes}>{t(children)}</Element>;
};

export default Typography;
