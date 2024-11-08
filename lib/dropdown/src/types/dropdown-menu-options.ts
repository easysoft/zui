import type {Placement, ShiftOptions, Derivable, OffsetOptions} from '@floating-ui/dom';
import type {SearchMenuOptions} from '@zui/menu';
import type {Dropdown} from '../vanilla';

export interface DropdownMenuOptions extends SearchMenuOptions {
    placement?: Placement;
    relativeTarget?: unknown;
    tree?: boolean;
    dropdown?: Dropdown;
    flip?: boolean;
    shift?: boolean | ShiftOptions | Derivable<ShiftOptions>;
    offset?: OffsetOptions;
}
