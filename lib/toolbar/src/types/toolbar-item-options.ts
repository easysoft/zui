import type {ButtonProps} from '@zui/button';
import type {Item} from '@zui/common-list';
import type {DropdownButtonOptions} from '@zui/dropdown';
import type {BtnGroupOptions} from '@zui/btn-group';

export type ToolbarBtnOptions = ButtonProps & Item;

export type ToolbarDropdownOptions = DropdownButtonOptions & Item;

export type ToolbarDividerOptions = {type: 'divider'} & Item;

export type ToolbarSpaceOptions = {type: 'space'} & Item;

export type ToolbarBtnGroupOptions = {type: 'btn-group'} & BtnGroupOptions & Item;

export type ToolbarItemOptions = ToolbarBtnOptions | ToolbarDropdownOptions | ToolbarDividerOptions | ToolbarSpaceOptions | ToolbarBtnGroupOptions;
