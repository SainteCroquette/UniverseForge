import { getCurrentLanguage } from '@services/translation/language.ts';

export default class AppNavigation {
    static get home() {
        return AppNavigation._buildPath('');
    }

    static get counter() {
        return AppNavigation._buildPath('/counter');
    }

    static get notFound() {
        return AppNavigation._buildPath('/404');
    }

    static get profile() {
        return AppNavigation._buildPath('/profile');
    }

    static get forbidden() {
        return AppNavigation._buildPath('/403');
    }

    private static _buildPath(path: string) {
        return `/${getCurrentLanguage()}${path}`;
    }
}
