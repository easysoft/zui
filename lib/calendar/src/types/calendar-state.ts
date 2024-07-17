import {CalendarEvent} from './calendar-event-props';

export interface CalendarState {
    month: number;
    year: number;
    day: number;
}

export interface CalendarContentState {
    dateList:{month: number, day: number, events: CalendarEvent[]} [][];
}