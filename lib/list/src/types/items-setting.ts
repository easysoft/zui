import type {FetcherSetting} from '@zui/core/src/ajax';
import type {Item} from './item';

export type ItemsFetcher = FetcherSetting<Item[]>;

export type ItemsSetting = Item[] | ItemsFetcher;
