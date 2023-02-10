import { LocalStorageItem } from '@constants';
import type { Theme } from './Theme';

export interface LocalStorage {
    [LocalStorageItem.Auth]: {
        refreshToken: string;
        accessToken: string;
        expiresIn: number;
        timestamp: number;
    };
    [LocalStorageItem.Theme]: Theme;
}
