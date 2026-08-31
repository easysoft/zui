import {IconType, ComponentChildren} from '@zui/core';
import {PickOptions} from '@zui/pick';

export interface ColorPickerOptions extends PickOptions {
    required?: boolean;
    colors?: string | string[];
    icon?: IconType;
    syncValue?: string;
    syncColor?: string;
    syncBackground?: string;
    syncBorder?: string;
    closeBtn?: boolean;
    heading?: ComponentChildren;
    hint?: string;
}
