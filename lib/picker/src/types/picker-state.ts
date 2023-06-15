import {PickerItemOptions} from './picker-item-options';

export type PickerState = {
    value?: string;
    open: boolean;
    loading: boolean;
    items: PickerItemOptions[];
    search: string,
};
