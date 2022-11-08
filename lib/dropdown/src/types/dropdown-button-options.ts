import {ButtonProps} from '@zui/button/src/types';
import {DropdownTriggerOptions} from './dropdown-trigger-options';

export interface DropdownButtonOptions extends DropdownTriggerOptions, ButtonProps {
    children?: DropdownTriggerOptions['children'];
}
