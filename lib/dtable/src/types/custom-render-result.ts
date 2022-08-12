import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {ComponentChildren, JSX} from 'preact';

export type CustomRenderResult = ComponentChildren | {html?: string, style?: JSX.CSSProperties, className?: ClassNameLike, children?: ComponentChildren};

export interface RenderResult {
    children?: ComponentChildren,
    html?: {__html: string},
    style?: JSX.CSSProperties,
    className?: ClassNameLike,
}
