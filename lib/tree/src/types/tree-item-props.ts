import type {ActionNestedItemProps} from '@zui/action-menu/src/types';
import type {ToolbarOptions, ToolbarItemOptions} from '@zui/toolbar/src/types';

export interface TreeItemProps extends ActionNestedItemProps {
    actions?: ToolbarOptions | ToolbarItemOptions[];
}
