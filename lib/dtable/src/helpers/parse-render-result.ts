import {CustomRenderResult, RenderResult} from '../types/custom-render-result';

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
