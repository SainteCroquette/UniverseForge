import { useMemo } from 'react';
import type { ParseKeys } from 'i18next';

import useAppTranslation from '@core/hooks/useAppTranslation.ts';

import './Typography.styles.scss';

interface TypographyProps {
    variant?: 'title' | 'subtitle' | 'body' | 'caption';
    children?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    t?: ParseKeys;
}

function getHTMLElement(variant: string, size: string): keyof JSX.IntrinsicElements {
    let Element: keyof JSX.IntrinsicElements = 'div';

    if (variant === 'title') {
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
        Element = 'p';
    }

    return Element;
}

function getClasses(variant: string, size: string, className?: string): string {
    return `typography ${variant} ${size} ${className ?? ''}`;
}

const Typography = ({ variant = 'body', t: key, children, size = 'medium', className }: TypographyProps): JSX.Element => {
    const { t } = useAppTranslation();

    const Element = useMemo(() => getHTMLElement(variant, size), [variant, size]);
    const classes = useMemo(() => getClasses(variant, size, className), [variant, size, className]);
    const translation = useMemo(() => {
        if (key) {
            return t(key)
        }
        return children;
    }, [t, key, children]);

    return <Element className={classes}>{translation}</Element>;
};

export default Typography;
