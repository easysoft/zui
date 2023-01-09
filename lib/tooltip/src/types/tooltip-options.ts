import type {Strategy, Placement} from '@floating-ui/dom';

export type TooltipOptions = Partial<{
    title: string;
    className: string;
    trigger: 'click' | 'hover';
    arrow: boolean | number;
    type: string;
    placement: Placement;
    strategy: Strategy;
    animation: boolean;
    html: boolean;
}>;
