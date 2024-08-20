import {RenderableProps, Attributes} from 'preact';
import type {CalendarHeaderProps} from '../types';
import {HElement, VNode} from '@zui/core';
import {Button} from '@zui/button/src/component';

export class CalendarHeader<P extends CalendarHeaderProps = CalendarHeaderProps, S = {}> extends HElement<P, S> {
    render(props: RenderableProps<P>): VNode<Attributes> {
        const {date, onMonthChange, onDateChange} = props;
        return (
            <div class="calendar-header">
                <div class="calendar-header-left">             
                    <Button className = 'btn-first' onClick={() => onDateChange(new Date())}>今天</Button > 
                    <span class = 'btn btn-left '><span class='chevron-left' onClick={() => onMonthChange?.('prev')}></span></span> 
                    <span class = 'btn btn-right '><span class='chevron-right' onClick={() => onMonthChange?.('next')}></span></span> </div>
                <div className="calendar-content">{date.getFullYear()}年{date.getMonth() + 1}月</div></div>
        );
    }
}