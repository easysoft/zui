import {ComponentChildren, isValidElement, VNode} from 'preact';
import {HtmlContent, HtmlContentProps} from './html-content';
import {HElementProps, HElement} from './h-element';

export type CustomContentStatic = ComponentChildren | HtmlContentProps | HElementProps;

export type CustomContentGenerator<ARGS extends unknown[] = unknown[], THIS = unknown> = (this: THIS | undefined, ...args: ARGS | []) => CustomContentStatic;

export type CustomContentType<ARGS extends unknown[] = unknown[], THIS = unknown> = CustomContentStatic | CustomContentGenerator<ARGS, THIS>;

export type CustomContentProps<ARGS extends unknown[] = unknown[], THIS = unknown> = {
    content: CustomContentType<ARGS, THIS> | CustomContentType<ARGS, THIS>[];
    generatorThis?: THIS;
    generatorArgs?: ARGS;
};

export function renderCustomContent<ARGS extends unknown[] = unknown[], THIS = unknown>(
    content: CustomContentType<ARGS, THIS> | CustomContentType<ARGS, THIS>[],
    generatorThis?: THIS,
    generatorArgs?: ARGS,
): ComponentChildren {
    if (typeof content === 'function') {
        return (content as CustomContentGenerator<ARGS, THIS>).call(generatorThis, ...(generatorArgs as ARGS));
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
export function CustomContent<ARGS extends unknown[] = unknown[], THIS = unknown>(props: CustomContentProps<ARGS, THIS>): VNode | null {
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
