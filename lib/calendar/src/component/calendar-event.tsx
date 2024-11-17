import type {CalendarEventProps, CalendarEvent} from '../types';
import {HElement} from '@zui/core';
import type {Attributes, VNode} from 'preact';
import {getUniqueCode} from '@zui/helpers/src/string-code';
import {createRef} from 'preact';

export class CalendarEventDom<P extends CalendarEventProps = CalendarEventProps> extends HElement<P, {isExtend: boolean}> {
    calendarContentRef: preact.RefObject<HTMLDivElement>;

    constructor(props: P) {
        super(props);
        this.state = {
            isExtend: false,
        };
        this.calendarContentRef = createRef();
    }

    componentDidMount() {
        this.updateHeight();
    }

    componentDidUpdate(prevProps: P, prevState: {isExtend: boolean}) {
        if (prevProps.calendarEvents !== this.props.calendarEvents || prevState.isExtend !== this.state.isExtend) {
            this.updateHeight();
        }
    }

    calculateHeight(calendarEvents: CalendarEvent[]) {
        let height = 0;
        calendarEvents?.map((event) => {
            height += Math.trunc((event.description?.length || 0) / 14) * 28;
        });
        return height;
    }

    updateHeight() {
        const maxHeight = 310;
        const {calendarEvents, maxVisibleEvents, calendarEventGroups} = this.props;
        const isExtended = this.state.isExtend;
        if (this.calendarContentRef.current && isExtended  && calendarEvents && calendarEvents.length < 10) {
            const totalHeight = this.calculateHeight(calendarEvents);
            this.calendarContentRef.current.style.height = `${totalHeight}px`;
        } else if (this.calendarContentRef.current && !isExtended && maxVisibleEvents) {
            this.calendarContentRef.current.style.height = '110px';
        } else if (this.calendarContentRef.current && !isExtended && calendarEvents && calendarEvents.length > 10) {
            this.calendarContentRef.current.style.height = `${maxHeight}px`;
        }
        if (this.calendarContentRef.current && (!calendarEvents || calendarEvents.length < 4)) {
            this.calendarContentRef.current.style.height = '110px';
        }
        if (!calendarEventGroups && this.calendarContentRef.current && calendarEvents && isExtended) {
            this.calendarContentRef.current.style.height = `${this.calculateHeight(calendarEvents) + 20}px`;
        } else if (!calendarEventGroups && this.calendarContentRef.current && calendarEvents && !isExtended && maxVisibleEvents) {
            this.calendarContentRef.current.style.height = `${this.calculateHeight(calendarEvents.slice(0, maxVisibleEvents)) + 25}px`;
        }
    }

    getColor(event: CalendarEvent) {
        const {eventSetMap, calendarEventGroups, calendarEventGroup} = this.props;
        if (eventSetMap && eventSetMap.has(event.calendarEventGroup) && (calendarEventGroups)) {
            let color  = '';
            color = calendarEventGroup?.color || '';
            if (!color) { 
                calendarEventGroups?.forEach(element => {
                    if (element.id == event.calendarEventGroup) {
                        color = element.color || '';
                    }
                });
            }
            return color;
        } else if (calendarEventGroup) {
            let color  = '';
            color = calendarEventGroup?.color || '';
            return color;
        } else  {
            const hueDistance = 43;
            const saturation = 0.4;
            const lightness = 0.6;
            const colorCode = event?.calendarEventGroup ?? event?.calendarEventGroup.toString() ?? event.description;
            const hue = (typeof colorCode === 'number' ? colorCode : getUniqueCode(colorCode)) * hueDistance % 360;
            const background = `hsl(${hue},${saturation * 100}%,${lightness * 100}%)`;
            return background;
        }
    }

    render(): VNode<Attributes> {
        let {calendarEvents} = this.props;        
        const {maxVisibleEvents, onEventClick} = this.props;
        const prevLen = calendarEvents?.length || '';
        if (maxVisibleEvents && !this.state.isExtend && calendarEvents && calendarEvents?.length > maxVisibleEvents) {
            calendarEvents = calendarEvents.slice(0, maxVisibleEvents);
        }
        return (<div ref={this.calendarContentRef} class="calendar-event">
            {
                calendarEvents?.map((event, index) => {
                    //判断它的groupId是否存在于eventSetMap中，如果存在，则取出对应的颜色，否则取出默认颜色
                    return <div style={{backgroundColor: this.getColor(event)}} onClick = {() =>onEventClick && onEventClick(event)} data-event={event.id} data-index={index}  data-date ={new Date(event.date)}  draggable={true} class="calendar-event-item" key={event.id}><span class="calendar-event-item-time">{event.date.getHours() + ':' + event.date.getMinutes()}</span><span>{event.description}</span></div>;
                })} 
            <div className={'calendar-body-bottom'}>
                {maxVisibleEvents && Number(prevLen) > maxVisibleEvents && (this.state.isExtend ? <span onClick={() => {this.setState({isExtend:false});}} ><span class="chevron-up"></span></span> : <span onClick={() => {this.setState({isExtend:true});}} ><span class="chevron-down"></span></span>)}</div>
        </div>);
    }   
}
