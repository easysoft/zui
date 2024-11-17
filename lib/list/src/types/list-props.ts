import type {CustomContentType} from '@zui/core';
import type {Item, CommonListProps, ItemKey} from '@zui/common-list';
import type {CheckboxProps, CheckedType} from '@zui/checkbox';
import type {ListItemsSetting} from './list-items-setting';
import type {ListItem} from './list-item';

export interface ListProps<T extends Item = ListItem> extends CommonListProps<T> {
    items?: ListItemsSetting<T>;
    divider?: boolean;
    multiline?: boolean;
    checkbox?: boolean | CheckboxProps;
    checkOnClick?: boolean | 'any' | (string & {});
    selectOnChecked?: boolean;
    active?: string | string[] | Record<string, boolean>;
    multipleActive?: boolean;
    activeOnHover?: boolean;
    hoverItemActions?: boolean;
    onActive?: (keys: string[], active: boolean) => void;
    onCheck?: (change: Record<ItemKey, CheckedType>, checks: ItemKey[]) => void;
    onLoad?: (items: T[]) => void | T[];
    onLoadFail?: CustomContentType | ((error: Error) => CustomContentType | void);
    beforeRender?: (options: ListProps) => void;
    afterRender?: (firstRender: boolean) => void;
    beforeDestroy?: () => void;
}
