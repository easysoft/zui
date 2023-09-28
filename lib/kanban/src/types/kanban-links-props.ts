import type {KanbanLinkOptions} from './kanban-link-options';

export interface KanbanLinksProps {
    links: KanbanLinkOptions[];
    onDeleteLink?: (link: KanbanLinkOptions) => void;
}
