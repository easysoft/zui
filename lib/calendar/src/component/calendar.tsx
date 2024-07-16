import {HElement} from '@zui/core';
import type {CalendarProps} from '../types';
import {CalendarHeader} from './calenda-header';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {CalendarState} from '../types/calendar-state';

export class Calendar<P extends CalendarProps, S extends CalendarState> extends HElement<P, S> {
    protected _renderContent(props: RenderableProps<P>): ComponentChildren {
        return (<CalendarHeader></CalendarHeader>);
    }
} 