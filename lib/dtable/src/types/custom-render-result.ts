import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {ComponentChildren, JSX} from 'preact';

export type CustomRenderResult = ({html?: string, style?: JSX.CSSProperties, className?: ClassNameLike, cellStyle?: JSX.CSSProperties, cellClass?: ClassNameLike} | ComponentChildren)[];
