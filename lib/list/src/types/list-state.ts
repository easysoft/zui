import type {CustomContentType} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {ListItem} from './list-item';

export interface ListState<T extends Item = ListItem> {
    items?: T[];
    loading?: boolean;
    loadFailed?: CustomContentType;
    checked: Record<string, boolean>;
}
