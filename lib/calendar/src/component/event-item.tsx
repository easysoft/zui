import {RenderableProps, Attributes} from 'preact';
import type {CalendarEvent, CalendarSidebarProps, EventItemProps} from '../types';
import {HElement, VNode} from '@zui/core';
import '../i18n';

export class EventItem<P extends EventItemProps = EventItemProps, S = {}> extends HElement<P, S> {
    render(props: RenderableProps<P>): VNode<Attributes> {
        // const {calendarEventGroups, eventSetMap} = this.props;
        const {calendarEvent} = this.props;
        return (<div className='calendar-event'>
            <div className='calendar-event-title'>{}</div>
            <div className='event'>{}</div>
            {calendarEvent?.map((event: CalendarEvent, index) => {
                return (<div key={index}>{event.description}</div>);
            })}
        </div>);
    }
}  