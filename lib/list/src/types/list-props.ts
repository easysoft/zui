import type {ComponentChildren, HElementProps} from '@zui/core';
import type {Item} from './item';

export interface ListProps extends HElementProps {
    name?: string;
    itemName?: string;
    items?: Item[] | (() => Item[]);
    itemProps?: Partial<Item>;
    itemPropsMap?: Record<string, Partial<Item>>;
    getItem?: (item: Item, index: number) => Item;
    itemRender?: (item: Item, index: number) => ComponentChildren;
    beforeRender?: (options: ListProps) => void;
    afterRender?: (firstRender: boolean) => void;
    beforeDestroy?: () => void;
    onClickItem?: (info: {item: Item, index: number, event: MouseEvent}) => void;
}
