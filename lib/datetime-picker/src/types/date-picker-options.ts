import type {IconType} from '@zui/core';
import type {PickOptions} from '@zui/pick';
import type {NavSetting} from '@zui/nav';
import type {ToolbarSetting} from '@zui/toolbar';
import type {DateLike} from '@zui/helpers/src/date-helper';

export interface DatePickerOptions extends PickOptions {
    required?: boolean;
    readonly?: boolean;
    placeholder?: string;
    format?: string | ((date: Date) => string);
    display?: (value: string, date: Date | undefined | null) => string;
    icon?: IconType | boolean;
    weekNames?: string[];
    monthNames?: string[];
    yearText?: string;
    todayText?: string;
    clearText?: string;
    weekStart?: number;
    minDate?: DateLike | ((value?: string) => DateLike);
    maxDate?: DateLike | ((value?: string) => DateLike);
    isDateAllowed?: (date: Date) => boolean;
    menu?: NavSetting;
    actions?: ToolbarSetting;
    allowInvalid?: boolean;
    onInvalid?: (value: string) => void | string;
}
