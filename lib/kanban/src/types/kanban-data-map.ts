import type {ItemKey} from '@zui/common-list/src/types';
import type {KanbanDataset} from './kanban-dataset';
import type {KanbanItemsMap} from './kanban-items-map';
import type {KanbanLinkOptions} from './kanban-link-options';
import type {KanbanItem} from './kanban-item';

export interface KanbanDataMap extends KanbanDataset {
    items: KanbanItemsMap;
    map: Map<ItemKey, KanbanItem>;
    hasSubCols?: boolean;
    links: KanbanLinkOptions[];
}
