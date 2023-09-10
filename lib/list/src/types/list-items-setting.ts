import type {FetcherSetting} from '@zui/core';
import type {ItemsSetting, Item} from '@zui/common-list';

export type ListItemsFetcher<T extends Item = Item> = FetcherSetting<T[]>;

export type ListItemsSetting<T extends Item = Item> = ItemsSetting<T> | ListItemsFetcher<T>;
