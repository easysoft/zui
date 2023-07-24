import type {Dropdown} from '../vanilla/dropdown';
import type {PopoverOptions} from '@zui/popover';
import type {DropdownMenuOptions} from './dropdown-menu-options';
import type {MenuItemOptions} from '@zui/menu/src/types';

export type DropdownOptions = PopoverOptions & {
    menu?: Partial<DropdownMenuOptions>,
    items?: MenuItemOptions[] | ((menu: Dropdown) => MenuItemOptions[]),
};
