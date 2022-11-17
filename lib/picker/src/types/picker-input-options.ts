import {DropdownTriggerOptions} from '@zui/dropdown/src/types/dropdown-trigger-options';

export interface PickerInputOptions extends DropdownTriggerOptions {
    children?: DropdownTriggerOptions['children'];
}