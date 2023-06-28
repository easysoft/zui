import {ComponentChildren, isValidElement} from 'preact';
import {HtmlContent, HtmlContentProps} from './html-content';
import {HElementProps, HElement} from './h-element';

export type CustomContentStatic = ComponentChildren | HtmlContentProps | HElementProps;

export type CustomContentGenerator<ARGS extends [] = [], THIS = unknown> = (this: THIS | undefined, ...args: ARGS | []) => CustomContentStatic;

export type CustomContentType<ARGS extends [] = [], THIS = unknown> = CustomContentStatic | CustomContentGenerator<ARGS, THIS>;

export type CustomContentProps<ARGS extends [] = [], THIS = unknown> = {
    content: CustomContentType<ARGS, THIS>;
    generatorThis?: THIS;
    generatorArgs?: ARGS;
};

/**
 * Component for rendering custom content.
 *
 * @param props Custom content props.
 * @returns Custom content.
 */
export function CustomContent<ARGS extends [] = [], THIS = unknown>(props: CustomContentProps<ARGS, THIS>) {
    const {content, generatorThis, generatorArgs = []} = props;
    if (typeof content === 'function') {
        return (content as CustomContentGenerator<ARGS, THIS>).call(generatorThis, ...generatorArgs);
    }
    if (typeof content === 'object' && content !== null && !isValidElement(content)) {
        if ((content as HtmlContentProps).html) {
            return <HtmlContent {...content as HtmlContentProps} />;
        }
        return <HElement {...content as HElementProps} />;
    }
    return content;
}
