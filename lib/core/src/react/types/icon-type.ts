import type {JSX, VNode} from 'preact';

export type IconType = string | (JSX.HTMLAttributes<HTMLElement> & {icon: string}) | VNode;
