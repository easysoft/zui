import {ComponentFromReact} from '@zui/core';
import {KanbanList as KanbanListReact} from '../component';

import type {KanbanListProps} from '../types';

export class KanbanList extends ComponentFromReact<KanbanListProps, KanbanListReact> {
    static NAME = 'KanbanList';

    static replace = true;

    static Component = KanbanListReact;
}
