import type {SearchBoxOptions} from '@zui/search-box';
import type {MenuOptions} from './menu-options';
import type {ItemKey} from '@zui/common-list';
import type {NestedItem, NestedListItem} from '@zui/list';

export interface SearchMenuOptions<T extends NestedItem = NestedListItem> extends MenuOptions<T> {
    searchBox?: SearchBoxOptions | boolean;
    searchPlacement?: 'bottom' | 'top';
    search?: string;
    defaultSearch?: string;
    expandOnSearch?: boolean;
    underlineKeys?: boolean;
    searchProps?: string[];
    isItemMatch?: (item: NestedItem, searchKeys: string[], index: number, parentKey: ItemKey | undefined) => boolean;
}
