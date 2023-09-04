import type {IconType} from '@zui/core';
import type {ItemKey} from './item-key';
import type {ListProps} from './list-props';
import type {NestedItem} from './nested-item';

export interface NestedListProps extends ListProps<NestedItem> {
    parentKey?: ItemKey;
    indent?: number;
    level?: number;
    nestedTrigger?: 'click' | 'hover',
    nestedShow?: boolean | Record<ItemKey, boolean>;
    defaultNestedShow?: boolean | Record<ItemKey, boolean>;
    collapsedIcon?: IconType;
    expandedIcon?: IconType;
    normalIcon?: IconType;
    nestedToggle?: string;
    onToggle?: (key: ItemKey, toggle: boolean) => false | void;
    onHoverItem?: (info: {hover: boolean, item: NestedItem, index: number, event: MouseEvent}) => void;
}
