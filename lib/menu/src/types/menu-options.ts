import {ActionBasicProps} from '@zui/action-menu/src/types/action-basic-props';
import {ActionMenuOptions} from '@zui/action-menu/src/types/action-menu-options';
import {MenuItemOptions} from './menu-item-options';

export interface MenuOptions<T extends ActionBasicProps = MenuItemOptions> extends ActionMenuOptions<T> {
    hasIcons?: boolean;
}
