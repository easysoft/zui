import type {JSX, ComponentChildren} from '@zui/core';

export type ProgressCircleOptions = {
    className?: string;
    percent?: number;
    size?: number;
    circleWidth?: number;
    circleBg: string;
    circleColor: string;
    text?: string | boolean;
    textStyle?: string | JSX.CSSProperties;
    textX?: number;
    textY?: number;
    children?: ComponentChildren;
};
