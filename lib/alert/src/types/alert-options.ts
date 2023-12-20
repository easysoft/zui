import type {ComponentChildren, JSX} from 'preact';
import type {ClassNameLike, CustomContentType, IconType} from '@zui/core';
import type {ToolbarSetting} from '@zui/toolbar';
import type {ButtonProps} from '@zui/button';

export interface AlertOptions {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    actions?: ToolbarSetting;
    icon?: IconType;
    iconClass?: string;
    heading?: CustomContentType;
    content?: CustomContentType;
    contentClass?: ClassNameLike;
    children?: ComponentChildren;
    close?: boolean | ButtonProps | ComponentChildren;
    onClose?: (event: MouseEvent) => void;
}
