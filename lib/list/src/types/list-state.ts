import type {CustomContentType} from '@zui/core';
import type {Item} from '@zui/common-list';

export interface ListState {
    items?: Item[];
    loading?: boolean;
    loadFailed?: CustomContentType;
}
