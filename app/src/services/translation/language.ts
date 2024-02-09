import { changeLanguage, getLanguage, getLanguages } from './i18n.ts';

export function getLanguageFromBrowser() {
    return navigator.language.split('-')[0];
}

export function switchLanguage(lang: string) {
    if (getLanguage() !== lang) {
        changeLanguage(lang);
    }
}

export function doLanguageExist(lang: string) {
    return getLanguages().includes(lang);
}
