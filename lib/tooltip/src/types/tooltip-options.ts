import type {TooltipPlacement} from './tooltip-placement';
import type {TooltipPositionStrategy} from './tooltip-position-strategy';

export type TooltipOptions = {
    placement?: TooltipPlacement;
    title?: string;
    className?: string;
    trigger?: 'click' | 'hover';
    arrow?: boolean | number;
    type?: string;
    strategy?: TooltipPositionStrategy;
    animation?: boolean;
    html?: boolean;
};
