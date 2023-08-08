import {DatePickerOptions} from './date-picker-options';
import {TimePickerOptions} from './time-picker-options';

export type DatetimePickerOptions = Omit<DatePickerOptions & TimePickerOptions, 'format'> & {
    dateFormat: string;
    timeFormat: string;
    joiner: string;
};
