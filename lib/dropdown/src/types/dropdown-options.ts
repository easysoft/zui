import type {PopoverOptions} from '@zui/popover';
import type {DropdownMenuOptions} from './dropdown-menu-options';

export type DropdownOptions = PopoverOptions & {
    tree?: boolean;
    menu?: Partial<DropdownMenuOptions>,
    items?: DropdownMenuOptions['items'],
    relativeTarget?: DropdownMenuOptions['relativeTarget'],
    onClickItem?: DropdownMenuOptions['onClickItem'],
};
