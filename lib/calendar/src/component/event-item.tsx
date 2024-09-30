import {RenderableProps, Attributes} from 'preact';
import type {EventItemProps} from '../types';
import {CalendarEventDom} from './calendar-event';
import {HElement, VNode} from '@zui/core';
import '../i18n';

export class EventItem<P extends EventItemProps = EventItemProps> extends HElement<P, {isExtend:boolean}> {
    
    render(props: RenderableProps<P>): VNode<Attributes> {
        const {calendarEvent, calendarEventGroup, maxVisibleEvents} = props;
        return (<div className='calendar-eventGroup' target='true' data-group={calendarEventGroup?.id}>
            <div className='calendar-event-title'>{calendarEventGroup?.title}</div>
            <CalendarEventDom calendarEvents={calendarEvent} calendarEventGroup={calendarEventGroup} maxVisibleEvents={maxVisibleEvents}></CalendarEventDom>
        </div>);
    }
}   