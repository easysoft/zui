import type {IconType, ItemKey} from '@zui/core';
import type {ListProps} from './list-props';
import type {NestedItem} from './nested-item';

export interface NestedListProps extends ListProps<NestedItem> {
    parentKey?: ItemKey;
    indent?: number;
    level?: number;
    nestedTrigger?: 'click' | 'hover',
    nestedShow?: boolean | Record<ItemKey, boolean>;
    defaultNestedShow?: boolean | Record<ItemKey, boolean>;
    toggleIcons?: {collapsed?: IconType, expanded?: IconType, normal?: IconType};
    nestedToggle?: string;
    onToggle?: (key: ItemKey, toggle: boolean) => false | void;
    onHoverItem?: (info: {hover: boolean, item: NestedItem, index: number, event: MouseEvent}) => void;
}
