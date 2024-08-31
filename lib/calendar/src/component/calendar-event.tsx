import type {CalendarEventProps, CalendarEvent} from '../types';
import {HElement} from '@zui/core';
import type {Attributes, RenderableProps, VNode} from 'preact';
import {getUniqueCode} from '@zui/helpers/src/string-code';
import {createRef} from 'preact';

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
        const maxHeight = 310;
        const {calendarEvents, isExtended, maxVisibleEvents} = this.props;
        if (this.calendarContentRef.current && isExtended  && calendarEvents && calendarEvents.length < 10) {
            // 假设每个事件占用 32px 高度
            const eventHeight = 20;
            const totalHeight = 110 + (calendarEvents.length - 4) * eventHeight;
            this.calendarContentRef.current.style.height = `${totalHeight}px`;
        } else if (this.calendarContentRef.current && !isExtended && maxVisibleEvents) {
            this.calendarContentRef.current.style.height = '110px';
        } else if (this.calendarContentRef.current && !isExtended && calendarEvents && calendarEvents.length > 10) {
            this.calendarContentRef.current.style.height = `${maxHeight}px`;
        }
        if (this.calendarContentRef.current && (!calendarEvents || calendarEvents.length < 4)) {
            this.calendarContentRef.current.style.height = '110px';
        }
    }

    getColor(event: CalendarEvent) {
        const {eventSetMap, calendarEventGroups} = this.props;
        if (eventSetMap && eventSetMap.has(event.calendarEventGroup)) {
            let color  = '';
            calendarEventGroups?.forEach(element => {
                if (element.id == event.calendarEventGroup) {
                    color = element.color || '';
                }
            });
            return color;
        } else {
            const hueDistance = 43;
            const saturation = 0.4;
            const lightness = 0.6;
            const colorCode = event?.calendarEventGroup ?? event?.calendarEventGroup.toString() ?? event.description;
            const hue = (typeof colorCode === 'number' ? colorCode : getUniqueCode(colorCode)) * hueDistance % 360;
            const background = `hsl(${hue},${saturation * 100}%,${lightness * 100}%)`;
            return background;
        }
    }

    render(props: RenderableProps<P>): VNode<Attributes> {
        let {calendarEvents} = props;        
        const {maxVisibleEvents, isExtended, onEventClick} = props;
        if (maxVisibleEvents && !isExtended && calendarEvents && calendarEvents?.length > maxVisibleEvents) {
            calendarEvents = calendarEvents.slice(0, maxVisibleEvents);
        }
        return (<div ref={this.calendarContentRef} class="calendar-event">
            {
                calendarEvents?.map((event, index) => {
                    return <div style={{backgroundColor: this.getColor(event)}} onClick = {() =>onEventClick && onEventClick(event)} data-index={index}  data-date ={new Date(event.date)}  draggable={true} class="calendar-event-item" key={index}><div class="calendar-event-item-time">{event.date.getHours() + ':' + event.date.getMinutes()}</div><div>{event.description}</div></div>;
                })}
        </div>);
    }   
}

