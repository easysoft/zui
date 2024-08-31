import {Draggable} from '@zui/dnd/src/vanilla';
import {CalendarEvent} from './calendar-event-props';
export interface CalendarState {
    date: Date;
    showCalendarGroup: boolean;
    eventSetMap?: Map<string, CalendarEvent[]>;
}

export interface CalendarContentState {
    isExtended: boolean;
    dateList:{date:Date} [][];
    eventMap: Map<string, CalendarEvent[]>;
    eventSetMap?: Map<string, CalendarEvent[]>;
    dragEvent?: Draggable;
}

export interface EventState {
    date: Date;
}