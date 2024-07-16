import type {ClassNameLike, CustomContentType, HElementProps} from '@zui/core';
import {CalendarEvent, CalendarEventSet} from './calendar-event-props';
export interface CalendarProps extends HElementProps {
    header?: CustomContentType;
    headerClass?: ClassNameLike;
    year: number;
    month: number;
    day:number;
    events?: CalendarEvent[];
    calendarEventSet?: CalendarEventSet[];
    locale?: 'zh-CN' | 'zh-TW' | 'en';
    onDateClick?: (date: Date) => void;
    onEventClick?: (event: CalendarEvent) => void;
    onEventDrop?: (event: CalendarEvent, oldDate: Date, newDate: Date) => void;
    maxVisibleEvents?: number;
}