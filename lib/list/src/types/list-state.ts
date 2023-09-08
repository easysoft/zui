import type {CustomContentType, Item} from '@zui/core';

export interface ListState {
    items?: Item[];
    loading?: boolean;
    loadFailed?: CustomContentType;
}
