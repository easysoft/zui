import type {Item} from '@zui/common-list';
export interface CalendarEvent extends Item {
    id: string;
    title: string;
    calendarEventSet: string;
    startDate?: Date;
    endDate?: Date;
    description?: string;
}
//事件集
export interface CalendarEventSet extends Item {
    id: string;
    title: string;
    color?: string;
}