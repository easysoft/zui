import {h, Component} from 'preact';
import type {PreactDOMAttributes, JSX, RefObject, ComponentType, RenderableProps, ComponentChildren} from 'preact';
import {ClassNameLike, classes} from '../../helpers/classes';

/**
 * The HTML props that can be passed to a component which root not is a html element.
 */
export interface HElementProps extends PreactDOMAttributes {
    /**
     * The component or the HTML element name.
     */
    component?: ComponentType | keyof JSX.IntrinsicElements;

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
    attrs?: Record<string, unknown>;

    /**
     * The extra data.
     */
    data?: Record<string, unknown>;

    /**
     * The ref of the element.
     */
    forwardRef?: RefObject<ComponentType | HTMLElement>;

    /**
     * The other props of the element.
     */
    [dataKey: `data-${string}`]: unknown;
}

export class HElement<P extends HElementProps, S = {}> extends Component<P, S> {
    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return props.className;
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        const {className, attrs, data, forwardRef, children, style, ...others} = props;
        const other = Object.keys(others).reduce<Record<string, unknown>>((map, key) => {
            if (key === 'dangerouslySetInnerHTML' || key.startsWith('data-')) {
                map[key] = others[key as keyof typeof others];
            }
            return map;
        }, {});
        return {ref: forwardRef, class: classes(this._getClassName(props)), style, ...other, ...attrs};
    }

    protected _getComponent(props: RenderableProps<P>): ComponentType | keyof JSX.IntrinsicElements {
        return props.component || 'div';
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        return props.children;
    }

    protected _beforeRender(props: RenderableProps<P>): RenderableProps<P> | undefined | void {
        return props;
    }

    render(props: RenderableProps<P>) {
        props = this._beforeRender(props) || props;
        return h(this._getComponent(props) as ComponentType, this._getProps(props), this._getChildren(props));
    }
}
