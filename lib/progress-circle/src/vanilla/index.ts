import {ComponentFromReact} from '@zui/core';
import {ProgressCircle as ProgressCircleReact} from '../component/progress-circle';
import {ProgressCircleProps} from '../component/progress-circle';

export class ProgressCircle extends ComponentFromReact<ProgressCircleProps, ProgressCircleReact> {
    static NAME = 'ProgressCircle';

    static Component = ProgressCircleReact;
}
