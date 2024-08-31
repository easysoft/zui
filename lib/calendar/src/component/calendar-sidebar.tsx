import {RenderableProps, Attributes} from 'preact';
import type {CalendarEvent, CalendarSidebarProps, CalendarEventGroup} from '../types';
import {HElement, VNode} from '@zui/core';
import {EventItem} from './event-item';
import '../i18n';

export class CalendarSidebar<P extends CalendarSidebarProps = CalendarSidebarProps, S = {}> extends HElement<P, S> {

    renderEvent(calendarEventGroups: CalendarEventGroup[], eventSetMap: Map<string, CalendarEvent[]> ) {
        return  calendarEventGroups.map((calendarEventGroup, index) => {
            if (calendarEventGroup) {
                const events = eventSetMap?.get(calendarEventGroup.id || '');
                return (<EventItem key={index} calendarEvent={events || []} ></EventItem>);
            }
        });
    }

    render(props: RenderableProps<P>): VNode<Attributes> {
        const {calendarEventGroups, eventSetMap} = this.props;
        return (<div className='sidebar'>{this.renderEvent(calendarEventGroups || [], eventSetMap || new Map<string, CalendarEvent[]>())} </div>);
    }
}  