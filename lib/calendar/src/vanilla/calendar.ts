import {ComponentFromReact} from '@zui/core';
import {Calendar as CalendarReact} from '../component';

import type {CalendarProps} from '../types';

export class Calendar extends ComponentFromReact<CalendarProps, CalendarReact> {
    static NAME = 'Calendar';

    static Component = CalendarReact;

    static replace = true;
}