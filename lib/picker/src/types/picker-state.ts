import type {PickState} from '@zui/pick';
import type {PickerItemBasic, PickerItemOptions} from './picker-item-options';

export interface PickerState extends PickState {
    loading: boolean;
    items: PickerItemOptions[];
    selections: PickerItemBasic[];
    search: string;
    hoverItem?: string;
}
