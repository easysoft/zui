import type {HElementProps} from '@zui/core';
export interface CalendarEvent {
    id:string;
    title: string;
    calendarEventGroup: string;
    date: Date;
    color?: string;
    startDate?: Date;
    endDate?: Date;
    description?: string;
}

export interface  EventItemProps extends HElementProps {
    calendarEvent?: CalendarEvent[];
    isExtended?: boolean;    
}

export interface CalendarEventProps extends HElementProps  {
    color?: string;
    calendarEvents?: CalendarEvent[];
    eventSetMap?:Map<string, CalendarEvent[]>;
    onEventClick?: (e: CalendarEvent) => void;
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