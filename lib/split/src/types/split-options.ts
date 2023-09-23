import type SplitJS from 'split.js';
import type {Selector, SizeSetting} from '@zui/core';

export interface SplitOptions extends Omit<SplitJS.Options, 'sizes'> {
    animation?: boolean;
    sizes?: (SizeSetting | undefined | null)[];
    vertical?: boolean;
    elements?: Selector | Selector[];
    toggleBtn?: boolean | boolean[];
    dblClickToggle?: boolean;
}
