import type {Item} from '@zui/list';
import type {DropdownButtonOptions} from '@zui/dropdown';

export interface BtnGroupDropdownProps extends Item, Omit<DropdownButtonOptions, 'type'> {
}
