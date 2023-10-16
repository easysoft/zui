import type {PreactDOMAttributes, JSX, RefObject, ComponentType, Attributes} from 'preact';
import type {ClassNameLike} from '../../helpers/classes';

/**
 * The HTML props that can be passed to a component which root not is a html element.
 */
export interface HElementProps extends PreactDOMAttributes, Attributes {
    /**
     * The component or the HTML element name.
     */
    component?: ComponentType | keyof JSX.IntrinsicElements;

    /**
     * The class name of the element.
     */
    className?: ClassNameLike;


    /**
     * The alternative class name of the element.
     */
    class?: ClassNameLike;

    /**
     * The style of the element.
     */
    style?: JSX.CSSProperties;

    /**
     * The attributes of the element.
     */
    attrs?: Record<string, unknown>;

    /**
     * The component properties.
     */
    props?: Record<string, unknown>;

    /**
     * The extra data.
     */
    data?: unknown;

    /**
     * The ref of the element.
     */
    forwardRef?: RefObject<ComponentType | HTMLElement>;

    /**
     * The other props of the element.
     */
    [dataKey: `data-${string}` | `on${string}` | `zui-${string}`]: unknown;
}
