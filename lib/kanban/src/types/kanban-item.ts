import type {Item} from '@zui/common-list';

export interface KanbanItem extends Item {
    order?: number;
}
