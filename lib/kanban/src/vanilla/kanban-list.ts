import {ComponentFromReact} from '@zui/core';
import {KanbanList as KanbanListReact} from '../component';

import type {KanbanListProps, KanbanProps, KanbanRegionProps} from '../types';

export class KanbanList extends ComponentFromReact<KanbanListProps, KanbanListReact> {
    static NAME = 'KanbanList';

    static replace = true;

    static Component = KanbanListReact;

    updateKanban(items: (KanbanProps | KanbanRegionProps) | (KanbanProps | KanbanRegionProps)[], reset?: boolean) {
        items = Array.isArray(items) ? items : [items];
        if (reset) {
            return this.render({items});
        }
        const oldItems = this.options.items || [];
        const oldItemMap = new Map(oldItems.map((item, index) => [item.key, index]));
        const newItems = [...oldItems];
        items.forEach((item) => {
            if (oldItemMap.has(item.key)) {
                const index = oldItemMap.get(item.key)!;
                newItems[index] = {...oldItems[index], ...item};
            } else {
                newItems.push(item);
            }
        });
        return this.render({items: newItems.filter(x => !(x as {deleted?: boolean}).deleted)});
    }
}
