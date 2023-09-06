import type {ComponentChildren, CustomContentType, HElementProps} from '@zui/core';
import type {Item} from './item';
import type {ItemsSetting} from './items-setting';

export interface ListProps<T extends Item = Item> extends HElementProps {
    name?: string;
    itemName?: string;
    keyName?: string;
    items?: ItemsSetting;
    itemProps?: Partial<T>;
    itemPropsMap?: Record<string, Partial<T>>;
    hover?: boolean;
    divider?: boolean;
    multiline?: boolean;
    getItem?: (item: T, index: number) => T;
    onLoad?: (items: T[]) => void | T[];
    onLoadFail?: CustomContentType | ((error: Error) => CustomContentType | void);
    itemRender?: (item: T) => ComponentChildren;
    beforeRender?: (options: ListProps) => void;
    afterRender?: (firstRender: boolean) => void;
    beforeDestroy?: () => void;
    onClickItem?: (info: {item: T, index: number, event: MouseEvent}) => void;
}
