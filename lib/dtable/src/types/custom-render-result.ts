import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {ComponentChildren, JSX} from 'preact';

export type CustomRenderResult = ComponentChildren | {html?: string, style?: JSX.CSSProperties, className?: ClassNameLike, children?: ComponentChildren};

export interface RenderResult {
    children?: ComponentChildren,
    html?: {__html: string},
    style?: JSX.CSSProperties,
    className?: ClassNameLike,
}

export function parseRenderResult(customResult: CustomRenderResult): RenderResult {
    const result: RenderResult = {};
    if (typeof customResult === 'object' && customResult && ('html' in customResult || 'children' in customResult)) {
        const {html, children, style, className} = customResult;
        if (html) {
            result.html = {__html: html};
        } else if (children) {
            result.children = children;
        }
        result.style = style;
        result.className = className;
    } else {
        result.children = customResult;
    }
    return result;
}
