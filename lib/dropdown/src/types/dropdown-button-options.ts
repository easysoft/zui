import {ButtonProps} from '@zui/button/src/types';
import type {DropdownOptions} from './dropdown-options';
import type {MenuItemOptions} from '@zui/menu/src/types';
import type {Dropdown} from '../vanilla';

export interface DropdownButtonOptions extends ButtonProps {
    dropdown?: DropdownOptions;
    trigger?: DropdownOptions['trigger'];
    placement?: DropdownOptions['placement'];
    items?: MenuItemOptions[] | ((dropdown: Dropdown) => MenuItemOptions[]),
}
