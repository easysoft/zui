import {IconType, ComponentChildren} from '@zui/core';
import {PickOptions} from '@zui/pick';
import type {ColorInputOptions} from './color-input-options';

export interface ColorPickerOptions extends PickOptions {
    required?: boolean;
    colors?: string | string[];
    custom?: boolean | ColorInputOptions;
    icon?: IconType;
    syncValue?: string;
    syncColor?: string;
    syncBackground?: string;
    syncBorder?: string;
    closeBtn?: boolean;
    heading?: ComponentChildren;
    hint?: string;
}
