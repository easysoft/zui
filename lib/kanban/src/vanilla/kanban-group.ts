import {ComponentFromReact} from '@zui/core';
import {KanbanGroup as KanbanGroupReact} from '../component';

import type {KanbanGroupProps} from '../types';

export class KanbanGroup extends ComponentFromReact<KanbanGroupProps, KanbanGroupReact> {
    static NAME = 'KanbanGroup';

    static replace = true;

    static Component = KanbanGroupReact;
}
