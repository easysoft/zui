import type {KanbanLinkOptions} from './kanban-link-options';

export interface KanbanLinkProps extends KanbanLinkOptions {
    fromRect: {left: number, top: number, bottom: number, right: number};
    toRect: {left: number, top: number, bottom: number, right: number};
}
