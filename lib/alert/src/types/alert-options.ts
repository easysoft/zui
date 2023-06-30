import type {ComponentChildren, JSX} from 'preact';
import type {ClassNameLike, IconType} from '@zui/core';
import type {ToolbarOptions} from '@zui/toolbar';
import type {ButtonProps} from '@zui/button';

export interface AlertOptions {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    actions?: ToolbarOptions | ComponentChildren;
    icon?: IconType;
    heading?: ComponentChildren;
    content?: ComponentChildren;
    contentClass?: ClassNameLike;
    children?: ComponentChildren;
    close?: boolean | ButtonProps | ComponentChildren;
    onClose?: (event: MouseEvent) => void;
}
