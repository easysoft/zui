import type {Item} from '@zui/common-list';
import type {ListitemProps} from './listitem-props';
import type {NestedItem} from './nested-item';

export type NestedListItem = (ListitemProps & NestedItem) | NestedItem | Item;
