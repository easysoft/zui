import type {FetcherSetting} from '@zui/core';
import type {KanbanDataset} from './kanban-dataset';

export type KanbanDataFetcher = FetcherSetting<KanbanDataset>;

export type KanbanDataSetting = KanbanDataset | KanbanDataFetcher;
