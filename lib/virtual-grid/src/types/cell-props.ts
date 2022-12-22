import {ComponentType, ComponentChildren, JSX} from 'preact';
import {BoundingRect} from './bounding-rect';

export type CellProps = {
    type?: string;
    key: string | number | symbol;
    className?: string;
    style?: JSX.CSSProperties;
    bounding: BoundingRect;
    offsetX?: number;
    offsetY?: number;
    component?: string | ComponentType;
    data?: unknown;
    title?: string;
    hidden?: boolean;
    props?: Record<string, unknown>;
    children?: ComponentChildren;
    onRender?: (type?: string, data?: unknown) => ComponentChildren;
    [datasetProp: `data-${string}`]: unknown;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'title'>;
