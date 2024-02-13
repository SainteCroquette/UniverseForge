import { useEffect, useMemo } from 'react';

import { getAvailableLanguages } from '@services/translation/language.ts';

import { useLanguageStore } from '@core/features/languageStore.ts';
import useAppNavigation from '@core/hooks/useAppNavigation.ts';

import Select from '@molecules/select/Select.tsx';

import { Typography } from '@atoms/index.ts';

const LanguageSelector = (): JSX.Element => {
    const { goToLangSameRoute } = useAppNavigation();
    const languages = useMemo(() => {
        return getAvailableLanguages().map((language) => ({
            id: language,
            value: language,
        }));
    }, []);

    const { changeLanguage, language } = useLanguageStore();

    const handleSelect = (id: string) => {
        if (id !== '') {
            changeLanguage(id);
        }
    };

    useEffect(() => {
        goToLangSameRoute(language);
    }, [language, goToLangSameRoute]);

    return (
        <section className={'language-selector'}>
            <Typography t={'common.language'} />
            <Select options={languages} onSelect={handleSelect} selected={language} />
        </section>
    );
};

export default LanguageSelector;
