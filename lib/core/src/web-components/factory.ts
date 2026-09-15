import {h, render} from 'preact';
import {Component} from '../component/component';
import {ComponentElement} from './component-element';

import type {ComponentType} from 'preact';
import type {ElementComponentOptions} from './component-element';
import type {ZuiElement} from './element';
import type {ElementProperty} from './properties';

export type WebComponentInstance<P extends object, G extends object = object> = ZuiElement<P> & P & Readonly<G>;

export type WebComponentConstructor<P extends object, G extends object = object> = {
    new(): WebComponentInstance<P, G>;
    readonly properties: Record<string, ElementProperty>;
    define(name: string): void;
};

/** Native ComponentFromReact subclasses also satisfy this constructor contract. */
export type WebComponentNativeComponent<O extends object> = new(container: HTMLElement, options: ElementComponentOptions<O>) => Component<O>;

export type WebComponentContext<P extends object, G extends object = object> = {
    readonly element: WebComponentInstance<P, G>;
    /** Synchronize properties/attributes without synthesizing user events. */
    set(options: Partial<P>): void;
    emit<T>(name: string, detail: T, cancelable?: boolean): boolean;
    accessibleAttributes(): Record<string, string>;
};

export type WebComponentConfig<P extends object, O extends object = P, G extends object = object> = {
    /** Opt in to automatic definition when the owning Component is registered. */
    autoDefine?: boolean;
    /** Defaults to zui-<kebab-case Component.NAME> during Component.register(). */
    tagName?: string;
    component: ComponentType<O> | WebComponentNativeComponent<O>;
    properties: {[K in keyof P]-?: ElementProperty<P[K]>};
    getters?: {[K in keyof G]: (props: Readonly<P>) => G[K]};
    /** Omit when element properties can be passed to the component unchanged. */
    options?: (props: Readonly<P>, context: WebComponentContext<P, G>) => O;
};

/** The common registration metadata, independent of each library's option types. */
export type WebComponentRegistration = {
    autoDefine?: boolean;
    tagName?: string;
    component: unknown;
    properties: Record<string, ElementProperty>;
};

const constructors = new WeakMap<object, CustomElementConstructor>();

/** Create once per configuration object. Component inheritance selects the renderer. */
export function createWebComponent<P extends object, O extends object = P, G extends object = object>(config: WebComponentConfig<P, O, G>): WebComponentConstructor<P, G> {
    const cached = constructors.get(config);
    if (cached) {
        return cached as unknown as WebComponentConstructor<P, G>;
    }
    // This check runs after module initialization, including Component's own definition.
    const native = config.component === Component || config.component.prototype instanceof Component;
    class ConfiguredElement extends ComponentElement<P, O> {
        static properties = config.properties;

        private _context: WebComponentContext<P, G> = {
            element: this as unknown as WebComponentInstance<P, G>,
            set: (options) => {
                for (const name of Object.keys(options)) {
                    if (!Object.hasOwn(config.properties, name)) {
                        throw new TypeError(`[ZUI] Unknown element option: ${name}`);
                    }
                }
                for (const [name, value] of Object.entries(options)) {
                    this._setProperty(name, value, 'internal');
                }
            },
            emit: (name, detail, cancelable) => this._emit(name, detail, cancelable),
            accessibleAttributes: () => this._accessibleAttributes(),
        };

        private _options(): O {
            return config.options ? config.options(this.options, this._context) : this.options as unknown as O;
        }

        protected _componentOptions(): ElementComponentOptions<O> {
            return this._options() as ElementComponentOptions<O>;
        }

        protected _createComponent(container: HTMLElement, options: ElementComponentOptions<O>): Component<O> {
            const Constructor = config.component as WebComponentNativeComponent<O>;
            return new Constructor(container, options);
        }

        protected _render(): void {
            if (native) {
                super._render();
            } else {
                render(h(config.component as ComponentType<O>, this._options()), this._container!);
                this._markReady();
            }
        }

        protected _destroy(): void {
            if (native) {
                super._destroy();
            } else if (this._container) {
                render(null, this._container);
            }
        }
    }
    for (const [name, getter] of Object.entries(config.getters ?? {})) {
        if (name in ConfiguredElement.prototype || Object.hasOwn(config.properties, name)) {
            throw new Error(`[ZUI] Element getter conflicts with an existing property: ${name}`);
        }
        Object.defineProperty(ConfiguredElement.prototype, name, {
            get(this: ZuiElement<P>) {
                return (getter as (props: Readonly<P>) => unknown)(this.options);
            },
        });
    }
    constructors.set(config, ConfiguredElement);
    return ConfiguredElement as unknown as WebComponentConstructor<P, G>;
}

/** Define a configured element; repeated calls reuse the same constructor. */
export function defineWebComponent<P extends object, O extends object = P, G extends object = object>(config: WebComponentConfig<P, O, G>, name = config.tagName): WebComponentConstructor<P, G> {
    if (!name) {
        throw new Error('[ZUI] A custom element tagName is required.');
    }
    const Element = createWebComponent(config);
    Element.define(name);
    return Element;
}
