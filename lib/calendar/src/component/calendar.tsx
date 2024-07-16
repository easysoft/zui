import {HElement} from '@zui/core';
import type {CalendarProps} from '../types';
import {CalendarHeader} from './calendar-header';

import type {Attributes, ComponentChildren, RenderableProps, VNode} from 'preact';
import type {CalendarState} from '../types/calendar-state';
import type {CalendarHeaderProps} from '../types/calendar-header-props';

export class Calendar<P extends CalendarProps=CalendarProps> extends HElement<P, CalendarState> {
    
    constructor(props: P) {
        super(props);
        this.state = {'month': new Date().getMonth(), 'year':new Date().getFullYear()};
    }

    protected _renderHeader(props: RenderableProps<P>): ComponentChildren {
        const CalendarHeaderOptions: CalendarHeaderProps = {
            month: this.state.month,
            year: this.state.year,
            onDateChange: (year: number, month: number) => { this.setState({'year':year, 'month':month});},
            onMonthChange: (type: string) => {
                if (type === 'prev') {
                    this.setState(this.state.month === 0 ? {'month': 11, 'year': this.state.year - 1} : {'month': this.state.month - 1});
                } else if (type === 'next') {
                    this.setState(this.state.month === 11 ? {'month': 0, 'year': this.state.year + 1} : {'month': this.state.month + 1});
                }
            },
        };
        return (<CalendarHeader {...CalendarHeaderOptions} ></CalendarHeader>);
    }

    render(props: RenderableProps<P>): VNode<Attributes> {
        return (<div className="div">{this._renderHeader({...props})}</div>);
    }
} 