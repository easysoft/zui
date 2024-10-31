import type {NavItemOptions} from './nav-item-options';
import type {NavOptions} from './nav-options';

export type NavSetting<T extends unknown[] = []> = NavItemOptions[] | NavOptions | ((...args: T) => NavItemOptions[] | NavOptions);
