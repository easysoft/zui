import type {ClassNameLike, CustomContentType, HElementProps} from '@zui/core';
import {CalendarEvent, CalendarEventGroup} from './calendar-event-props';
export interface CalendarProps extends HElementProps {
    header?: CustomContentType;
    headerClass?: ClassNameLike;
    date: Date;
    calendarEvents?: CalendarEvent[];
    calendarEventGroups?: CalendarEventGroup[];
    locale?: 'zh-CN' | 'zh-TW' | 'en';
    onDateClick?: (date: Date) => void;
    onEventClick?: () => void;
    onEventDrop?: (event: CalendarEvent, oldDate: Date, newDate: Date) => void;
    maxVisibleEvents?: number;
}