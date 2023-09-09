import type {SearchBoxOptions} from '@zui/search-box';
import type {MenuOptions} from './menu-options';
import type {ItemKey} from '@zui/common-list';
import type {NestedItem} from '@zui/list';

export interface SearchMenuOptions extends MenuOptions {
    searchBox?: SearchBoxOptions | boolean;
    searchPlacement?: 'bottom' | 'top';
    search?: string;
    defaultSearch?: string;
    searchControlled?: boolean;
    expandOnSearch?: boolean;
    isItemMatch?: (item: NestedItem, searchKeys: string[], index: number, parentKey: ItemKey | undefined) => boolean;
}
