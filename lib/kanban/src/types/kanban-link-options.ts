import type {Item} from '@zui/common-list';

export interface KanbanLinkOptions extends Item {
    from: string;
    to: string;
    deleted?: boolean;
}
