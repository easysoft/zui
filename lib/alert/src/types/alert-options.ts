import type {ComponentChildren, JSX} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';
import type {ToolbarOptions} from '@zui/toolbar';
import type {ButtonProps} from '@zui/button';

export interface AlertOptions {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    actions: ToolbarOptions | ComponentChildren;
    icon?: ComponentChildren;
    heading?: ComponentChildren;
    content?: ComponentChildren;
    contentClass?: ClassNameLike;
    children?: ComponentChildren;
    close?: boolean | ButtonProps | ComponentChildren;
    onClose?: (event: MouseEvent) => void;
}
