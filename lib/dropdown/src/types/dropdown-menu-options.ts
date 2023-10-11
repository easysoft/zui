import type {Placement} from '@floating-ui/dom';
import type {SearchMenuOptions} from '@zui/menu/src/types';

export interface DropdownMenuOptions extends SearchMenuOptions {
    placement?: Placement;
    relativeTarget?: unknown;
}
