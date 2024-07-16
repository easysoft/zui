import {RenderableProps, Attributes} from 'preact';
import type {CalendarHeaderProps} from '../types';
import {HElement, VNode} from '@zui/core';

export class CalendarHeader<P extends CalendarHeaderProps = CalendarHeaderProps, S = {}> extends HElement<P, S> {
    render(props: RenderableProps<P>): VNode<Attributes> {
        return (
            <div class="calendar-header">
                <div class="calendar-header-left"></div></div>
        );
    }
}