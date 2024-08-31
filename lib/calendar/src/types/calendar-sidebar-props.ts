import type {HElementProps} from '@zui/core';
import type {CalendarEvent} from './calendar-event-props';
import type {CalendarEventGroup} from './calendar-event-props';

export interface CalendarSidebarProps extends HElementProps {
    'showCalendarGroup'?: boolean;
    onShowCalendarGroupChange?: () => void;
    calendarEventGroups?: CalendarEventGroup[];
    eventSetMap?:Map<string, CalendarEvent[]>;
    calendarEvents?: CalendarEvent[];
}