import type {ButtonProps} from '@zui/button';
import type {DropdownButtonOptions} from '@zui/dropdown';

export type BtnGroupItem = (ButtonProps | DropdownButtonOptions) & {key?: string | number};
