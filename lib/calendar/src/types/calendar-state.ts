import {Draggable} from '@zui/dnd/src/vanilla';
import {CalendarEvent, CalendarEventGroup} from './calendar-event-props';
export interface CalendarState {
    date: Date;
    showCalendarGroup: boolean;
    eventSetMap: Map<string, CalendarEvent[]>;
    calendarEventMap?:Map<string, CalendarEvent>;
    calendarGroupMap?:Map<string, CalendarEventGroup>;
}

export interface CalendarContentState {
    isExtended: boolean;
    dateList:{date:Date} [][];
    calendarEventMap?: Map<string, CalendarEvent>;
    eventSetMap?: Map<string, CalendarEvent[]>;
    eventMap:Map<string, CalendarEvent[]>;
    dragEvent?: Draggable;
}

export interface EventState {
    date: Date;
}