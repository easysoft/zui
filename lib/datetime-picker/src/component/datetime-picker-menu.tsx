import {Component} from 'preact';
import {DatePickerMenuProps, TimePickerMenuProps} from '../types';
import {DatePickerMenu} from './date-picker-menu';
import {TimePickerMenu} from './time-picker-menu';

type DatetimePickerMenuProps = {
    date: DatePickerMenuProps;
    time: TimePickerMenuProps;
};

export class DatetimePickerMenu extends Component<DatetimePickerMenuProps> {
    render(props: DatetimePickerMenuProps) {
        const {date, time} = props;
        return (
            <div className="datetime-picker-menu row">
                <DatePickerMenu {...date} />
                <div className="divider" />
                <TimePickerMenu {...time} />
            </div>
        );
    }
}
