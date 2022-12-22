import {ComponentChildren, JSX} from 'preact';
import {BoundingRect} from './bounding-rect';
import {CellProps} from './cell-props';

export type VirtualGridOptions = {
    cells: CellProps[];
    width: number;
    height: number;
    className?: string;
    left?: number;
    top?: number;
    offsetX?: number;
    offsetY?: number;
    visibleBounding?: BoundingRect;
    style?: JSX.CSSProperties;
    children?: ComponentChildren;
    onRenderCell?: (type?: string, data?: unknown) => ComponentChildren;
    [datasetProp: `data-${string}`]: unknown;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>;
