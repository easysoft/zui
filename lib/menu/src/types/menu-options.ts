import type {ActionBasicProps} from '@zui/action-menu/src/types/action-basic-props';
import type {ActionMenuOptions} from '@zui/action-menu/src/types/action-menu-options';
import type {MenuItemOptions} from './menu-item-options';

export interface MenuOptions<T extends ActionBasicProps = MenuItemOptions> extends ActionMenuOptions<T> {
    hasIcons?: boolean;
}
