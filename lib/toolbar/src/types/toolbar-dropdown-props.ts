import {DropdownButtonOptions} from '@zui/dropdown/src/types';
import {ToolbarItemProps} from './toolbar-item-props';

export interface ToolbarDropdownProps extends ToolbarItemProps, DropdownButtonOptions {
    type: 'dropdown',
    children: DropdownButtonOptions['children'];
}
