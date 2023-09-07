import type {PopoverOptions} from '@zui/popover';
import type {DropdownMenuOptions} from './dropdown-menu-options';

export type DropdownOptions = PopoverOptions & {
    menu?: Partial<DropdownMenuOptions>,
    items?: DropdownMenuOptions['items'],
    onClickItem?: DropdownMenuOptions['onClickItem'],
};
