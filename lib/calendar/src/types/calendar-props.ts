import type {ClassNameLike, CustomContentType, HElementProps} from '@zui/core';
import {CalendarEvent, CalendarEventGroup} from './calendar-event-props';
import {DraggableState} from '@zui/dnd/src/types';
export interface CalendarProps extends HElementProps {
    header?: CustomContentType;
    headerClass?: ClassNameLike;
    date: Date;
    calendarEvents?: CalendarEvent[];
    calendarEventGroups?: CalendarEventGroup[];
    mode?: 'day' | 'week' | 'year';
    shrinkFreeWeekend?: boolean;
    onDateClick?: (date: Date) => void;
    onDragChange?:( newState: DraggableState, oldState: DraggableState) => void;
    onEventClick?: (e: MouseEvent) => void;
    maxVisibleEvents?: number;
}