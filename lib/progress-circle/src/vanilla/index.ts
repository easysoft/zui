import {ComponentFromReact} from '@zui/core';
import {ProgressCircle as ProgressCircleReact} from '../component/progress-circle';
import type {ProgressCircleOptions} from '../types';

export class ProgressCircle extends ComponentFromReact<ProgressCircleOptions, ProgressCircleReact> {
    static NAME = 'ProgressCircle';

    static Component = ProgressCircleReact;
}

ProgressCircle.register();
