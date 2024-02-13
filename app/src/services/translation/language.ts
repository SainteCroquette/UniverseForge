import { changeLanguage, getFallbackLanguage, getLanguage, getLanguages } from './i18n.ts';

export function getLanguageFromBrowser() {
    return navigator.language.split('-')[0];
}

export function getCurrentLanguage() {
    return getLanguage();
}

export function getDefaultLanguage() {
    return getFallbackLanguage();
}

export function getAvailableLanguages() {
    return getLanguages();
}

export function switchLanguage(lang: string) {
    if (getLanguage() !== lang) {
        changeLanguage(lang);
    }
}

export function doLanguageExist(lang: string) {
    return getLanguages().includes(lang);
}

export function areLanguagesAvailable(): boolean {
    return getLanguages() && getLanguages().length > 0;
}
