import type {MenuOptions} from '@zui/menu/src/types/menu-options';
import type {Dropdown} from '../vanilla/dropdown';
import type {PopoverOptions} from '@zui/popover';
import type {DropdownMenuOptions} from './dropdown-menu-options';

export type DropdownOptions = PopoverOptions & {
    menu?: Partial<MenuOptions>,
    items?: DropdownMenuOptions[] | ((menu: Dropdown) => DropdownMenuOptions[]),
};
