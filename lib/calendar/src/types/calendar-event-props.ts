import type {HElementProps} from '@zui/core';
export interface CalendarEvent {
    id:string;
    title: string;
    calendarEventGroup: string;
    date: Date;
    startDate?: Date;
    endDate?: Date;
    description?: string;
}

export interface  EventItemProps extends HElementProps {
    calendarEvent?: CalendarEvent[];
    calendarEventGroup?: CalendarEventGroup;
    maxVisibleEvents?: number;
}

export interface CalendarEventProps extends HElementProps  {
    date?: string;
    calendarEvents?: CalendarEvent[];
    eventSetMap?:Map<string, CalendarEvent[]>;
    onEventClick?: (e: CalendarEvent) => void;
    calendarEventGroups?: Map<string, CalendarEventGroup>;
    calendarEventGroup?: CalendarEventGroup;
    maxVisibleEvents?: number;
}
//事件集
export interface CalendarEventGroup {
    id: string;
    title?: string;
    color?: string;
}