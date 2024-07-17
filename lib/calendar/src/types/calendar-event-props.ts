import type {Item} from '@zui/common-list';
export interface CalendarEvent extends Item {
    id: string;
    title: string;
    calendarEventSet: string;
    month: number;
    year: number;
    hour?: number;
    startDate?: Date;
    endDate?: Date;
    description?: string;
}
//事件集
export interface CalendarEventSet extends Item {
    id?: string;
    title?: string;
    color?: string;
    CalendarEvent: CalendarEvent[];
}