import type {TooltipPlacement} from './tooltip-placement';
import type {ContextMenuPositionStrategy} from '@zui/contextmenu/src/types';

export type TooltipOptions = {
    placement?: TooltipPlacement;
    title?: string;
    className?: string;
    trigger?: 'click' | 'hover';
    arrow?: number;
    type?: string;
    strategy?: ContextMenuPositionStrategy;
};