import { LocalStorageItem, LOCAL_STORAGE_PREFFIX } from '@constants';
import type { LocalStorage } from '@types';

export const setLocalStorageItem = <T extends keyof LocalStorage>(
    item: T,
    value: LocalStorage[T]
) => {
    localStorage.setItem(
        `${LOCAL_STORAGE_PREFFIX}${String(item)}`,
        JSON.stringify(value)
    );
};

export const getLocalStorageItem = <T extends keyof LocalStorage>(
    item: T
): LocalStorage[T] | null =>
    JSON.parse(
        localStorage.getItem(`${LOCAL_STORAGE_PREFFIX}${String(item)}`)!
    ) as LocalStorage[T];

export const removeLocalStorageItem = (item: LocalStorageItem) => {
    localStorage.removeItem(`${LOCAL_STORAGE_PREFFIX}${item}`);
};
