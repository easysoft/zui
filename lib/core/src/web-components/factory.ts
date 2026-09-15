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

type WebComponentTarget<O extends object> = ComponentType<O> | WebComponentNativeComponent<O>;

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
    /** Defaults to zui-<kebab-case source.NAME> when a named component is supplied. */
    tagName?: string;
    /** Inferred from the component argument when omitted; required for standalone configurations. */
    component?: WebComponentTarget<O>;
    properties: {[K in keyof P]-?: ElementProperty<P[K]>};
    getters?: {[K in keyof G]: (props: Readonly<P>) => G[K]};
    /** Omit when element properties can be passed to the component unchanged. */
    options?: (props: Readonly<P>, context: WebComponentContext<P, G>) => O;
};

/** The common registration metadata, independent of each library's option types. */
export type WebComponentRegistration = {
    autoDefine?: boolean;
    tagName?: string;
    component?: unknown;
    properties: Record<string, ElementProperty>;
};

/** A Component class with its library-owned configuration and default renderer. */
export type WebComponentOwner<P extends object, O extends object = P, G extends object = object> = {
    new(...args: never[]): object;
    readonly NAME: string;
    readonly WebComponent: WebComponentConfig<P, O, G>;
    readonly WebComponentRenderer: unknown;
};

type WebComponentSource<P extends object, O extends object, G extends object> = WebComponentConfig<P, O, G> | WebComponentOwner<P, O, G>;

type ResolvedWebComponent<P extends object, O extends object, G extends object> = {
    config: WebComponentConfig<P, O, G>;
    component: unknown;
    sourceName?: string;
    cacheSource: object;
    cacheKey: object;
};

const constructors = new WeakMap<object, WeakMap<object, CustomElementConstructor>>();

function resolveSource<P extends object, O extends object, G extends object>(source: WebComponentSource<P, O, G> | WebComponentTarget<O>, externalConfig?: WebComponentConfig<P, O, G>): ResolvedWebComponent<P, O, G> {
    if (typeof source !== 'function') {
        return {config: source, component: source.component, cacheSource: source, cacheKey: source};
    }
    const owner = source as Partial<WebComponentOwner<P, O, G>>;
    const declaredConfig = owner.WebComponent;
    const config = externalConfig && declaredConfig ? {...declaredConfig, ...externalConfig} : externalConfig ?? declaredConfig;
    if (!config) {
        throw new TypeError('[ZUI] The component must declare a WebComponent configuration or receive one explicitly.');
    }
    return {
        config,
        component: config.component ?? ('WebComponentRenderer' in source ? owner.WebComponentRenderer : source),
        sourceName: owner.NAME,
        // External overrides are keyed by their original identity, never the merged object.
        // Inferred renderers also keep inherited configurations local to each owning class.
        cacheSource: externalConfig !== undefined || config.component === undefined ? source : config,
        cacheKey: externalConfig ?? config,
    };
}

function createResolvedWebComponent<P extends object, O extends object, G extends object>({config, component, cacheSource, cacheKey}: ResolvedWebComponent<P, O, G>): WebComponentConstructor<P, G> {
    let cache = constructors.get(cacheSource);
    const cached = cache?.get(cacheKey);
    if (cached) {
        return cached as unknown as WebComponentConstructor<P, G>;
    }
    if (typeof component !== 'function') {
        throw new TypeError('[ZUI] A WebComponent component is required; supply component or an owning class with a renderer.');
    }
    // This check runs after module initialization, including Component's own definition.
    const native = component === Component || component.prototype instanceof Component;
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
            const Constructor = component as WebComponentNativeComponent<O>;
            return new Constructor(container, options);
        }

        protected _render(): void {
            if (native) {
                super._render();
            } else {
                render(h(component as ComponentType<O>, this._options()), this._container!);
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
    if (!cache) {
        cache = new WeakMap();
        constructors.set(cacheSource, cache);
    }
    cache.set(cacheKey, ConfiguredElement);
    return ConfiguredElement as unknown as WebComponentConstructor<P, G>;
}

/** Create from a configuration, a configured owner, or a component with external configuration. */
export function createWebComponent<P extends object, O extends object = P, G extends object = object>(source: WebComponentSource<P, O, G>): WebComponentConstructor<P, G>;
export function createWebComponent<P extends object, O extends object = P, G extends object = object>(source: WebComponentTarget<O> | WebComponentOwner<NoInfer<P>, O, NoInfer<G>>, config: WebComponentConfig<P, O, G>): WebComponentConstructor<P, G>;
export function createWebComponent<P extends object, O extends object = P, G extends object = object>(source: WebComponentSource<P, O, G> | WebComponentTarget<O>, config?: WebComponentConfig<P, O, G>): WebComponentConstructor<P, G> {
    return createResolvedWebComponent(resolveSource(source, config));
}

/** Define when a registry is available, using the explicit name, config.tagName, or the component's NAME. */
export function defineWebComponent<P extends object, O extends object = P, G extends object = object>(source: WebComponentSource<P, O, G>, name?: string): WebComponentConstructor<P, G>;
export function defineWebComponent<P extends object, O extends object = P, G extends object = object>(source: WebComponentTarget<O> | WebComponentOwner<NoInfer<P>, O, NoInfer<G>>, config: WebComponentConfig<P, O, G>, name?: string): WebComponentConstructor<P, G>;
export function defineWebComponent<P extends object, O extends object = P, G extends object = object>(source: WebComponentSource<P, O, G> | WebComponentTarget<O>, configOrName?: WebComponentConfig<P, O, G> | string, name?: string): WebComponentConstructor<P, G> {
    const resolved = resolveSource(source, typeof configOrName === 'object' ? configOrName : undefined);
    const {config, sourceName} = resolved;
    name ??= typeof configOrName === 'string' ? configOrName : config.tagName ?? (sourceName ? `zui-${sourceName
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}` : undefined);
    if (!name) {
        throw new Error('[ZUI] A custom element tagName is required.');
    }
    const Element = createResolvedWebComponent(resolved);
    // Standalone definitions may be imported where the Custom Elements API is unavailable.
    if (typeof customElements !== 'undefined') {
        Element.define(name);
    }
    return Element;
}
