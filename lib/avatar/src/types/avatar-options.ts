import type {JSX, ComponentChildren} from 'preact';
import type {ClassNameLike, IconType} from '@zui/core';

export interface AvatarOptions {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    size?: 'xs' | 'sm' | 'lg' | 'xl' | number;
    circle?: boolean;
    rounded?: boolean | 'sm' | 'md' | 'lg' | number;
    background?: string;
    foreColor?: string;
    icon?: IconType;
    text?: string;
    code?: string | number;
    maxTextLength?: number;
    saturation?: number;
    lightness?: number;
    hueDistance?: number;
    src?: string;
    children?: ComponentChildren | (() => ComponentChildren);
}
