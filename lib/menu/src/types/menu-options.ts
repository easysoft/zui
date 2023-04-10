import type {ActionBasicProps, ActionMenuNestedOptions} from '@zui/action-menu/src/types';
import type {MenuItemOptions} from './menu-item-options';

export interface MenuOptions<T extends ActionBasicProps = MenuItemOptions> extends ActionMenuNestedOptions<T> {
    hasIcons?: boolean;
    popup?: boolean;
}
