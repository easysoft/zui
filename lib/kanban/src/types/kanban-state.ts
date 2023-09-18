import type {KanbanData} from './kanban-data';
import type {CustomContentType} from '@zui/core/src/react';

export type KanbanState = {
    loading?: boolean;
    data?: KanbanData;
    loadFailed?: CustomContentType;
};
