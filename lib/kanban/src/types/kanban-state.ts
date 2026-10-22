import type {KanbanData} from './kanban-data';
import type {KanbanBackgroundPattern} from './kanban-background-pattern';
import type {CustomContentType} from '@zui/core';

export type KanbanState = {
    backgroundPattern?: KanbanBackgroundPattern;
    loading?: boolean;
    data?: KanbanData;
    changes?: Partial<KanbanData>;
    loadFailed?: CustomContentType;
    containerWidth?: number;
    selected?: string[];
    hover?: string;
};
