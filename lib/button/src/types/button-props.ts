import type {ComponentType, ComponentChildren, JSX} from 'preact';
import type {ClassNameLike, IconType} from '@zui/core';

export type ButtonProps = {
    component?: string | ComponentType;
    type?: string; // primary, secondary ...
    btnType?: 'button' | 'submit' | 'reset';
    size?: 'xs' | 'sm' | 'lg' | 'xl',
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren | (() => ComponentChildren);
    onClick?: JSX.MouseEventHandler<HTMLAnchorElement>;
    url?: string;
    target?: string;
    disabled?: boolean;
    rounded?: boolean | string;
    active?: boolean;
    icon?: IconType;
    text?: ComponentChildren;
    square?: boolean;
    trailingIcon?: IconType;
    caret?: 'up' | 'down' | 'left' | 'right' | boolean;
    hint?: string;
    loading?: boolean;
    loadingIcon?: IconType;
    loadingText?: string;
};
