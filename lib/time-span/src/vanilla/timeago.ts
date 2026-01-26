import {ComponentFromReact} from '@zui/core';
import {TimeAgo as TimeAgoReact} from '../component';
import {TimeAgoProps} from '../types';

export class TimeAgo extends ComponentFromReact<TimeAgoProps, TimeAgoReact> {
    static NAME = 'TimeAgo';

    static Component = TimeAgoReact;
}

TimeAgo.register();
