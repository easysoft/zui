import type {Placement} from '@floating-ui/dom';
import type {MenuItemOptions, SearchMenuOptions} from '@zui/menu/src/types';

export interface DropdownMenuOptions<T extends MenuItemOptions = MenuItemOptions> extends SearchMenuOptions<T> {
    placement?: Placement;
}
