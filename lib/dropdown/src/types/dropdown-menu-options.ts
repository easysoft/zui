import type {Placement} from '@floating-ui/dom';
import type {SearchMenuOptions} from '@zui/menu';
import type {Dropdown} from '../vanilla';

export interface DropdownMenuOptions extends SearchMenuOptions {
    placement?: Placement;
    relativeTarget?: unknown;
    tree?: boolean;
    dropdown?: Dropdown;
}
