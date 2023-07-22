import type {Placement} from '@floating-ui/core';
import type {MenuItemOptions, MenuOptions} from '@zui/menu/src/types';

export interface DropdownMenuOptions<T extends MenuItemOptions = MenuItemOptions> extends MenuOptions<T> {
    placement?: Placement;
}
