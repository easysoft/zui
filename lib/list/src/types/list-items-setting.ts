import type {FetcherSetting} from '@zui/core';
import type {ItemsSetting, Item} from '@zui/common-list';

export type ListItemsFetcher = FetcherSetting<Item[]>;

export type ListItemsSetting = ItemsSetting | ListItemsFetcher;
