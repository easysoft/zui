import {formatDate, createDate} from '@zui/helpers';
import '@zui/css-icons/src/icons/calendar.css';
import {DatePicker} from './date-picker';
import {TimePickerMenu} from './time-picker-menu';

import type {ComponentChildren} from 'preact';
import type {PickOptions, PickState} from '@zui/pick';
import type {DatetimePickerOptions} from '../types';

export class DatetimePicker extends DatePicker<DatetimePickerOptions> {
    static defaultProps = {
        ...DatePicker.defaultProps,
        popMaxHeight: 310,
        format: 'yyyy-MM-dd hh:mm',
        minuteStep: 5,
    } as Partial<PickOptions>;

    getTime(): [hour: number, minute: number] | null {
        const date = this.getDate();
        return date ? [date.getHours(), date.getMinutes()] : null;
    }

    _afterSetDate() {
        // Empty callback to prevent hide pop menu after set date value.
    }

    _handleSetDate = (date: string) => {
        const newDate = createDate(date);
        const oldDate = this.getDate() || new Date();
        newDate.setHours(oldDate.getHours());
        newDate.setMinutes(oldDate.getMinutes());
        this.setDate(formatDate(newDate, this.props.format));
    };

    _handleSetTime = (type: 'hour' | 'minute', value: number) => {
        const date = this.getDate() || new Date();
        if (type === 'hour') {
            date.setHours(value);
        } else {
            date.setMinutes(value);
        }
        this.setDate(formatDate(date, this.props.format));
    };

    _renderPop(props: DatetimePickerOptions, state: PickState): ComponentChildren {
        const [hour, minute] = this.getTime() || [];
        return (
            <div className="datetime-picker-menu row">
                {super._renderPop(props, state)}
                <div className="divider" />
                <TimePickerMenu
                    hour={hour}
                    minute={minute}
                    minuteStep={props.minuteStep}
                    onChange={this._handleSetTime}
                />
            </div>
        );
    }
}
