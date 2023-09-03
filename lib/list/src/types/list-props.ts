import type {ComponentChildren, CustomContentType, HElementProps} from '@zui/core';
import type {Item} from './item';
import type {ItemsSetting} from './items-setting';

export interface ListProps extends HElementProps {
    name?: string;
    itemName?: string;
    keyName?: string;
    items?: ItemsSetting;
    itemProps?: Partial<Item>;
    itemPropsMap?: Record<string, Partial<Item>>;
    getItem?: (item: Item, index: number) => Item;
    onLoad?: (items: Item[]) => void | Item[];
    onLoadFail?: CustomContentType | ((error: Error) => CustomContentType | void);
    itemRender?: (item: Item, index: number) => ComponentChildren;
    beforeRender?: (options: ListProps) => void;
    afterRender?: (firstRender: boolean) => void;
    beforeDestroy?: () => void;
    onClickItem?: (info: {item: Item, index: number, event: MouseEvent}) => void;
}
