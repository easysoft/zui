import type {ClassNameLike, CustomContentType, HElementProps} from '@zui/core';
import {CalendarEvent, CalendarEventGroup} from './calendar-event-props';
export interface CalendarProps extends HElementProps {
    header?: CustomContentType;
    headerClass?: ClassNameLike;
    date: Date;
    calendarEvents?: CalendarEvent[];
    calendarEventGroups?: CalendarEventGroup[];
    locale?: 'zh-CN' | 'zh-TW' | 'en';
    onDateClick?: (date: Date) => void;
    onEventClick?: (e: MouseEvent) => void;
    onEventDragStart?: (event: DragEvent, dragElement: HTMLElement) => void;
    onEventDragEnd?: (event: DragEvent, dragElement: HTMLElement) => void;
    onEventDrop?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
    onEventDragEnter?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
    onEventDragLeave?: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => void;
    maxVisibleEvents?: number;
}