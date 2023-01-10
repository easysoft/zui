import type {JSX} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';
import type {Placement, Strategy} from '@floating-ui/core';

export type TimepickerProps = Partial<{
    className: ClassNameLike;
    style: JSX.CSSProperties;
    showSeconds: boolean;
    value: string;
    placement: Placement;
    strategy: Strategy;
    arrow: boolean | number;
    onChange: (value: string) => void;
}>;
