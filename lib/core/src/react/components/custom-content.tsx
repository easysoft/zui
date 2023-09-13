import {isValidElement} from 'preact';
import {HtmlContent} from './html-content';
import {HElement} from './h-element';
import {registerComponent} from './components';

import type {ComponentChildren, VNode} from 'preact';
import type {HtmlContentProps, HElementProps, CustomContentType, CustomContentGenerator, CustomContentProps} from '../types';

/**
 * Render custom content.
 *
 * @param content  The content to render.
 * @param generatorThis  The `this` value to use when calling the generator.
 * @param generatorArgs  The arguments to pass to the generator.
 * @returns The rendered content.
 */
export function renderCustomContent(
    content: CustomContentType | CustomContentType[],
    generatorThis?: unknown,
    generatorArgs?: unknown[],
): ComponentChildren {
    if (typeof content === 'function') {
        return (content as CustomContentGenerator).call(generatorThis, ...(generatorArgs || []));
    }
    if (Array.isArray(content)) {
        return content.map((x) => renderCustomContent(x, generatorThis, generatorArgs));
    }
    if (isValidElement(content) || content === null) {
        return content;
    }
    if (typeof content === 'object') {
        if ((content as HtmlContentProps).html) {
            return <HtmlContent {...content as HtmlContentProps} />;
        }
        return <HElement {...content as HElementProps} />;
    }
    return content;
}

/**
 * Component for rendering custom content.
 *
 * @param props Custom content props.
 * @returns Custom content.
 */
export function CustomContent(props: CustomContentProps): VNode | null {
    const {content, generatorThis, generatorArgs} = props;
    const result = renderCustomContent(content, generatorThis, generatorArgs);
    if (result === undefined || result === null || typeof result === 'boolean') {
        return null;
    }
    if (isValidElement(result)) {
        return result;
    }
    return <>{result}</>;
}
