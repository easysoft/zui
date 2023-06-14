import type {IconType} from '@zui/core';
import type {ActionBasicProps, ActionMenuNestedOptions} from '@zui/action-menu/src/types';
import type {TreeItemOptions} from './tree-item-options';
import type {ToolbarOptions, ToolbarItemOptions} from '@zui/toolbar/src/types';

export interface TreeOptions<T extends ActionBasicProps = TreeItemOptions> extends ActionMenuNestedOptions<T> {
    animate?: boolean;
    collapsedIcon?: IconType;
    expandedIcon?: IconType;
    normalIcon?: IconType;
    itemActions?: ToolbarOptions | ToolbarItemOptions[] | ((item: T) => ToolbarOptions | ToolbarItemOptions[]);
    hover?: boolean;
}
