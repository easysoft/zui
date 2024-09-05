import {HElement} from '@zui/core';
import {CalendarSidebar} from './calendar-sidebar';
import {CalendarHeader} from './calendar-header';
import {CalendarContent} from './calendar-content';

import type {CalendarEventGroup, CalendarProps, CalendarSidebarProps, CalendarEvent, CalendarState, CalendarHeaderProps} from '../types';
import type {Attributes, ComponentChildren, VNode} from 'preact';

import '../i18n';

export class Calendar<P extends CalendarProps=CalendarProps> extends HElement<P, CalendarState> {
    
    constructor(props: P) {
        super(props);
        //初始化日历集与日历状态
        this.state = {'date': new Date(), 'showCalendarGroup': false, 'eventSetMap': this.generateCalendarSetEvents(), 'calendarEventMap':this.generateEventMap(this.props.calendarEvents), 'calendarGroupMap': this.generateCalendarGroupMap(this.props.calendarEventGroups)};
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
        this.props.calendarEventGroups?.forEach((item) => {
            if (item.id !== undefined) {
                this.props.calendarEvents?.forEach(element => {
                    if (element.calendarEventGroup == item.id) {
                        map.set(item.id, map.get(item.id)?.concat(element) || [element]);
                    }
                });
            }
        });
        return map;
    }


    protected _renderSidebar():ComponentChildren {
        const CalendarSidebarOptions: CalendarSidebarProps = {
            calendarEventMap: this.state.calendarEventMap || new Map<string, CalendarEvent>(),
            eventSetMap:this.state.eventSetMap,
            maxVisibleEvents: this.props.maxVisibleEvents,
            calendarGroupMap: this.state.calendarGroupMap || new Map<string, CalendarEventGroup>(),
            showCalendarGroup: this.state.showCalendarGroup,
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