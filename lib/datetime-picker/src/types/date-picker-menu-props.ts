import type {DateLike} from '@zui/helpers/src/date-helper';
import type {ListitemProps} from '@zui/list';
import type {NavOptions} from '@zui/nav';
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
    menu?: ListitemProps[] | NavOptions;
    actions?: ToolbarItemOptions[] | ToolbarOptions;
    minDate?: DateLike | ((date?: Date) => DateLike);
    maxDate?: DateLike | ((date?: Date) => DateLike);
};
