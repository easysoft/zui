import type {PopoverOptions} from '@zui/popover';
import type {ItemsSetting} from '@zui/list';
import type {DropdownMenuOptions} from './dropdown-menu-options';

export type DropdownOptions = PopoverOptions & {
    menu?: Partial<DropdownMenuOptions>,
    items?: ItemsSetting,
};
