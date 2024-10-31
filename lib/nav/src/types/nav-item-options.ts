import type {ListitemProps} from '@zui/list';
import type {Item} from '@zui/common-list';
import type {DropdownButtonOptions} from '@zui/dropdown';
import type {BtnGroupOptions} from '@zui/btn-group';

export type NavLinkOptions = ListitemProps;

export type NavDropdownOptions = DropdownButtonOptions & Item;

export type NavDividerOptions = {type: 'divider'} & Item;

export type NavSpaceOptions = {type: 'space'} & Item;

export type NavBtnGroupOptions = {type: 'btn-group'} & BtnGroupOptions & Item;

export type NavItemOptions = NavLinkOptions | NavDropdownOptions | NavDividerOptions | NavSpaceOptions | NavBtnGroupOptions;
