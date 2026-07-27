import {ComponentFromReact} from '@zui/core';
import {TimeSpan as TimeSpanReact} from '../component';
import {TimeSpanProps} from '../types';

export class TimeSpan extends ComponentFromReact<TimeSpanProps, TimeSpanReact> {
    static NAME = 'TimeSpan';

    static Component = TimeSpanReact;
}

TimeSpan.register();
