import type {MenuItemOptions} from './menu-item-options';
import type {MenuOptions} from './menu-options';

export type MenuSetting<T extends unknown[] = []> = MenuItemOptions[] | MenuOptions | ((...args: T) => MenuItemOptions[] | MenuOptions);
