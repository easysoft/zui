import type {SearchBoxOptions} from '@zui/search-box';
import type {MenuOptions} from './menu-options';
import type {NestedItem} from '@zui/list/src/types';

export interface SearchMenuOptions extends MenuOptions {
    searchBox?: SearchBoxOptions | boolean;
    searchPlacement?: 'bottom' | 'top';
    search?: string;
    defaultSearch?: string;
    isItemMatch?: (item: NestedItem, searchKeys: string[], index: number) => boolean;
}
