import type {CustomContentType} from '@zui/core';
import type {NestedItem} from '@zui/list';

export interface PickerItemBasic {
    value: string;
    keys?: string;
    text?: CustomContentType;
    disabled?: boolean;
}

export interface PickerItemOptions extends PickerItemBasic, NestedItem {
}
