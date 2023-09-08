import type {FetcherSetting, ItemsSetting, Item} from '@zui/core';

export type ListItemsFetcher = FetcherSetting<Item[]>;

export type ListItemsSetting = ItemsSetting | ListItemsFetcher;
