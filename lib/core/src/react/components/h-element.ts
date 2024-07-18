import {h, Component} from 'preact';
import {nextGid} from '../../helpers/gid';
import {classes} from '../../helpers/classes';
import {getReactComponent} from './components';
import {i18n} from '../../i18n';

import type {JSX, ComponentType, RenderableProps, ComponentChildren} from 'preact';
import type {ClassNameLike} from '../../helpers/classes';
import type {HElementProps} from '../types';
import type {I18nLangMap} from '../../i18n';

/**
 * The base HTML element.
 */
export class HElement<P extends HElementProps, S = {}> extends Component<P, S> {
    static HElement = true;

    static customProps: string[] = [];

    /**
     * The component name.
     * It usually equals to the class name.
     * The name must be provided in subclass.
     */
    static NAME: string;

    /**
     * The component i18n data.
     * It will be merged with global i18n data.
     */
    static i18n: I18nLangMap | undefined;

    /**
     * Access to static properties via this.constructor.
     *
     * @see https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     */
    declare ['constructor']: typeof HElement<P, S>;

    protected _gid = nextGid();

    constructor(props: P) {
        super(props);

        this.state = this.getDefaultState(props);
    }

    get gid() {
        return this._gid;
    }

    get element() {
        return document.querySelector(`[z-gid-${this._gid}]`);
    }

    /**
     * Get the component i18n data.
     */
    get i18nData(): (I18nLangMap | undefined)[] {
        return [this.props.i18n, this.constructor.i18n];
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getDefaultState(_props?: RenderableProps<P>): S {
        return {} as S;
    }

    resetState(props?: RenderableProps<P>, init?: boolean) {
        const defaultState = this.getDefaultState(props);
        if (init) {
            this.state = defaultState;
        } else {
            this.changeState(defaultState);
        }
    }

    /**
     * Get the i18n text.
     *
     * @param key           The i18n key.
     * @param defaultValue  The default value if the key is not found.
     */
    i18n(key: string, defaultValue?: string): string;

    /**
     * Get the i18n text.
     *
     * @param key          The i18n key.
     * @param args         The i18n arguments.
     * @param defaultValue The default value if the key is not found.
     */
    i18n(key: string, args?: (string | number)[], defaultValue?: string): string;

    /**
     * Get the i18n text.
     *
     * @param key          The i18n key.
     * @param args         The i18n arguments.
     * @param defaultValue The default value if the key is not found.
     */
    i18n(key: string, args?: Record<string, string | number>, defaultValue?: string): string;

    /**
     * Get the i18n text.
     *
     * @param key          The i18n key.
     * @param args         The i18n arguments or the default value.
     * @param defaultValue The default value if the key is not found.
     * @returns            The i18n text.
     */
    i18n(key: string, args?: string | (string | number)[] | Record<string, string | number>, defaultValue?: string): string {
        const {i18nData} = this;
        return i18n(i18nData, key, args, defaultValue, this.props.lang, this.constructor.NAME)
            ?? i18n<string>(i18nData, key, args, defaultValue, this.props.lang)
            ?? `{i18n:${key}}`;
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
        const customProps = new Set((this.constructor as typeof HElement).customProps);
        const strDangerouslySetInnerHTML = 'dangerouslySetInnerHTML';
        const other = Object.keys(others).reduce<Record<string, unknown>>((map, key) => {
            if (!customProps.has(key) && (key === strDangerouslySetInnerHTML || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(key))) {
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
