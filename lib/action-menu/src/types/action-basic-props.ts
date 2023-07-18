import type {ComponentChildren, ComponentType, JSX} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import {ActionMenuItemKey} from './action-menu-item-key';

export interface ActionBasicProps {
    rootClass?: ClassNameLike;
    rootAttrs?: JSX.HTMLAttributes<HTMLLIElement>;
    rootStyle?: JSX.CSSProperties;
    rootChildren?: CustomContentType<[ActionBasicProps]>;
    component?: string | ComponentType;
    key?: ActionMenuItemKey;
    type?: string;
    attrs?: JSX.HTMLAttributes<HTMLElement> & {[key: `data-${string}`]: unknown};
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    content?: CustomContentType<[ActionBasicProps]>;
    children?: ComponentChildren;
    onClick?: JSX.MouseEventHandler<HTMLAnchorElement>;
    data?: Record<string, unknown>;
}
