import {isValidElement} from 'preact';
import {HtmlContent} from './html-content';
import {HElement} from './h-element';

import type {ComponentChildren, VNode} from 'preact';
import type {HtmlContentProps, HElementProps, CustomContentType, CustomContentGenerator, CustomContentProps} from '../types';
import {mergeProps} from '../../helpers';

/**
 * Render custom content.
 *
 * @param content  The content to render.
 * @param generatorThis  The `this` value to use when calling the generator.
 * @param generatorArgs  The arguments to pass to the generator.
 * @returns The rendered content.
 */
export function renderCustomContent(props: CustomContentProps): ComponentChildren {
    const {content: contentSetting, generatorArgs, generatorThis, ...others} = props;
    let content = contentSetting;
    if (typeof content === 'function') {
        content = (content as CustomContentGenerator).call(generatorThis, ...(generatorArgs || []));
    }
    if (Array.isArray(content)) {
        return content.map((x) => renderCustomContent({...others, content: x, generatorThis, generatorArgs}));
    }
    if (typeof content === 'object' && (typeof (content as HtmlContentProps).html === 'string' || (content as HtmlContentProps).component)) {
        if ((content as HtmlContentProps).html) {
            return <HtmlContent {...(mergeProps(others, content) as unknown as HtmlContentProps)} />;
        }
        let {children} = content as HElementProps;
        if (children) {
            children = Array.isArray(children) ? children : [children];
            content = mergeProps({children: (children as CustomContentType[]).map((x) => renderCustomContent({...others, content: x, generatorThis, generatorArgs}))}, content);
        }
        return <HElement {...(mergeProps(others, content) as unknown as HElementProps)} />;
    }
    if (isValidElement(content) || typeof content === 'string' || typeof content === 'number') {
        return content;
    }
    if (content) {
        console.groupCollapsed('[ZUI] CustomContent format error');
        console.trace('content:', content);
        console.log('props:', props);
        console.groupEnd();
    }
    return null;
}

/**
 * Component for rendering custom content.
 *
 * @param props Custom content props.
 * @returns Custom content.
 */
export function CustomContent(props: CustomContentProps): VNode | null {
    const result = renderCustomContent(props);
    if (result === undefined || result === null || typeof result === 'boolean') {
        return null;
    }
    if (isValidElement(result)) {
        return result;
    }
    return <>{result}</>;
}
