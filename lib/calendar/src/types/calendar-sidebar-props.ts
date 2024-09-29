import type {HElementProps} from '@zui/core';
import type {CalendarEvent} from './calendar-event-props';
import type {CalendarEventGroup} from './calendar-event-props';

export interface CalendarSidebarProps extends HElementProps {
    onShowCalendarGroupChange?: () => void;
    calendarGroupMap?:Map<string, CalendarEventGroup>;
    eventSetMap?:Map<string, CalendarEvent[]>;
    maxVisibleEvents?: number;
    setCalendarGroupMap?: (eventSetMap: Map<string, CalendarEventGroup>) => void;
}