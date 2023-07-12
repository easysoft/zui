import {ContextMenuOptions} from '@zui/contextmenu/src/types/contextmenu-options';

export type DropdownOptions = ContextMenuOptions & {
    trigger?: 'click' | 'hover' | 'manual',
    arrow?: boolean | number,
    offset?: number,
};