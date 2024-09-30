import type {KanbanLinkOptions} from './kanban-link-options';

export interface KanbanLinkEditorProps {
    onAddLink?: (newLink: KanbanLinkOptions) => void;
    container?: string;
}
