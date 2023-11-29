import type {Placement} from '@floating-ui/dom';
import type {SearchMenuOptions} from '@zui/menu';

export interface DropdownMenuOptions extends SearchMenuOptions {
    placement?: Placement;
    relativeTarget?: unknown;
    tree?: boolean;
}
