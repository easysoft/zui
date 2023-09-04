import {h, Component} from 'preact';
import {classes} from '../../helpers/classes';

import type {JSX, ComponentType, RenderableProps, ComponentChildren} from 'preact';
import type {ClassNameLike} from '../../helpers/classes';
import type {HElementProps} from '../types';

/**
 * The base class of the HTML element.
 */
export class HElement<P extends HElementProps, S = {}> extends Component<P, S> {
    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return [props.className, props.class];
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        const {className, class: className2, attrs, data, forwardRef, children, component, style, ...others} = props;
        const other = Object.keys(others).reduce<Record<string, unknown>>((map, key) => {
            if (key === 'dangerouslySetInnerHTML' || /^(on[A-Z]|data-|zui-)[a-zA-Z-]+/.test(key)) {
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

    protected _onRender(component: ComponentType | keyof JSX.IntrinsicElements, props: Record<string, unknown>, children: ComponentChildren): [component: ComponentType | keyof JSX.IntrinsicElements, props: Record<string, unknown>, children: ComponentChildren] | void {
        return [component, props, children];
    }

    render(props: RenderableProps<P>) {
        props = this._beforeRender(props) || props;
        let component = this._getComponent(props);
        let componentProps = this._getProps(props);
        let children = this._getChildren(props);
        const renderResult = this._onRender(component, componentProps, children);
        if (renderResult) {
            [component, componentProps, children] = renderResult;
        }
        return h(component as ComponentType, componentProps, children);
    }
}
