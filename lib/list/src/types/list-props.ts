import type {CustomContentType} from '@zui/core';
import type {Item, CommonListProps} from '@zui/common-list';
import type {ListItemsSetting} from './list-items-setting';
import type {CheckboxProps} from '@zui/checkbox/src/types';

export interface ListProps<T extends Item = Item> extends CommonListProps {
    items?: ListItemsSetting;
    hover?: boolean;
    divider?: boolean;
    multiline?: boolean;
    checkbox?: boolean | CheckboxProps;
    onLoad?: (items: T[]) => void | T[];
    onLoadFail?: CustomContentType | ((error: Error) => CustomContentType | void);
    beforeRender?: (options: ListProps) => void;
    afterRender?: (firstRender: boolean) => void;
    beforeDestroy?: () => void;
    onClickItem?: (info: {item: T, index: number, event: MouseEvent}) => void;
}
