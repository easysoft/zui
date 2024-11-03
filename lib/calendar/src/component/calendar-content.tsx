import {HElement} from '@zui/core';
import '@zui/label';
import {CalendarEventDom} from './calendar-event';
import {Draggable} from '@zui/dnd';

import type {CalendarProps,  CalendarEvent, CalendarContentState, EventState} from '../types';
import type {Attributes, VNode} from 'preact';
import {createRef} from 'preact';
import {i18n} from '@zui/core';
import '../i18n';

export class CalendarContent<P extends CalendarProps = CalendarProps> extends HElement<P, CalendarContentState> {

    dragEvent: Draggable | null = null;

    ref = createRef();

    constructor(props: P) {
        super(props);
        this.state = {'isExtended':false, 'dateList': this.generateCalendarPageByDate(props.date), 'eventMap': this.generateCalendarEvents(), 'eventSetMap': this.props.eventSetMap};
    }

    //判断周末是否需要收缩
    judgeWeekendShouldShrink() {
        let flag = false;
        for (let i = 0; i < 6; i++) {
            flag = flag || Boolean(this.formatDate(this.state.dateList[i][5].date));
            flag = flag || Boolean(this.formatDate(this.state.dateList[i][6].date));
        }
        return !flag;
    }

    formatDate(date: Date): string {
        return date.toLocaleDateString('en-CA'); // 'en-CA' locale uses YYYY-MM-DD format
    }

    componentWillUpdate(nextProps: Readonly<P>): void {
        if (nextProps.eventSetMap !== this.props.eventSetMap) {
            this.setState({'eventMap': this.generateCalendarEvents()});
        }
    }

    generateCalendarEvents() {
        const map = new Map<string, CalendarEvent[]>();
        this.props.calendarEventMap?.forEach((value) => {
            if (value.date !== undefined && this.props.calendarEventGroupMap?.get(value?.calendarEventGroup)?.checked) {
                const dateKey = this.formatDate(value.date); // 将日期转换为 'YYYY-MM-DD' 格式
                if (!map.has(dateKey)) {
                    map.set(dateKey, [value]);
                } else {
                    const currentEvents = map.get(dateKey);
                    if (currentEvents) {
                        map.set(dateKey, currentEvents.concat(value));
                    } else {
                        map.set(dateKey, [value]);
                    }
                }
            }
        });
        return map;
    }
    
    componentDidMount() {
        const {onDragChange} = this.props;
        this.dragEvent = new Draggable(this.ref.current, {           
            target:'[target="true"]',
            onChange(newState, oldState) {
                if (onDragChange) {
                    onDragChange(newState, oldState);
                }
            },
            onDrop: (event, dragElement, dropElement) => {
                console.log('onDrop', {event, dragElement, dropElement});
                if (dragElement && dropElement) { 
                    const prevDate = new Date( dragElement.dataset.date || '');
                    const moveToDate: Date = new Date( dropElement.dataset.date || '');
                    console.log(prevDate, moveToDate);
                    console.log('Date', this.formatDate(prevDate), this.formatDate(moveToDate));
                    const index: number = Number(dragElement.dataset.index);
                    const prevDateEvents = this.state.eventMap.get(this.formatDate(prevDate)) || [];
                    const moveToDateEvents =  this.state.eventMap.get(this.formatDate(moveToDate)) || [];
                    console.log('prevDateEvents', prevDateEvents, 'moveToDateEvents', moveToDateEvents);
                    if (prevDateEvents) {
                        const emptyAry: CalendarEvent[] = [];
                        const eventToMove = index !== undefined && index >= 0 && index < prevDateEvents.length ? [prevDateEvents[index]] : emptyAry;
                        console.log('eventToMove', eventToMove);
                        eventToMove[0].date = new Date(moveToDate.getFullYear(), moveToDate.getMonth(), moveToDate.getDate(), prevDate.getHours(), prevDate.getMinutes(), prevDate.getSeconds());
                        console.log('changeDate', eventToMove[0].date);
                        if (eventToMove && Array.isArray(moveToDateEvents)) {
                            moveToDateEvents.push(...eventToMove);
                            console.log('moveToDateEvents', moveToDateEvents);
                            const newEventMap = new Map(this.state.eventMap);
                            newEventMap.set(this.formatDate(moveToDate), moveToDateEvents);
                            console.log('set', moveToDate?.toISOString().split('T')[0], moveToDateEvents);
                            console.log('newMap', newEventMap);
                            if (index !== undefined && index >= 0 && index < prevDateEvents.length) {
                                prevDateEvents.splice(index, 1);
                                if (prevDateEvents.length === 0) {
                                    newEventMap.delete(this.formatDate(prevDate));
                                } else {
                                    newEventMap.set(this.formatDate(prevDate), [...prevDateEvents]);
                                }
                            }
                            console.log(newEventMap);
                            this.setState({eventMap: newEventMap});
                        }
                    }
                }
            },
        });
    }

    componentDidUpdate(prevProps: P) {
        if (prevProps.date.getFullYear() !== this.props.date.getFullYear() || prevProps.date.getMonth() !== this.props.date.getMonth()  || prevProps.date.getDate() !== this.props.date.getDate()) {
            this.setState({'dateList':  this.generateCalendarPageByDate(this.props.date)});
        }
    }  
    
    componentWillUnmount() {
        this.dragEvent?.destroy();
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

    //返回对应的样式
    getStyle(index: number, isShrinkWeekend?: boolean) {
        if (isShrinkWeekend && (index === 5 || index === 6)) {
            return {width:'10%'};
        }
        if (isShrinkWeekend) {
            return {width:'16%'};
        }
    }

    render(): VNode<Attributes> {
        const headerList: string[] = i18n.getLang('weekNames') || [];
        const monthFormat = i18n.getLang('monthFormat');
        const {shrinkFreeWeekend, maxVisibleEvents, onEventClick} = this.props;
        // 处理事件map
        const tdStyle = {position:'relative', verticalAlign:'top'};
        const isShrinkWeekend = shrinkFreeWeekend && this.judgeWeekendShouldShrink();

        return (<div className="calendar">
            <table className="calendar-table">
                <thead className="calendar-content-header">
                    <tr >
                        {
                            headerList?.map((item, index) => {
                                return <th key={index} className="calendar-header-part" style={this.getStyle(index, isShrinkWeekend)} >{item}</th>;
                            })
                        }
                    </tr>
                </thead>
                <tbody id="calendar-body" ref={this.ref}>
                    {this.state.dateList?.map((line) => {
                        return (<tr>{   line.map((item, index) => {
                            return <td onClick={()=>{}}  style={{...tdStyle, ...this.getStyle(index, isShrinkWeekend)}} data-date = {new Date(item.date)}  key={`${item.date.getMonth() + 1}-${item.date.getDate()}`} target='true' className={'calendar-td' + ' ' + (this.props.date.getFullYear() === item.date.getFullYear() && item.date.getMonth() + 1 === this.props.date.getMonth() + 1 ? 'is-current-month' : '') + (new Date().getFullYear() === item.date.getFullYear() && item.date.getMonth() + 1 === new Date().getMonth() + 1 && item.date.getDate() === new Date().getDate() ? '-today' : '')} >
                                <div className={'calendar-body-part'}>
                                    <div className='calendar-body-header'>
                                        {item.date.getDate() == 1 ? <label className='label gray calendar-body-header-month'>{item.date.getMonth() + 1}{monthFormat}</label> : ''}
                                        <div className='calendar-body-header-day'>{item.date.getDate()}</div>
                                    </div>
                                    {this.state.eventMap ? (
                                        <CalendarEventDom
                                            maxVisibleEvents={maxVisibleEvents}
                                            eventSetMap = {this.state.eventSetMap}
                                            onEventClick={onEventClick}
                                            calendarEventGroups = {this.props.calendarEventGroupMap}
                                            calendarEvents={this.state.eventMap.get(this.formatDate(item.date)) || []}
                                            date={this.formatDate(item.date)}
                                        ></CalendarEventDom>) : null}
                                </div></td>;
                        })}
                        </tr>);
                    })}
                </tbody>
            </table></div>);
    }
}