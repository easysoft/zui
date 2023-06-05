import {Placement, Strategy, shift} from '@floating-ui/core';

export type PopoversOptions = Partial<{
    placement: Placement;
    strategy: Strategy;
    flip: boolean;
    shift: boolean | Parameters<typeof shift>[0];
    arrow: boolean;
    offset: number;
}>;
