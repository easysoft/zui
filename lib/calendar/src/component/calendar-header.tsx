import {RenderableProps, Attributes} from 'preact';
import type {CalendarHeaderProps} from '../types';
import {HElement, VNode} from '@zui/core';
import {Button} from '@zui/button/src/component';

export class CalendarHeader<P extends CalendarHeaderProps = CalendarHeaderProps, S = {}> extends HElement<P, S> {
    render(props: RenderableProps<P>): VNode<Attributes> {
        const {year, month, onMonthChange, onDateChange} = props;
        return (
            <div class="calendar-header">
                <div class="calendar-header-left">             
                    <Button className = 'btn-first' onClick={() => onDateChange(new Date().getFullYear(), new Date().getMonth() + 1)}>今天</Button > 
                    <Button className = 'btn btn-left' onClick={() => onMonthChange?.('prev')}>{'<'}</Button> 
                    <Button className = 'btn btn-right' onClick={() => onMonthChange?.('next')}>{'>'}</Button> </div>
                <div className="calendar-content">{year}年{month}月</div></div>
        );
    }
}