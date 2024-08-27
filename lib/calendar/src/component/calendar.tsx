import {HElement, classes, i18n, $} from '@zui/core';
import {CalendarHeader} from './calendar-header';
import {CalendarContent} from './calendar-content';

import type {CalendarProps} from '../types';
import type {Attributes, ComponentChildren, RenderableProps, VNode} from 'preact';
import type {CalendarState} from '../types/calendar-state';
import type {CalendarHeaderProps} from '../types/calendar-header-props';

import '../i18n';

export class Calendar<P extends CalendarProps=CalendarProps> extends HElement<P, CalendarState> {
    
    constructor(props: P) {
        super(props);
        this.state = {'date': new Date()};
    }

    protected _renderHeader(props: RenderableProps<P>): ComponentChildren {
        const CalendarHeaderOptions: CalendarHeaderProps = {
            date: this.state.date,
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
        return (<div className="div">{this._renderHeader({...props})}{this._renderContent({...props})}</div>);
    }
} 