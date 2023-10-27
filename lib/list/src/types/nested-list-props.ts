import type {IconType} from '@zui/core';
import type {ItemKey} from '@zui/common-list';
import type {ListProps} from './list-props';
import type {NestedItem} from './nested-item';
import type {NestedListItem} from './nested-list-item';

export interface NestedListProps<T extends NestedItem = NestedListItem> extends ListProps<T> {
    parentKey?: ItemKey;
    indent?: number;
    level?: number;
    preserve?: string;
    nestedTrigger?: 'click' | 'hover',
    nestedShow?: boolean | Record<ItemKey, boolean>;
    defaultNestedShow?: boolean | Record<ItemKey, boolean>;
    toggleIcons?: {collapsed?: IconType, expanded?: IconType, normal?: IconType};
    nestedToggle?: string;
    renderCollapsedList?: boolean;
    checkedState?: Record<ItemKey, boolean>;
    onToggle?: (key: ItemKey, toggle: boolean) => false | void;
    onHoverItem?: (info: {hover: boolean, item: T, index: number, event: MouseEvent}) => void;
}
