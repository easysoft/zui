import {ContextMenuOptions} from '@zui/contextmenu/src/types/contextmenu-options';

export type PickerOptions = ContextMenuOptions & {
    multiple?: boolean,
    showSearch?: boolean,
    placeholder?: string,
    disabled?: boolean,
    clearable?: boolean,
    items?: boolean,
    autoSelectFirst?: boolean,
    dropWidth?: string,
    minDropWidth?: string,
    maxDropWidth?: string,
    maxDropHeight?: number,
};
 