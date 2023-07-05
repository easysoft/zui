import {ComponentFromReact} from '@zui/core';
import {TimePicker as TimePickerReact} from '../component';
import {TimePickerOptions} from '../types';

export class TimePicker extends ComponentFromReact<TimePickerOptions, TimePickerReact> {
    static NAME = 'TimePicker';

    static Component = TimePickerReact;
}
