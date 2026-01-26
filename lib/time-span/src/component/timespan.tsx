import {Component} from 'preact';
import {classes} from '@zui/core';
import {createDate, formatDate, isValidDate} from '@zui/helpers/src/date-helper';
import type {TimeSpanProps} from '../types';

export class TimeSpan extends Component<TimeSpanProps> {
    render() {
        const {time, format = 'yyyy-MM-dd hh:mm', invalidText, className, ...others} = this.props;
        const date = createDate(time);

        if (!isValidDate(date)) {
            return <span class={classes('time-span is-invalid', className)} {...others}>{invalidText ?? time}</span>;
        }

        const formattedTime = formatDate(date, format);
        return <span class={classes('time-span', className)} {...others}>{formattedTime}</span>;
    }
}
