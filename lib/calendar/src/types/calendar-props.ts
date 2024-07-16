import type {ClassNameLike, CustomContentType, HElementProps} from '@zui/core';
import {CalendarEvent, CalendarEventSet} from './calendar-event-props';
export interface CalendarProps extends HElementProps {
    header?: CustomContentType;
    headerClass?: ClassNameLike;
    year?: number;
    month?: number;
    events?: CalendarEvent[];
    calendarEventSet?: CalendarEventSet[];
    today?: Date;
    locale?: 'zh-CN' | 'zh-TW' | 'en';
    onDateClick?: (date: Date) => void;
    onEventClick?: (event: CalendarEvent) => void;
    onEventDrop?: (event: CalendarEvent, newStartDate: Date, newEndDate: Date) => void;
    maxVisibleEvents?: number;
}