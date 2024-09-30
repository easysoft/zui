import {HElement} from '@zui/core';
import {CalendarSidebar} from './calendar-sidebar';
import {CalendarHeader} from './calendar-header';
import {CalendarContent} from './calendar-content';

import type {CalendarEventGroup, CalendarProps, CalendarSidebarProps, CalendarEvent, CalendarState, CalendarHeaderProps} from '../types';
import type {Attributes, ComponentChildren, VNode} from 'preact';

import '../i18n';

export class Calendar<P extends CalendarProps=CalendarProps> extends HElement<P, CalendarState> {
    
    protected _abort?: AbortController;

    constructor(props: P) {
        super(props);
        //初始化日历集与日历状态
        this.state = {'date': new Date(), 'showCalendarGroup': false, 'calendarEventMap':this.generateEventMap(this.props.calendarEvents), 'calendarGroupMap': this.generateCalendarGroupMap(this.props.calendarEventGroups), 'eventSetMap': this.generateCalendarSetEvents()};
    }

    //给予Sidebar的事件集与事件的对应关系更新
    protected setCalendarGroupMap(eventSetMap: Map<string, CalendarEventGroup>): void {
        this.setState({'calendarGroupMap': eventSetMap});
        this.setState({'eventSetMap': this.generateCalendarSetEvents()});
    }
    
    //生成事件的唯一Map
    generateEventMap(calendarEvents?: CalendarEvent[]): Map<string, CalendarEvent> {
        const map = new Map<string, CalendarEvent>();
        calendarEvents?.map((item) => {
            if (item.id !== undefined && !map.has(item.id)) {
                map.set(item.id, item);
            } else {
                throw new Error('[ZUI] CalendarEvent id must be unique');
            }
        });
        return map;
    }

    //生成日历集的唯一Map
    generateCalendarGroupMap(calendarEventGroups?: CalendarEventGroup[]): Map<string, CalendarEventGroup> {
        const map = new Map<string, CalendarEventGroup>();
        calendarEventGroups?.map((item) => {
            if (item.id !== undefined && !map.has(item.id)) {
                item.checked = item.checked || true;
                map.set(item.id, item);
            } else {
                throw new Error('[ZUI] CalendarEventGroup id must be unique');
            }
        });
        return map;
    }
    
    //生成事件集与事件的对应关系
    generateCalendarSetEvents(): Map<string, CalendarEvent[]> {
        const map = new Map<string, CalendarEvent[]>();
        if (this.state?.calendarEventMap && this.state?.calendarGroupMap) {
            this.state.calendarGroupMap?.forEach((item) => {
                if (item.id !== undefined && item.checked) {
                    this.state.calendarEventMap?.forEach(element => {
                        if (element.calendarEventGroup == item.id) {
                            map.set(item.id, map.get(item.id)?.concat(element) || [element]);
                        }
                    });
                }
            });
        } else {
            this.props.calendarEventMap?.forEach((value) => {
                if (value.date !== undefined) {
                    const dateKey = new Date(value.date).toISOString().split('T')[0]; // 将日期转换为 'YYYY-MM-DD' 格式
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
        }
        return map;
    }


    protected _renderSidebar():ComponentChildren {
        const CalendarSidebarOptions: CalendarSidebarProps = {
            eventSetMap:this.state.eventSetMap,
            calendarGroupMap: this.state.calendarGroupMap || new Map<string, CalendarEventGroup>(),
            setCalendarGroupMap:this.setCalendarGroupMap.bind(this),
            onShowCalendarGroup:()=>{this.setState({'showCalendarGroup':!this.state.showCalendarGroup});},
        };
        return (<CalendarSidebar {...CalendarSidebarOptions}></CalendarSidebar>);
    }
    

    protected _renderHeader(): ComponentChildren {
        const CalendarHeaderOptions: CalendarHeaderProps = {
            date: this.state.date,
            onShowCalendarGroup:()=>{this.setState({'showCalendarGroup':!this.state.showCalendarGroup});},
            onDateChange: (newDate: Date) => { this.setState({'date':newDate});},
            onMonthChange: (type: string) => {
                const currentMonth = this.state.date.getMonth();
                const newDate = new Date(this.state.date);
                if (type === 'prev') {
                    if (currentMonth === 0) {
                        newDate.setFullYear(this.state.date.getFullYear() - 1);
                        newDate.setMonth(11);
                    } else {
                        newDate.setMonth(currentMonth - 1);
                    }
                } else if (type === 'next') {
                    if (currentMonth === 11) {
                        newDate.setFullYear(this.state.date.getFullYear() + 1);
                        newDate.setMonth(0);
                    } else {
                        newDate.setMonth(currentMonth + 1);
                    }
                }
                this.setState({date: newDate});
            },
            
        };
        return (<CalendarHeader {...CalendarHeaderOptions} ></CalendarHeader>);
    }
    

    protected _renderContent(): ComponentChildren {
        const CalendarOptions: CalendarProps = {
            date: this.state.date,
            showCalendarGroup: this.state.showCalendarGroup,
            calendarEventMap: this.state.calendarEventMap,
            calendarEventGroupMap: this.state.calendarGroupMap,
            eventSetMap: this.state.eventSetMap || new Map<string, CalendarEvent[]>(),
            onDateClick: this.props.onDateClick,
            onEventClick: this.props.onEventClick,
            onDragChange: this.props.onDragChange, 
            shrinkFreeWeekend: this.props.shrinkFreeWeekend,
            maxVisibleEvents: this.props.maxVisibleEvents,
            mode: this.props.mode,
        };
        return (<CalendarContent {...CalendarOptions} ></CalendarContent>);
    }

    render(): VNode<Attributes> {
        return (<div className="component">{this.state.showCalendarGroup && <div className="calendar-sidebar">{this._renderSidebar()}</div>}<div className="component-calendar">{this._renderHeader()}{ this._renderContent()}</div></div>);
    }
} 