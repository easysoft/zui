import {HElement} from '@zui/core';
import '@zui/label';
import {CalendarEventDom} from './calendar-event';
import {Draggable} from '@zui/dnd';

import type {CalendarProps,  CalendarEvent, CalendarContentState, EventState} from '../types';
import {getUniqueCode} from '@zui/helpers/src/string-code';
import type {Attributes, RenderableProps, VNode} from 'preact';

export class CalendarContent<P extends CalendarProps = CalendarProps> extends HElement<P, CalendarContentState> {
    constructor(props: P) {
        super(props);
        this.state = {'isExtended':false, 'dateList': this.generateCalendarPageByDate(props.date), 'eventMap': this.generateCalendarEvents(), 'eventSetMap': this.generateCalendarSetEvents()};
    }

    // 获取年、月、日
    getYearMonthDay(date:Date) {
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1, // 月份从0开始，需要加1
            day: date.getDate(),
        };
    }

    generateCalendarEvents() {
        const map = new Map<string, CalendarEvent[]>();
        this.props.calendarEvents?.forEach((item) => {
            if (item.date !== undefined) {
                const dateKey = new Date(item.date).toISOString().split('T')[0]; // 将日期转换为 'YYYY-MM-DD' 格式
                if (!map.has(dateKey)) {
                    map.set(dateKey, [item]);
                } else {
                    const currentEvents = map.get(dateKey);
                    if (currentEvents) {
                        map.set(dateKey, currentEvents.concat(item));
                    } else {
                        map.set(dateKey, [item]);
                    }
                }
            }
        });
        return map;
    }

    componentDidMount() {
        new Draggable('#calendar-body', {
            target:'[target="true"]',
            onDragStart: (event, dragElement) => {
                console.log('onDragStart', event, dragElement);
            },
            onDragEnd: (event, dragElement) => {
                console.log('onDragEnd', {event, dragElement});
            },
            onDragEnter: (event, dragElement, dropElement) => {
                console.log('onDragEnter', {event, dragElement, dropElement});
            },
            onDragLeave: (event, dragElement, dropElement) => {
                console.log('onDragLeave', {event, dragElement, dropElement});
            },
            onDrop: (event, dragElement, dropElement) => {
                console.log('onDrop', {event, dragElement, dropElement});
                if (dragElement && dropElement) {
                    const prevDate = dragElement.dataset.date;
                    const changeDate:string = dropElement.dataset.date || '';
                    const index: number = Number(dragElement.dataset.index);
                    const prevDateEvents = prevDate && this.state.eventMap.get(prevDate);
                    const currentDateEvents = this.state.eventMap.get(changeDate) ? this.state.eventMap.get(changeDate) : [];
                    if (prevDateEvents) {
                        const emptyAry: CalendarEvent[] = [];
                        const eventToMove = index !== undefined && index >= 0 && index < prevDateEvents.length ? [prevDateEvents[index]] : emptyAry;
                        eventToMove[0].date = new Date(changeDate);
                        if (eventToMove && Array.isArray(currentDateEvents)) {
                            currentDateEvents.push(...eventToMove);
                            const newEventMap = new Map(this.state.eventMap);
                            newEventMap.set(changeDate, currentDateEvents);
                            if (index !== undefined && index >= 0 && index < prevDateEvents.length) {
                                prevDateEvents.splice(index, 1);
                                if (prevDateEvents.length === 0) {
                                    newEventMap.delete(prevDate);
                                } else {
                                    newEventMap.set(prevDate, [...prevDateEvents]);
                                }
                            }
                            console.log('newEventMap', newEventMap);   
                            this.setState({eventMap: newEventMap});
                        }
                    }
                }
            },
            onChange(newState, oldState) {
                console.log('onChange', {newState, oldState});
            },
        });
    }

    componentDidUpdate(prevProps: P) {
        if (prevProps.date.getFullYear() !== this.props.date.getFullYear() || prevProps.date.getMonth() !== this.props.date.getMonth()  || prevProps.date.getDate() !== this.props.date.getDate()) {
            this.setState({'dateList':  this.generateCalendarPageByDate(this.props.date)});
        }
    }  

    generateCalendarPageByDate(date: Date): EventState[][] {
        const year = date.getFullYear();
        const month = date.getMonth();
    
        // 获取该月第一天的日期对象
        const firstDayOfMonth = new Date(year, month, 1);
        let firstDayOfWeek = firstDayOfMonth.getDay() - 1;
        if (firstDayOfWeek === -1) {
            firstDayOfWeek = 6;
        }
    
        // 初始化日期格子
        const page: EventState[][] = [];
        const currentDate = new Date(firstDayOfMonth);
    
        // 填充前导空白天数
        let week: EventState[] = new Array(firstDayOfWeek).fill({date: null});
    
        // 填充该月的日期
        for (let i = 0; i < 6; i++) {
            for (let j = week.length; j < 7; j++) {
                week.push({date: new Date(currentDate)});
                currentDate.setDate(currentDate.getDate() + 1);
            }
            page.push(week);
            week = [];
        }
        const firstWeek = page[0];
    
        // 填充第一周的前导日期
        for (let i = firstDayOfWeek; i >= 0; i--) {
            const prevDate = new Date(firstDayOfMonth);
            prevDate.setDate(prevDate.getDate() - (firstDayOfWeek - i));
            firstWeek[i] = {date: prevDate};
        }

        return page;
    }

    //生成事件集与事件的对应关系
    generateCalendarSetEvents(): Map<string, CalendarEvent[]> {
        const map = new Map<string, CalendarEvent[]>();
        this.props.calendarEvents?.forEach((item) => {
            if (item.calendarEventGroup !== undefined) {
                this.props.calendarEventSet?.forEach(element => {
                    if (element.id === item.calendarEventGroup) {
                        map.set(element.id, map.get(element.id)?.concat(item) || [item]);
                    }
                });
            }
        });
        return map;
    }

    //生成事件自定义颜色
    getColor(event?: CalendarEvent) {
        if (this.state.eventSetMap && this.state.eventSetMap?.get(event?.calendarEventGroup || '' )) {
            this.props.calendarEventSet?.forEach(element => {
                if (element.id === event?.calendarEventGroup) {
                    return element.color;
                }
            });
        } else {
            const hueDistance = 43;
            const saturation = 0.4;
            const lightness = 0.6;
            const colorCode = event?.description ?? event?.date.toString() ?? '';
            const hue = (typeof colorCode === 'number' ? colorCode : getUniqueCode(colorCode)) * hueDistance % 360;
            const background = `hsl(${hue},${saturation * 100}%,${lightness * 100}%)`;
            return  background;
        }
    }

    render(props: RenderableProps<P>): VNode<Attributes> {
        const headerList = ['周一', '周二', '周三', '周四', '周 五', '周六', '周日'];
        const {maxVisibleEvents} = props;
        // 处理事件map
        const tdStyle = {position:'relative', verticalAlign:'top'};

        return (<div className="calendar">
            <table className="calendar-table">
                <thead className="calendar-content-header">
                    <tr >
                        {
                            headerList.map((item, index) => {
                                return <th key={index} className="calendar-header-part">{item}</th>;
                            })
                        }
                    </tr>
                </thead>
                <tbody id="calendar-body">
                    {this.state.dateList?.map((line) => {
                        return (<tr>{   line.map((item) => {
                            return <td style={tdStyle} data-date = {item.date.toISOString().split('T')[0]}  key={`${item.date.getMonth() + 1}-${item.date.getDate()}`} target='true' className={'calendar-td' + ' ' + (props.date.getFullYear() === item.date.getFullYear() && item.date.getMonth() + 1 === props.date.getMonth() + 1 ? 'active' : '') + (new Date().getFullYear() === item.date.getFullYear() && item.date.getMonth() + 1 === new Date().getMonth() + 1 && item.date.getDate() === new Date().getDate() ? '-today' : '')} >
                                <div className={'calendar-body-part'}>
                                    <div className='calendar-body-header'>
                                        {item.date.getDate() == 1 ? <label className='label gray calendar-body-header-month'>{item.date.getMonth() + 1}月</label> : ''}
                                        <div className='calendar-body-header-day'>{item.date.getDate()}</div>
                                    </div>
                                    {this.state.eventMap ? (
                                        <CalendarEventDom
                                            isExtended={this.state.isExtended}
                                            maxVisibleEvents={maxVisibleEvents}
                                            color={this.getColor(this.state.eventMap.get(item.date?.toISOString().split('T')[0])?.[0]) || ''}
                                            calendarEvents={this.state.eventMap.get(item.date.toISOString().split('T')[0]) || []}
                                        ></CalendarEventDom>) : null}
                                        
                                </div>
                                <div className={'calendar-body-bottom'}>{item.date && !this.state.isExtended && maxVisibleEvents && maxVisibleEvents < (this.state.eventMap.get(item.date.toISOString().split('T')[0]) ?.length || 0) && (<span class="calendar-body-bottom label ghost" onClick={() => {this.setState({'isExtended':true});}} >展开</span>)}{this.state.isExtended && maxVisibleEvents && maxVisibleEvents < (this.state.eventMap.get(item.date.toISOString().split('T')[0]) ?.length || 0) && (<span class="calendar-body-bottom label ghost" onClick={() => {this.setState({'isExtended':false});}} >收起</span>)}</div></td>;
                        })}
                        </tr>);
                    })}
                </tbody>
            </table></div>);
    }
}