import type {CalendarEvent, CalendarEventProps} from '../types';
import {Draggable} from '@zui/dnd';
import {HElement} from '@zui/core';
import type {Attributes, RenderableProps, VNode} from 'preact';
import {createRef, Component} from 'preact';

export class CalendarEventDom<P extends CalendarEventProps = CalendarEventProps, S = {}> extends HElement<P, S> {
    calendarContentRef: preact.RefObject<HTMLDivElement>;

    constructor(props: P) {
        super(props);
        this.calendarContentRef = createRef();
    }

    componentDidMount() {
        this.updateHeight();
    }

    componentDidUpdate(prevProps: P) {
        if (prevProps.isExtended !== this.props.isExtended || prevProps.calendarEvents !== this.props.calendarEvents) {
            this.updateHeight();
        }
    }

    updateHeight() {
        const {calendarEvents, isExtended, maxVisibleEvents} = this.props;
        if (this.calendarContentRef.current && isExtended  && calendarEvents) {
            // 假设每个事件占用 32px 高度
            const eventHeight = 20;
            const totalHeight = 110 + (calendarEvents.length - 4) * eventHeight;
            this.calendarContentRef.current.style.height = `${totalHeight}px`;
        } else if (this.calendarContentRef.current && !isExtended && maxVisibleEvents) {
            this.calendarContentRef.current.style.height = '110px';
        }
        if (this.calendarContentRef.current && (!calendarEvents || calendarEvents.length < 4)) {
            this.calendarContentRef.current.style.height = '110px';
        }
    }

    render(props: RenderableProps<P>): VNode<Attributes> {
        let {calendarEvents} = props;
        const {color, maxVisibleEvents, isExtended} = props;
        if (maxVisibleEvents && !isExtended && calendarEvents && calendarEvents?.length > maxVisibleEvents) {
            calendarEvents = calendarEvents.slice(0, maxVisibleEvents);
        }
        return (<div ref={this.calendarContentRef} class="calendar-event">
            {
                calendarEvents?.map((event, index) => {
                    return <div data-index={index}  data-date ={event.date.toISOString().split('T')[0]}  draggable={true} class="calendar-event-item" key={index} style={{background:`${color}`}}>{event.date.getHours() + ':' + event.date.getMinutes()}&nbsp;{event.description}</div>;
                })}
        </div>);
    }   
}

