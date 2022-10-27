import type {ComponentChildren, ComponentType, JSX} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';

export interface ActionBasicProps {
    rootClass?: ClassNameLike;
    rootAttrs?: JSX.HTMLAttributes<HTMLLIElement>;
    rootStyle?: JSX.CSSProperties;
    component?: string | ComponentType;
    key?: string | number | symbol;
    type?: string;
    attrs?: JSX.HTMLAttributes<HTMLLIElement>;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren | (() => ComponentChildren);
    onClick?: JSX.MouseEventHandler<HTMLAnchorElement>;
}
