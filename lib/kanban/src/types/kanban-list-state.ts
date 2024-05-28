import type {KanbanLinkOptions} from './kanban-link-options';

export type KanbanListState = {
    width?: number;
    height?: number;
    linkChanges?: KanbanLinkOptions[];
    selected?: Record<string, string[]>;
    hover?: string;
};
