import { TranslationKeys } from '@services/translation/i18n.ts';
import { useTranslation } from 'react-i18next';

const useAppTranslation = () => {
    const { t } = useTranslation();
    const translate = (accessor: (k: TranslationKeys) => string) => t(getPropertyAccessString(accessor));

    return {
        t: translate,
    };
};

function getPropertyAccessString(accessor: (k: TranslationKeys) => string): string {
    const functionString = accessor.toString();
    const translationKeyIndex = functionString.indexOf('.');

    if (translationKeyIndex === -1) {
        return '';
    }
    return functionString.substring(translationKeyIndex + 1);
}

export default useAppTranslation;
