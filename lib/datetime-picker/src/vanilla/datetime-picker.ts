import {ComponentFromReact} from '@zui/core';
import {DatetimePicker as DatetimePickerReact} from '../component/datetime-picker';
import {DatetimePickerOptions} from '../types/datetime-picker-options';

export class DatetimePicker extends ComponentFromReact<DatetimePickerOptions, DatetimePickerReact> {
    static NAME = 'DatetimePicker';

    static Component = DatetimePickerReact;
}

DatetimePicker.register();
