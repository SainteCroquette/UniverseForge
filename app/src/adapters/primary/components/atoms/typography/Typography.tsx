import { useMemo } from 'react';
import type { ParseKeys, TOptions, InterpolationMap } from 'i18next';

import useAppTranslation from '@core/hooks/useAppTranslation.ts';

import './Typography.styles.scss';
import { Trans } from 'react-i18next';

interface TypographyProps {
    t?: ParseKeys;
    values?: any;
    children?: string;
    variant?: 'title' | 'subtitle' | 'body' | 'caption';
    size?: 'small' | 'medium' | 'large';
    className?: string;
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

const Typography = ({
    variant = 'body',
    t: key,
    values,
    children,
    size = 'medium',
    className,
}: TypographyProps): JSX.Element => {
    const { t } = useAppTranslation();

    const Element = useMemo(() => getHTMLElement(variant, size), [variant, size]);
    const classes = useMemo(() => getClasses(variant, size, className), [variant, size, className]);
    const translation = useMemo(() => {
        if (key) {
            return t(key);
        }
        return children;
    }, [t, key, children]);

    const ttt: typeof t = (key: ParseKeys, options?: TOptions<InterpolationMap>) => {
        return t(key, options);
    };

    //    return <Element className={classes}>{translation}</Element>;
    return (
        <Trans i18nKey={'counter.value'} values={{ badVal: 54 }}>
            {t('counter.value', { value: 54 })}
        </Trans>
    );
};

export default Typography;
