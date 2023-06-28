import {h} from 'preact';
import type {PreactDOMAttributes, JSX, RefObject} from 'preact';
import {ClassNameLike, classes} from '../../helpers/classes';

/**
 * The HTML props that can be passed to a component which root not is a html element.
 */
export interface HElementProps<T extends keyof JSX.IntrinsicElements = 'div', H extends HTMLElement = HTMLDivElement> extends PreactDOMAttributes  {
    /**
     * The tag name of the element.
     */
    tagName?: keyof JSX.IntrinsicElements;

    /**
     * The alternative class name of the element.
     */
    className?: ClassNameLike;

    /**
     * The style of the element.
     */
    style?: JSX.CSSProperties;

    /**
     * The attributes of the element.
     */
    attrs?: JSX.IntrinsicElements[T];

    /**
     * The ref of the element.
     */
    forwardRef?: RefObject<H>;

    /**
     * The other props of the element.
     */
    [attr: string]: unknown;
}

export function HElement(props: HElementProps) {
    const {tagName = 'div', className, style, children, attrs, forwardRef, ...others} = props;
    return h(tagName, {ref: forwardRef, class: classes(className), style, ...others, ...attrs}, children);
}
