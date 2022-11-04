import {ActionItemProps} from '@zui/action-menu/src/types/action-item-props';
import {DropdownOptions} from '@zui/dropdown/src/types';

export interface ToolbarDropdownProps extends ActionItemProps, DropdownOptions {
    type: 'dropdown',
}
