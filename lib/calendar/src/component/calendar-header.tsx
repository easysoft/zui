import {Attributes} from 'preact';
import type {CalendarHeaderProps} from '../types';
import {formatDate} from '@zui/helpers';
import {HElement, VNode} from '@zui/core';
import {Button} from '@zui/button/src/component';
import {i18n} from '@zui/core';
import '../i18n';

export class CalendarHeader<P extends CalendarHeaderProps = CalendarHeaderProps, S = {}> extends HElement<P, S> {
    render(props: CalendarHeaderProps): VNode<Attributes> {
        const {date, onMonthChange, onDateChange, onShowCalendarGroup} = props;
        const calendarSet = i18n.getLang('calendarSet');
        const today = i18n.getLang('today');
        const dateFormat = i18n.getLang('dateFormat');
        const formattedDate = formatDate(date, dateFormat);
        return (
            <div class="calendar-header">
                <div class="calendar-header-left">
                    <Button className = 'btn-front' onClick={() => onShowCalendarGroup()}>{calendarSet}</Button >              
                    <Button className = 'btn-front' onClick={() => onDateChange(new Date())}>{today}</Button > 
                    <span class = 'btn btn-left '><span class='chevron-left' onClick={() => onMonthChange?.('prev')}></span></span> 
                    <span class = 'btn btn-right '><span class='chevron-right' onClick={() => onMonthChange?.('next')}></span></span> </div>
                <div className="calendar-content">{formattedDate}</div></div>
        );
    }
}