import type {CustomContentType} from '@zui/core/src/react';
import type {Item} from './item';

export interface ListState {
    loading?: boolean;
    items?: Item[];
    loadFailed?: CustomContentType;
}
