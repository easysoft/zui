import type {KanbanItem} from './kanban-item';
import type {KanbanDataset} from './kanban-dataset';

export interface KanbanData extends KanbanDataset {
    items: KanbanItem[];
}
