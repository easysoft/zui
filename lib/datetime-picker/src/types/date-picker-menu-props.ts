import type {DateLike} from '@zui/helpers/src/date-helper';
import type {NavItemOptions, NavOptions} from '@zui/nav';
import type {ToolbarItemOptions, ToolbarOptions} from '@zui/toolbar';

export type DatePickerMenuProps = {
    onChange?: (date: string) => void;
    date?: string;
    weekNames?: string[];
    monthNames?: string[];
    yearText?: string;
    todayText?: string;
    clearText?: string;
    weekStart?: number;
    menu?: NavItemOptions[] | NavOptions;
    actions?: ToolbarItemOptions[] | ToolbarOptions;
    minDate?: DateLike;
    maxDate?: DateLike;
};
