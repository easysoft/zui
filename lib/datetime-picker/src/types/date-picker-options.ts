import type {IconType} from '@zui/core';
import type {PickOptions} from '@zui/pick';
import type {NavItemOptions, NavOptions} from '@zui/nav';
import type {ToolbarItemOptions, ToolbarOptions} from '@zui/toolbar';
import type {DateLike} from '@zui/helpers/src/date-helper';

export interface DatePickerOptions extends PickOptions {
    required?: boolean;
    placeholder?: string;
    format?: string;
    icon?: IconType | boolean;
    weekNames?: string[];
    monthNames?: string[];
    yearText?: string;
    todayText?: string;
    clearText?: string;
    weekStart?: number;
    minDate?: DateLike;
    maxDate?: DateLike;
    menu?: NavItemOptions[] | NavOptions;
    actions?: ToolbarItemOptions[] | ToolbarOptions;
    onInvalid?: (value: string) => void;
}
