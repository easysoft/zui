import type {HElementProps} from '@zui/core';
export interface CalendarEvent {
    title: string;
    calendarEventGroup: string;
    date: Date;
    color?: string;
    startDate?: Date;
    endDate?: Date;
    description?: string;
}

export interface CalendarEventProps extends HElementProps  {
    color?: string;
    calendarEvents?: CalendarEvent[];
    eventSetMap?:Map<string, CalendarEvent[]>;
    onEventClick?: () => void;
    calendarEventGroups?: CalendarEventGroup[];
    isExtended?: boolean;
    maxVisibleEvents?: number;
}
//事件集
export interface CalendarEventGroup {
    id: string;
    title?: string;
    color?: string;
}