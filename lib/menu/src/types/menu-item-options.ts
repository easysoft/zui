import type {MenuCustomProps} from './menu-custom-props';
import type {MenuDividerProps} from './menu-divider-props';
import type {MenuHeadingProps} from './menu-heading-props';
import type {MenuItemProps} from './menu-item-props';
import type {MenuNestedItemProps} from './menu-nested-item-props';

export type MenuItemOptions = MenuDividerProps | MenuHeadingProps | MenuItemProps | MenuNestedItemProps | MenuCustomProps;
