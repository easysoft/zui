import {ComponentFromReact} from '@zui/core';
import {Kanban as KanbanReact} from '../component';

import type {KanbanProps} from '../types';

export class Kanban extends ComponentFromReact<KanbanProps, KanbanReact> {
    static NAME = 'Kanban';

    static replace = true;

    static Component = KanbanReact;
}


Kanban.register();
