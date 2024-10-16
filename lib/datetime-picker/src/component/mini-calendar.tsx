import {Component, ComponentChild} from 'preact';
import {TIME_DAY, formatDate, DateLike, isSameMonth, isSameDay, createDate} from '@zui/helpers';
import {classes, i18n, $} from '@zui/core';
import {MiniCalendarProps} from '../types';
import '../i18n';

type CalenderInfo = {
    days: number;
    startTime: number;
    firstDay: number;
};

const getCalendarInfo = (year: number, month: number, weekStart = 0): CalenderInfo => {
    const firstDay = new Date(year, month - 1, 1);
    const firstDayOfWeek = firstDay.getDay();
    const startTime = firstDay.getTime() - ((7 + firstDayOfWeek - weekStart) % 7) * TIME_DAY;
    return {
        days: 7 * 5,
        startTime,
        firstDay: firstDay.getTime(),
    };
};

const createDateSet = (dates: DateLike | DateLike[], dateFormat: string): Set<string> => new Set((Array.isArray(dates) ? dates : [dates]).map((item) => formatDate(item, dateFormat)));

export class MiniCalendar extends Component<MiniCalendarProps> {
    _handleClickDate = (event: MouseEvent) => {
        const {onClickDate} = this.props;
        if (!onClickDate) {
            return;
        }
        const date = $(event.target as HTMLElement).closest('.mini-calendar-day').dataset('date');
        if (date) {
            onClickDate(date as string);
        }
    };

    render(props: MiniCalendarProps) {
        const now = new Date();
        const {
            weekStart = 1,
            weekNames = i18n.getLang('weekNames'),
            monthNames = i18n.getLang('monthNames'),
            year = now.getFullYear(),
            month = (now.getMonth() + 1),
            highlights = [],
            selections = [],
            maxDate,
            minDate,
            isAllowDate,
        } = props;
        const weekNamesView: ComponentChild[] = [];
        const btnClass = 'btn ghost square rounded-full';
        for (let i = 0; i < 7; i++) {
            const weekIndex = (weekStart + i) % 7;
            weekNamesView.push(<div className={classes('col mini-calendar-day', {'is-weekend': weekIndex === 0 || weekIndex === 6})} key={i}><div>{weekNames ? weekNames[weekIndex] : weekIndex}</div></div>);
        }
        const {startTime, days, firstDay} = getCalendarInfo(year, month, weekStart);
        const endTime = firstDay + (days * TIME_DAY);
        let time = startTime;
        const rows: ComponentChild[] = [];
        const dateFormat = 'yyyy-MM-dd';
        const highlightSet = createDateSet(highlights, dateFormat);
        const selectionSet = createDateSet(selections, dateFormat);
        const maxDateTime = (maxDate ? createDate(maxDate) : null)?.getTime() ?? Number.MAX_SAFE_INTEGER;
        const minDateTime = (minDate ? createDate(minDate) : null)?.getTime() ?? 0;
        while (time <= endTime) {
            const rowDays: ComponentChild[] = [];
            for (let i = 0; i < 7; i++) {
                const day = new Date(time);
                let allowInfo = isAllowDate?.(day) ?? true;
                if (typeof allowInfo === 'boolean') {
                    allowInfo = {allow: allowInfo};
                }
                const date = day.getDate();
                const dateStr = formatDate(day, dateFormat);
                const weekDay = day.getDay();
                const isInMonth = isSameMonth(day, firstDay);
                const className = classes('col mini-calendar-day', {
                    active: highlightSet.has(dateStr),
                    selected: selectionSet.has(dateStr),
                    'is-first': date === 1,
                    'is-in-month': isInMonth,
                    'is-out-month': !isInMonth,
                    'is-today': isSameDay(day, now),
                    'is-weekend': weekDay === 0 || weekDay === 6,
                    disabled: !allowInfo.allow || ((time > maxDateTime || time < minDateTime) && !isSameDay(day, maxDateTime) && !isSameDay(day, minDateTime)),
                });
                rowDays.push(
                    <div className={className} key={dateStr} data-date={dateStr}>
                        <button type="button" className={btnClass} onClick={this._handleClickDate} title={allowInfo.hint}>{(date === 1 && monthNames) ? monthNames[day.getMonth()] : day.getDate()}</button>
                    </div>,
                );
                time += TIME_DAY;
            }
            rows.push(<div className="row" key={time}>{rowDays}</div>);
        }
        return (
            <div className="mini-calendar">
                <div className="row">
                    {weekNamesView}
                </div>
                {rows}
            </div>
        );
    }
}
