import type {PickOptions} from '@zui/pick';
import type {MenuOptions} from '@zui/menu/src/types';
import type {PickerItemOptions} from './picker-item-options';
import type {PickerItemsFetcher} from './picker-items-fetcher';
import type {PickerState} from './picker-state';

export interface PickerOptions extends PickOptions<PickerState> {
    multiple?: boolean | number;
    placeholder?: string;
    required?: boolean;

    valueSplitter?: string;
    limitValueInList?: boolean;
    emptyValue?: string;
    menu?: MenuOptions;
    items: PickerItemOptions[] | PickerItemsFetcher;
    searchDelay?: number;
    search?: boolean | number;
    searchHint?: string;

    onDeselect?: (values: string | string[]) => false | void;
    onSelect?: (values: string | string[]) => false | void;
    onClear?: () => void;
}
