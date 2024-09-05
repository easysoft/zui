import {Attributes} from 'preact';
import type {CalendarEvent, CalendarSidebarProps, CalendarEventGroup} from '../types';
import {HElement, VNode} from '@zui/core';
import {EventItem} from './event-item';
import '../i18n';
import {Draggable} from '@zui/dnd/src/vanilla';

export class CalendarSidebar<P extends CalendarSidebarProps = CalendarSidebarProps> extends HElement<P, {eventMap: Map<string, CalendarEvent[]>, dragEvent?: Draggable}> {
    constructor(props: P) {
        super(props);
        this.state = {
            eventMap: props.eventSetMap || new Map<string, CalendarEvent[]>(),
        };
    }

    componentDidMount(): void {
        const {calendarEventMap} = this.props;
        const eventMap = new Map(this.state.eventMap);
        const dragEventInstance = new Draggable('.sidebar', {target:'[target="true"]', onDrop: (event, dragElement, dropElement) => {
            if (dragElement && dropElement) {
                const dragEvent = calendarEventMap?.get(dragElement.dataset.event || '');
                const changeGroup = dropElement.dataset.group || '';
                const prevEvents = eventMap?.get(dragEvent?.calendarEventGroup || '') || [];
                const moveToEvents  = eventMap?.get(changeGroup) || [];
                if (dragEvent) {
                    dragEvent.calendarEventGroup = changeGroup;
                    moveToEvents.push(dragEvent);
                    const index = prevEvents.indexOf(dragEvent);
                    if (index !== -1) {
                        prevEvents.splice(index, 1);
                    }
                    if (prevEvents.length === 0) {
                        eventMap?.delete(dragEvent.id);
                    } else {
                        eventMap?.set(dragEvent.id, [...prevEvents]);   
                    }
                    eventMap?.set(changeGroup, [...moveToEvents]);
                    this.setState({eventMap: eventMap});
                }
            }
        }});
        this.setState({'dragEvent':dragEventInstance});
    }

    componentWillUnmount() {
        this.state.dragEvent?.destroy();
    }

    renderEvent(calendarEventGroups: Map<string, CalendarEventGroup>, eventSetMap: Map<string, CalendarEvent[]>, maxVisibleEvents?: number): VNode<Attributes> | VNode<Attributes>[] | null {
        const result = [];
        for (const [key, value] of calendarEventGroups.entries()) {
            if (value && key) {
                const events = eventSetMap?.get(key || '');
                result.push(<EventItem calendarEventGroup={value} calendarEvent={events || []} maxVisibleEvents={maxVisibleEvents} > </EventItem>);
            }
        }
        return result;
    }

    render(): VNode<Attributes> {
        const {calendarGroupMap, maxVisibleEvents} = this.props;
        return (<div className='sidebar'>{this.renderEvent(calendarGroupMap || new Map<string, CalendarEventGroup>(), this.state.eventMap || new Map<string, CalendarEvent[]>(), maxVisibleEvents)} </div>);
    }
}  