import type {KanbanLinkOptions} from './kanban-link-options';

export interface KanbanLinksProps {
    links: KanbanLinkOptions[];
    filters?: string[];
    editLinks?: boolean;
    onDeleteLink?: (link: KanbanLinkOptions) => void;
    onAddLink?: (from: string, to: string) => void;
}
