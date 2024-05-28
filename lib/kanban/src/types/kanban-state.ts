import type {KanbanData} from './kanban-data';
import type {CustomContentType} from '@zui/core/src/react';

export type KanbanState = {
    loading?: boolean;
    data?: KanbanData;
    changes?: Partial<KanbanData>;
    loadFailed?: CustomContentType;
    containerWidth?: number;
    selected?: string[];
    hover?: string;
};
