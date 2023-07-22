import type {Placement, Strategy, ShiftOptions, Derivable, VirtualElement} from '@floating-ui/core';
import type {Selector} from '@zui/core';
import type {PopoverPanelOptions} from './popover-panel-options';

export type PopoverOptions = Omit<PopoverPanelOptions, 'arrow' | 'arrowStyle' | 'onlyInner'> & {
    name?: string;

    /* The panel target element. */
    target?: Selector | (() => HTMLElement);

    /* The trigger element. */
    element?: Selector | VirtualElement | (() => (Selector | VirtualElement));
    width?: number | 'auto' | '100%' | (() => number | 'auto');
    container?: Selector;
    trigger?: 'click' | 'hover' | 'manual';
    placement?: Placement;
    strategy?: Strategy;
    flip?: boolean;
    shift?: boolean | ShiftOptions | Derivable<ShiftOptions>;
    arrow?: boolean | number;
    offset?: number;
    mask?: boolean;
    delay?: number;
    show?: boolean | number;
    animation?: boolean | string;
    destroyOnHide?: boolean | number;

    onShow?: () => void;
    onShown?: () => void;
    onHide?: () => void;
    onHidden?: () => void;
};
