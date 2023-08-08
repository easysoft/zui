import type {JSX, ComponentChildren} from 'preact';

export type ProgressBarOptions = {
    className?: string;
    style?: JSX.CSSProperties;
    percent?: number;
    color?: string;
    background?: string;
    height: number;
    width: 'auto' | '100%' | number | ({} & string);
    children?: ComponentChildren;
};
