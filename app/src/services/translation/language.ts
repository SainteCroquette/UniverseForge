import { changeLanguage, getLanguage } from './i18n.ts';

export function getLanguageFromBrowser() {
    return navigator.language.split('-')[0];
}

export function switchLanguage(lang?: string) {
    if (lang && getLanguage() !== lang) {
        changeLanguage(lang);
    }
}
