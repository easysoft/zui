import type {ComponentType, ComponentChildren, JSX, VNode} from 'preact';
import {ClassNameLike} from '../../../browser-helpers/src/classes';

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
    active?: boolean;
    icon?: string | VNode;
    text?: ComponentChildren;
    square?: boolean;
    trailingIcon?: string | VNode;
    caret?: 'up' | 'down' | 'left' | 'right' | boolean;
    hint?: string;
    loading?: boolean;
    loadingIcon?: string;
    loadingText?: string;
};
