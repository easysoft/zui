import type {MenuSetting} from '@zui/menu';
import type {ToolbarSetting} from '@zui/toolbar';

export type DatePickerMenuProps = {
    onChange?: (date: string) => void;
    date?: Date | null;
    weekNames?: string[];
    monthNames?: string[];
    yearText?: string;
    todayText?: string;
    clearText?: string;
    weekStart?: number;
    menu?: MenuSetting;
    actions?: ToolbarSetting;
    minDate?: Date | null;
    maxDate?: Date | null;
};
