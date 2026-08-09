import {Component, ComponentChild} from 'preact';
import {classes, i18n} from '@zui/core';
import {createDate, formatDate, isSameDay, isSameMonth} from '@zui/helpers';
import '@zui/css-icons';
import type {CalendarCategory, CalendarEvent, CalendarMonthViewProps} from '../types';
import {getMonthViewInfo} from '../helpers';
import {CalendarEventList} from './calendar-event-list';

/**
 * 日历头部的组件
 */
export class CalendarMonthView extends Component<CalendarMonthViewProps> {
    protected _renderHeader(weekStart: number) {
        const weekNames = i18n.getLang('weekNamesFull') as string[];
        const weekNamesView: ComponentChild[] = [];
        for (let i = 0; i < 7; i++) {
            const weekIndex = (weekStart + i) % 7;
            weekNamesView.push(
                <div
                    className={classes('calendar-month-view-col calendar-month-view-header-col', {'is-weekend': weekIndex === 0 || weekIndex === 6})}
                    key={i}
                >
                    <div className="calendar-month-view-week-name">{weekNames ? weekNames[weekIndex] : weekIndex}</div>
                </div>,
            );
        }
        return (
            <div className="calendar-month-view-row calendar-month-view-header">
                {weekNamesView}
            </div>
        );
    }

    protected _renderDay(day: Date, eventsMap: Map<string, CalendarEvent[]>, categoriesMap: Map<string, CalendarCategory>, firstDay: number, today: Date, dateFormat: string | ((date: Date) => string), monthNames: string[]) {
        const date = day.getDate();
        const dateStr = formatDate(day, dateFormat);
        const dayEvents = eventsMap.get(dateStr) || [];
        const weekDay = day.getDay();
        const isInMonth = isSameMonth(day, firstDay);
        const className = classes('calendar-month-view-col calendar-month-view-day', {
            'is-first': date === 1,
            'is-in-month': isInMonth,
            'is-out-month': !isInMonth,
            'is-today': isSameDay(day, today),
            'is-weekend': weekDay === 0 || weekDay === 6,
        });
        return (
            <div className={className} key={dateStr} z-date={dateStr} zui-command={`.~clickDay/${dateStr}/$.event`}>
                <div className="calendar-month-view-day-head" title={dateStr}>
                    {(date === 1 && monthNames) ? <span className="calendar-month-view-month-name">{monthNames[day.getMonth()]}</span> : null}
                    <span className="calendar-month-view-day-number">{day.getDate()}</span>
                </div>
                <CalendarEventList
                    className="calendar-month-view-day-events"
                    events={dayEvents}
                    categoriesMap={categoriesMap}
                    maxEventCount={this.props.maxEventCount}
                    eventRender={this.props.eventRender}
                />
            </div>
        );
    }

    protected _renderRows(year: number, month: number, weekStart: number, props: CalendarMonthViewProps) {
        const {dateFormat = 'yyyy-MM-dd', events = [], categories = []} = props;
        const {startDate, rows: rowCount, firstDay} = getMonthViewInfo(year, month, weekStart);
        const rows: ComponentChild[] = [];
        const monthNames = i18n.getLang('monthNames') as string[];
        const today = new Date();

        const eventsMap = new Map<string, CalendarEvent[]>();
        for (const event of events) {
            const key = formatDate(event.start, dateFormat);
            eventsMap.set(key, [...(eventsMap.get(key) || []), event]);
        }
        const categoriesMap = new Map<string, CalendarCategory>();
        for (const category of categories) {
            categoriesMap.set(category.id, category);
        }

        const calendarDate = new Date(startDate);
        for (let row = 0; row < rowCount; row++) {
            const rowDays: ComponentChild[] = [];
            for (let i = 0; i < 7; i++) {
                rowDays.push(this._renderDay(new Date(calendarDate), eventsMap, categoriesMap, firstDay, today, dateFormat, monthNames));
                calendarDate.setDate(calendarDate.getDate() + 1);
            }
            rows.push(<div className="calendar-month-view-row calendar-month-view-week" key={row}>{rowDays}</div>);
        }
        return rows;
    }

    render(props: CalendarMonthViewProps) {
        const {
            weekStart = 1,
            date,
        } = props;
        const current = createDate(date, true);
        const year = current.getFullYear();
        const month = (current.getMonth() + 1);

        return (
            <div className="calendar-view calendar-month-view" key={`${year}-${month}`}>
                {this._renderHeader(weekStart)}
                {this._renderRows(year, month, weekStart, props)}
            </div>
        );
    }
}
