import type {CalendarEventSet} from '../types';
import {Draggable} from '@zui/dnd';
import {HElement} from '@zui/core';
import type {Attributes, RenderableProps, VNode} from 'preact';

export class CalendarEventDom<P extends CalendarEventSet = CalendarEventSet, S = {}> extends HElement<P, S> {
    //计算事件显示颜色
    render(props: RenderableProps<P>): VNode<Attributes> {
        return <div></div>;
    }   
}




