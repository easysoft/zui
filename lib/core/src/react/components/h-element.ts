import {h, Component} from 'preact';
import {nextGid} from '../../helpers/gid';
import {classes} from '../../helpers/classes';
import {getReactComponent} from './components';

import type {JSX, ComponentType, RenderableProps, ComponentChildren} from 'preact';
import type {ClassNameLike} from '../../helpers/classes';
import type {HElementProps} from '../types';

const strDangerouslySetInnerHTML = 'dangerouslySetInnerHTML';

/**
 * The base HTML element.
 */
export class HElement<P extends HElementProps, S = {}> extends Component<P, S> {
    static HElement = true;

    protected _gid = nextGid();

    get gid() {
        return this._gid;
    }

    get element() {
        return document.querySelector(`[z-gid-${this._gid}]`);
    }

    changeState(state: Partial<S> | ((prevState: Readonly<S>) => Partial<S>), callback?: () => void): Promise<S> {
        return new Promise<S>(resolve => {
            this.setState(state, () => {
                callback?.();
                resolve(this.state);
            });
        });
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return props.className;
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        const {className, attrs, props: componentProps, data, forwardRef, children, component, style, class: classNameAlt, ...others} = props;
        const other = Object.keys(others).reduce<Record<string, unknown>>((map, key) => {

            if (key === strDangerouslySetInnerHTML || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(key)) {
                const val = others[key as keyof typeof others];
                map[key] = (key !== strDangerouslySetInnerHTML && val && typeof val === 'object') ? JSON.stringify(val) : val;
            }
            return map;
        }, {});
        return {ref: forwardRef, className: classes(this._getClassName(props), classNameAlt) || undefined, style, [`z-gid-${this._gid}`]: '', ...other, ...attrs, ...componentProps};
    }

    protected _getComponent(props: RenderableProps<P>): ComponentType | keyof JSX.IntrinsicElements {
        const {component = 'div'} = props;
        return (typeof component === 'string' ? getReactComponent(component as string) : component) || component;
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        return props.children;
    }

    protected _beforeRender(props: RenderableProps<P>): RenderableProps<P> | undefined | void {
        return props;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected _onRender(component: ComponentType | keyof JSX.IntrinsicElements, componentProps: Record<string, unknown>, children: ComponentChildren, _props: RenderableProps<P>): [component: ComponentType | keyof JSX.IntrinsicElements, componentProps: Record<string, unknown>, children: ComponentChildren] | void {
        return [component, componentProps, children];
    }

    render(props: RenderableProps<P>) {
        props = this._beforeRender(props) || props;
        let component = this._getComponent(props);
        let children = this._getChildren(props);
        let componentProps = this._getProps(props);
        const renderResult = this._onRender(component, componentProps, children, props);
        if (renderResult) {
            [component, componentProps, children] = renderResult;
        }
        return h(component as ComponentType, componentProps, children);
    }
}
