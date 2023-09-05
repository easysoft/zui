import type {ButtonProps} from '@zui/button';
import type {DropdownOptions} from './dropdown-options';

export interface DropdownButtonOptions extends ButtonProps {
    dropdown?: DropdownOptions;
    trigger?: DropdownOptions['trigger'];
    placement?: DropdownOptions['placement'];
    items?: DropdownOptions['items'],
}
