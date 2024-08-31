import {HElement} from '@zui/core';
import {CalendarSidebar} from './calendar-sidebar';
import {CalendarHeader} from './calendar-header';
import {CalendarContent} from './calendar-content';

import type {CalendarProps, CalendarSidebarProps} from '../types';
import type {Attributes, ComponentChildren, RenderableProps, VNode} from 'preact';
import type {CalendarEvent} from '../types';
import type {CalendarState} from '../types/calendar-state';
import type {CalendarHeaderProps} from '../types/calendar-header-props';

import '../i18n';

export class Calendar<P extends CalendarProps=CalendarProps> extends HElement<P, CalendarState> {
    
    constructor(props: P) {
        super(props);
        this.state = {'date': new Date(), 'showCalendarGroup': true, 'eventSetMap': this.generateCalendarSetEvents()};
    }

    
    //生成事件集与事件的对应关系
    generateCalendarSetEvents(): Map<string, CalendarEvent[]> {
        const map = new Map<string, CalendarEvent[]>();
        this.props.calendarEvents?.forEach((item) => {
            if (item.calendarEventGroup !== undefined && !map.has(item.calendarEventGroup)) {
                this.props.calendarEventGroups?.forEach(element => {
                    if (element.id === item.calendarEventGroup) {
                        map.set(element.id, map.get(element.id)?.concat(item) || [item]);
                    }
                });
            }
        });
        return map;
    }


    protected _renderSidebar():ComponentChildren {
        const CalendarSidebarOptions: CalendarSidebarProps = {
            calendarEvents: this.props.calendarEvents,
            eventSetMap:this.state.eventSetMap,
            calendarEventGroups: this.props.calendarEventGroups,
            showCalendarGroup: this.state.showCalendarGroup,
            onShowCalendarGroup:()=>{this.setState({'showCalendarGroup':!this.state.showCalendarGroup});},
        };
        return (<CalendarSidebar {...CalendarSidebarOptions}></CalendarSidebar>);
    }
    

    protected _renderHeader(props: RenderableProps<P>): ComponentChildren {
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
    

    protected _renderContent(props: RenderableProps<P>): ComponentChildren {
        const CalendarOptions: CalendarProps = {
            date: this.state.date,
            showCalendarGroup: this.state.showCalendarGroup,
            calendarEvents: this.props.calendarEvents,
            calendarEventGroups: this.props.calendarEventGroups,
            onDateClick: this.props.onDateClick,
            onEventClick: this.props.onEventClick,
            onDragChange: this.props.onDragChange, 
            shrinkFreeWeekend: this.props.shrinkFreeWeekend,
            maxVisibleEvents: this.props.maxVisibleEvents,
            mode: this.props.mode,
        };
        return (<CalendarContent {...CalendarOptions} ></CalendarContent>);
    }

    render(props: RenderableProps<P>): VNode<Attributes> {
        return (<div className="component">{this.state.showCalendarGroup && <div className="calendar-sidebar">{this._renderSidebar()}</div>}<div className="component-calendar">{this._renderHeader({...props})}{ this._renderContent({...props})}</div></div>);
    }
} 