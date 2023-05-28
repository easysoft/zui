import {PreactDOMAttributes, h} from 'preact';
import type {JSX} from 'preact';
import {ClassNameLike, classes} from '../../helpers/classes';

/**
 * The HTML props that can be passed to a component which root not is a html element.
 */
export interface HElementProps<T extends keyof JSX.IntrinsicElements = 'div'> extends PreactDOMAttributes  {
    /**
     * The tag name of the element.
     */
    tagName?: keyof JSX.IntrinsicElements;

    /**
     * The class name of the element.
     */
    class?: ClassNameLike;

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
     * The other props of the element.
     */
    [attr: string]: unknown;
}

export function HElement(props: HElementProps) {
    const {tagName = 'div', class: classN, className, style, children, attrs, ...others} = props;
    return h(tagName, {class: classes(classN, className), style, ...others, ...attrs}, children);
}
