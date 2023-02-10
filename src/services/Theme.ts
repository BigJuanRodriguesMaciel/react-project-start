import { LocalStorageItem } from '@constants';
import type { Theme } from 'types';
import { getLocalStorageItem, setLocalStorageItem } from './LocalStorage';

export function setTheme(theme?: Theme) {
    const isBrowserDarkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;

    const browserPreference = isBrowserDarkTheme ? 'theme-dark' : 'theme-light';

    const userPreference = getLocalStorageItem(LocalStorageItem.Theme);
    const newTheme = theme || userPreference || browserPreference;

    if (theme) setLocalStorageItem(LocalStorageItem.Theme, theme);

    document.body.className = newTheme;
}

export function getTheme() {
    const isBrowserDarkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;

    const browserPreference = isBrowserDarkTheme ? 'theme-dark' : 'theme-light';

    return (
        (getLocalStorageItem(LocalStorageItem.Theme) as Theme) ||
        browserPreference
    );
}
