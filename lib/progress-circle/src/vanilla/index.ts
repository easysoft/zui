import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {ProgressCircle as ProgressCircleReact} from '../component/progress-circle';
import {ProgressCircleProps} from '../component/progress-circle';

export class ProgressCircle extends ComponentFromReact<ProgressCircleProps, ProgressCircleReact<ProgressCircleProps>> {
    static NAME = 'table-sorter';

    static Component = ProgressCircleReact;
}
