import type {Placement, Strategy, ShiftOptions, Derivable, VirtualElement} from '@floating-ui/dom';
import type {Selector} from '@zui/core';
import type {PopoverPanelOptions} from './popover-panel-options';

export type PopoverOptions = Omit<PopoverPanelOptions, 'arrow' | 'arrowStyle' | 'onlyInner'> & {
    name?: string;

    /* The panel target element. */
    target?: Selector | (() => HTMLElement);

    /* The trigger element. */
    element?: HTMLElement | VirtualElement;
    width?: number | 'auto' | '100%' | (() => number | 'auto');
    height?: number | (() => number | 'auto');
    limitSize?: boolean;
    container?: Selector;
    trigger?: 'click' | 'hover' | 'manual' | (string & {});
    triggerEvent?: Event;
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
