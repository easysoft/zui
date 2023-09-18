import type {FetcherSetting} from '@zui/core';
import type {KanbanData} from './kanban-data';

export type KanbanDataFetcher = FetcherSetting<KanbanData>;

export type KanbanDataSetting = KanbanData | KanbanDataFetcher;
