import type SplitJS from 'split.js';
import type {Selector} from '@zui/core';

export interface SplitOptions extends SplitJS.Options {
    elements?: Selector | Selector[]
}
