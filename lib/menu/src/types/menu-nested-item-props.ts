import type {ActionNestedItemProps} from '@zui/action-menu/src/types/action-nested-item-props';
import type {ActionBasicProps} from '@zui/action-menu/src/types/action-basic-props';
import type {MenuItemOptions} from './menu-item-options';

export type MenuNestedItemProps<T extends ActionBasicProps = MenuItemOptions> = ActionNestedItemProps<T>;
