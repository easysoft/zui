import {ComponentFromReact} from '@zui/core';
import {KanbanRegion as KanbanRegionReact} from '../component';

import type {KanbanRegionProps} from '../types';

export class KanbanRegion extends ComponentFromReact<KanbanRegionProps, KanbanRegionReact> {
    static NAME = 'KanbanRegion';

    static replace = true;

    static Component = KanbanRegionReact;
}

KanbanRegion.register();
