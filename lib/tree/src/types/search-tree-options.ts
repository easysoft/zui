import type {IconType} from '@zui/core';
import type {ListitemProps} from '@zui/list';
import type {SearchMenuOptions} from '@zui/menu';

export interface SearchTreeOptions extends SearchMenuOptions {
    itemActions?: ListitemProps['actions'];
    collapsedIcon?: IconType;
    expandedIcon?: IconType;
    normalIcon?: IconType;
}
