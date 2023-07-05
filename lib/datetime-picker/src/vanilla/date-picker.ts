import {ComponentFromReact} from '@zui/core';
import {DatePicker as DatePickerReact} from '../component';
import {DatePickerOptions} from '../types';

export class DatePicker extends ComponentFromReact<DatePickerOptions, DatePickerReact> {
    static NAME = 'DatePicker';

    static Component = DatePickerReact;
}
