import type {ButtonProps} from '@zui/button';
import type {Item} from '@zui/common-list';
import type {DropdownButtonOptions} from '@zui/dropdown';

export type BtnGroupItem = (ButtonProps | DropdownButtonOptions) & Item;
