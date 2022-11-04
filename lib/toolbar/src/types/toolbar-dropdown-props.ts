import {DropdownTriggerOptions} from '@zui/dropdown/src/types';
import {ToolbarItemProps} from './toolbar-item-props';

export interface ToolbarDropdownProps extends ToolbarItemProps {
    type: 'dropdown',
    dropdown: DropdownTriggerOptions,
}
