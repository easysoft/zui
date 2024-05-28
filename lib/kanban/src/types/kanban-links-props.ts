import type {KanbanLinkOptions} from './kanban-link-options';

export interface KanbanLinksProps {
    links: KanbanLinkOptions[];
    filters?: string[];
    onDeleteLink?: (link: KanbanLinkOptions) => void;
}
