import {HElement} from '@zui/core';
import {CalendarHeader} from './calendar-header';
import {CalendarContent} from './calendar-content';

import type {CalendarProps} from '../types';
import type {Attributes, ComponentChildren, RenderableProps, VNode} from 'preact';
import type {CalendarState} from '../types/calendar-state';
import type {CalendarHeaderProps} from '../types/calendar-header-props';

export class Calendar<P extends CalendarProps=CalendarProps> extends HElement<P, CalendarState> {
    
    constructor(props: P) {
        super(props);
        this.state = {'month': new Date().getMonth() + 1, 'year':new Date().getFullYear(), 'day':new Date().getDate()};
    }

    protected _renderHeader(props: RenderableProps<P>): ComponentChildren {
        const CalendarHeaderOptions: CalendarHeaderProps = {
            month: this.state.month,
            year: this.state.year,
            onDateChange: (year: number, month: number) => { this.setState({'year':year, 'month':month});},
            onMonthChange: (type: string) => {
                if (type === 'prev') {
                    this.setState(this.state.month === 1 ? {'month': 12, 'year': this.state.year - 1} : {'month': this.state.month - 1});
                } else if (type === 'next') {
                    this.setState(this.state.month === 12 ? {'month': 1, 'year': this.state.year + 1} : {'month': this.state.month + 1});
                }
            },
        };
        return (<CalendarHeader {...CalendarHeaderOptions} ></CalendarHeader>);
    }
    

    protected _renderContent(props: RenderableProps<P>): ComponentChildren {
        const CalendarOptions: CalendarProps = {
            month: this.state.month,
            year: this.state.year,
            day: this.state.day,
            calendarEventSet: this.props.calendarEventSet,
            onDateClick: (date: Date) => { console.log(date); },
            onEventClick(event) {
                console.log(event);
            },
            onEventDrop(event, oldDate, newDate) {
                console.log(event, oldDate, newDate);
            },
            maxVisibleEvents: this.props.maxVisibleEvents,
        };
        return (<CalendarContent {...CalendarOptions} ></CalendarContent>);
    }

    render(props: RenderableProps<P>): VNode<Attributes> {
        return (<div className="div">{this._renderHeader({...props})}{this._renderContent({...props})}</div>);
    }
} 