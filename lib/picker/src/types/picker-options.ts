import type {PickOptions} from '@zui/pick';
import type {MenuOptions} from '@zui/menu/src/types';
import type {PickerState} from './picker-state';

export interface PickerOptions<S extends PickerState = PickerState> extends PickOptions<S> {
    multiple?: boolean | number;
    placeholder?: string;
    required?: boolean;

    valueSplitter?: string;
    emptyValue?: string;
    limitValueInList?: boolean;
    menu?: MenuOptions;
    checkbox?: MenuOptions['checkbox'];
    items: MenuOptions['items'];
    searchDelay?: number;
    search?: boolean | number;
    searchHint?: string;

    onDeselect?: (values: string | string[]) => false | void;
    onSelect?: (values: string | string[]) => false | void;
    onClear?: () => void;
}
