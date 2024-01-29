import type {IconType} from '@zui/core';
import type {PickOptions} from '@zui/pick';
import type {NavOptions} from '@zui/nav';
import type {Item} from '@zui/common-list';
import type {ToolbarItemOptions, ToolbarOptions} from '@zui/toolbar';
import type {DateLike} from '@zui/helpers/src/date-helper';

export interface DatePickerOptions extends PickOptions {
    required?: boolean;
    readonly?: boolean;
    placeholder?: string;
    format?: string;
    icon?: IconType | boolean;
    weekNames?: string[];
    monthNames?: string[];
    yearText?: string;
    todayText?: string;
    clearText?: string;
    weekStart?: number;
    minDate?: DateLike | ((date?: Date) => DateLike);
    maxDate?: DateLike | ((date?: Date) => DateLike);
    menu?: Item[] | NavOptions;
    actions?: ToolbarItemOptions[] | ToolbarOptions;
    onInvalid?: (value: string) => void;
}
