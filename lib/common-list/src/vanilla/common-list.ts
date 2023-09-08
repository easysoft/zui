import {ComponentFromReact} from '@zui/core';
import {CommonList as CommonListReact} from '../component';

import type {CommonListProps} from '../types';

export class CommonList extends ComponentFromReact<CommonListProps, CommonListReact> {
    static NAME = 'CommonList';

    static Component = CommonListReact;
}
