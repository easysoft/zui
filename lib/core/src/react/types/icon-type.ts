import type {JSX, VNode} from 'preact';

/** A CSS icon uses className without a font icon name. */
export type IconClass = JSX.HTMLAttributes<HTMLElement> & {icon?: string};

export type IconType = string | IconClass | VNode;
