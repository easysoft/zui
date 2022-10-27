import {ActionMenuItem} from '@zui/action-menu/src/types/action-menu-item';
import {ActionMenuOptions} from '@zui/action-menu/src/types/action-menu-options';
import {MenuCommonItem} from './menu-common-item';

export interface MenuOptions<T extends ActionMenuItem = MenuCommonItem> extends ActionMenuOptions<T> {
    hasIcons?: boolean;
}
