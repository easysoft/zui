import type {ClassNameLike, CustomContentType, HElementProps} from '@zui/core';
import {CalendarEvent, CalendarEventGroup} from './calendar-event-props';
import {DraggableState} from '@zui/dnd/src/types';
import {Draggable} from '@zui/dnd/src/vanilla';
export interface CalendarProps extends HElementProps {
    date: Date;
    eventSetMap?: Map<string, CalendarEvent[]>;
    calendarEventMap?: Map<string, CalendarEvent>;
    calendarEventGroupMap?: Map<string, CalendarEventGroup>;
    calendarEvents?: CalendarEvent[];
    calendarEventGroups?: CalendarEventGroup[];
    mode?: 'day' | 'week' | 'year';
    dragEvent?: Draggable;
    showCalendarGroup?: boolean;
    shrinkFreeWeekend?: boolean;
    onDateClick?: (date: Date) => void;
    onDragChange?:( newState: DraggableState, oldState: DraggableState) => void;
    onEventClick?: (e: CalendarEvent) => void;
    maxVisibleEvents?: number;
}