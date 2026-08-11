import {LibLoader} from '@zui/core';
import type {SortableClass} from '../types';

/** SortableJS UMD 包的按需加载器。 */
export const sortableLoader = new LibLoader<SortableClass>('sortablejs', {
    src: 'sortable/sortable.min.js',
    check: 'Sortable',
});
