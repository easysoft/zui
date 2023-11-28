import {type SizeSetting, type ClassNameLike, type CustomContentType} from '@zui/core';
import {type NestedListItem, type NestedListProps} from '@zui/list';
import {type MenuItemOptions} from './menu-item-options';

export interface MenuOptions<T extends MenuItemOptions = NestedListItem> extends NestedListProps<T> {
    wrap?: boolean | Record<string, unknown>;
    wrapClass?: ClassNameLike;
    height?: SizeSetting;
    maxHeight?: SizeSetting;
    header?: CustomContentType;
    footer?: CustomContentType;
    popup?: boolean;
    compact?: boolean;
}
