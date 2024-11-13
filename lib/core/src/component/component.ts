import {I18nLangMap, i18n} from '../i18n';
import {$} from '../cash';
import {nextGid} from '../helpers';
import {isElementDetached} from '../dom/is-detached';

import type {Cash, Element, Selector} from '../cash';
import type {ComponentEventArgs, ComponentEventName, ComponentOptions, ComponentEvents, ComponentEventsDefnition, ComponentToggleConfig} from './types';

/**
 * The event callback for component.
 */
export type ComponentEventCallback<E extends ComponentEventsDefnition, O extends {}, N extends ComponentEventName<E>> = (event: N extends keyof HTMLElementEventMap ? HTMLElementEventMap[N] : Event, args: [Component<O, E>, ComponentEventArgs<E, N>]) => void | false;

/**
 * The component base class.
 */
export class Component<O extends {} = {}, E extends ComponentEventsDefnition = {}, U extends HTMLElement = HTMLElement> {
    /**
     * The default options.
     */
    static DEFAULT = {};

    /**
     * The component name.
     * It usually equals to the class name.
     * The name must be provided in subclass.
     */
    static NAME: string;

    /**
     * Whether the component supports multiple instances.
     */
    static MULTI_INSTANCE = false;

    /**
     * The component i18n data.
     * It will be merged with global i18n data.
     */
    static i18n: I18nLangMap | undefined;

    /**
     * The component toggle config.
     */
    static toggle: ComponentToggleConfig | undefined;

    /**
     * ZUI name
     */
    static get ZUI() {
        return this.NAME.replace(/(^[A-Z]+)/, (match) => match.toLowerCase());
    }

    /**
     * Component data key, like "zui.menu"
     */
    static get KEY(): `zui.${string}` {
        return `zui.${this.NAME}`;
    }

    /**
     * Component namespace, like ".zui.menu"
     */
    static get NAMESPACE(): `.zui.${string}` {
        return `.zui.${this.ZUI}`;
    }

    /**
     * @deprecated Use ATTR_KEY instead.
     */
    static get DATA_KEY(): `data-zui-${string}` {
        return `data-zui-${this.NAME}`;
    }

    /**
     * Component attribute key, like "z-use-menu"
     */
    static get ATTR_KEY(): `z-use-${string}` {
        return `z-use-${this.NAME}`;
    }

    /**
     * The component default selector.
     */
    static get SELECTOR() {
        return `[${this.DATA_KEY}]`;
    }

    /**
     * Access to static properties via this.constructor.
     *
     * @see https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     */
    declare ['constructor']: typeof Component<O, E, U>;

    /**
     * Store the component options.
     */
    private _options?: ComponentOptions<O>;

    /**
     * Store the component element.
     */
    private _element?: U;

    /**
     * The component global ID.
     */
    private _gid: number;

    /**
     * The component key.
     */
    protected _key: string | number;

    /**
     * The component initialized flag.
     */
    private _inited = false;

    /**
     * Auto destroy flag.
     */
    private _autoDestory = 0;

    /**
     * The component destroyed flag.
     */
    protected _destroyed = false;

    /**
     * The component constructor.
     *
     * @param options The component initial options.
     */
    constructor(selector: Selector, options?: Partial<ComponentOptions<O>>) {
        const {KEY, DATA_KEY, MULTI_INSTANCE, NAME, ATTR_KEY, ALL, TYPED_ALL} = this.constructor;

        if (!NAME) {
            throw new Error('[ZUI] The component must have a "NAME" static property.');
        }

        const $element = $(selector);
        if ($element.data(KEY) && !MULTI_INSTANCE) {
            throw new Error(`[ZUI] The component "${NAME}" has been initialized on element.`);
        }

        const element = $element[0] as U;
        const gid = nextGid();
        this._gid = gid;
        this._element = element;

        this.resetOptions(options);
        this._key = this.options.key ?? `__${gid}`;

        let all = ALL.get(element);
        if (all) {
            all.add(this);
        } else {
            all = new Set([this]);
            ALL.set(element, all);
        }

        if (TYPED_ALL.has(NAME)) {
            TYPED_ALL.get(NAME)!.add(this);
        } else {
            TYPED_ALL.set(NAME, new Set([this]));
        }

        $element.data(KEY, this).attr(ATTR_KEY, '').attr(DATA_KEY, `${gid}`).attr('z-use', [...new Set([...all].map(x => x.constructor.NAME))].join(','));
        if (MULTI_INSTANCE) {
            const dataName = `${KEY}:ALL`;
            let instanceMap: Map<string | number, Component> | undefined = $element.data(dataName);
            if (!instanceMap) {
                instanceMap = new Map();
                $element.data(dataName, instanceMap);
            }
            instanceMap.set(this._key, this);
        }

        this.init();
        this.options.$onCreate?.call(this);
        requestAnimationFrame(async () => {
            this._inited = true;
            await this.afterInit();
            this.emit('inited', this.options);
            this.options.$onInited?.call(this);
        });
    }

    /**
     * Get the component initialized flag.
     */
    get inited() {
        return this._inited;
    }

    /**
     * Get the component destroyed flag.
     */
    get destroyed() {
        return this._destroyed;
    }

    /**
     * Get the component element.
     */
    get element() {
        return this._element!;
    }

    get key() {
        return this._key;
    }

    /**
     * Get the component options.
     */
    get options() {
        return this._options!;
    }

    /**
     * Get the component global id.
     */
    get gid() {
        return this._gid;
    }

    /**
     * Get the component element as a jQuery like object.
     */
    get $element() {
        return $(this.element);
    }

    /**
     * Get the component event emitter.
     */
    get $emitter() {
        return this.$element;
    }

    /**
     * Get the component i18n data.
     */
    get i18nData(): (I18nLangMap | undefined)[] {
        return [this.options.i18n, this.constructor.i18n];
    }

    /**
     * Initialize the component.
     */
    init() {}

    /**
     * Do something after the component initialized.
     */
    afterInit(): void | Promise<void> {}

    /**
     * Render the component.
     *
     * @param options The component options to override before render.
     */
    render(options?: Partial<ComponentOptions<O>>, reset?: boolean) {
        this.setOptions(options, reset);
    }

    /**
     * Destroy the component.
     */
    destroy() {
        const {KEY, DATA_KEY, ALL, TYPED_ALL, NAME, MULTI_INSTANCE, ATTR_KEY} = this.constructor;
        const {$element, element} = this;

        (this.emit as ((event: string, ...args: unknown[]) => void))('destroyed');

        this._destroyed = true;

        $element
            .off(this.namespace)
            .removeData(KEY)
            .removeAttr(ATTR_KEY)
            .removeAttr(DATA_KEY);

        if (MULTI_INSTANCE) {
            const map = this.$element.data(`${KEY}:ALL`) as Map<string | number, Component<O, E>>;
            if (map) {
                map.delete(this._key);
                if (map.size === 0) {
                    this.$element.removeData(`${KEY}:ALL`);
                } else {
                    const nextInstance =  map.values().next().value;
                    $element.data(KEY, nextInstance).attr(DATA_KEY, String(nextInstance?.gid));
                }
            }
        }

        const map = ALL.get(element);
        if (map) {
            map.delete(this);
            if (map.size === 0) {
                ALL.delete(element);
            }
        }

        const typedMap = TYPED_ALL.get(NAME);
        if (typedMap) {
            typedMap.delete(this);
            if (typedMap.size === 0) {
                TYPED_ALL.delete(NAME);
            }
        }

        const useAll = ALL.get(element);
        if (!useAll?.size) {
            $element.removeAttr('z-use');
        } else {
            $element.attr('z-use', [...new Set([...useAll].map(x => x.constructor.NAME))].join(','));
        }

        this.options.$onDestroy?.call(this);
    }

    /**
     * Auto destroy the component when detached.
     */
    autoDestroy(delay = 100) {
        if (this._autoDestory) {
            clearTimeout(this._autoDestory);
        }
        this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0;
            if (isElementDetached(this.element)) {
                this.destroy();
            }
        }, delay);
    }

    /**
     * Set the component options.
     *
     * @param options  The component options to set.
     * @returns The component options.
     */
    setOptions(options?: Partial<ComponentOptions<O>>, reset?: boolean): ComponentOptions<O> {
        if (reset) {
            const finalOptions = {
                ...this.constructor.DEFAULT,
                ...(options?.$optionsFromDataset !== false ? this.$element.dataset() : {}),
                ...options,
            } as ComponentOptions<O>;
            const {$options} = finalOptions;
            if ($options) {
                const extraOptions = typeof $options === 'function' ? $options.call(this, this.element, finalOptions) : $options;
                if (extraOptions) {
                    $.extend(finalOptions, extraOptions);
                }
                delete finalOptions.$options;
            }
            this._options = finalOptions;
        } else if (options) {
            $.extend(this._options, options);
        }
        return this._options!;
    }

    resetOptions(options?: Partial<ComponentOptions<O>>) {
        return this.setOptions(options, true);
    }

    /**
     * Emit a component event.
     * @param event  The event name.
     * @param args   The event arguments.
     */
    emit<N extends ComponentEventName<E>>(event: N, ...args: ComponentEventArgs<E, N>): Event {
        const eventObject = $.Event(event);
        (eventObject as unknown as {__src?: unknown}).__src = this;
        this.$emitter.trigger(eventObject, [this, ...args]);
        return eventObject as unknown as Event;
    }

    /**
     * Listen to a component event.
     *
     * @param event     The event name.
     * @param callback  The event callback.
     */
    on<N extends ComponentEventName<E>>(event: N | (string & {}), callback: ComponentEventCallback<E, O, N>, options?: {once?: boolean}) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const component = this;
        this.$element[options?.once ? 'one' : 'on'](this._wrapEvent(event), function (this: Component<O, E>, e: N extends keyof HTMLElementEventMap ? HTMLElementEventMap[N] : Event, info: [Component<O, E>, ComponentEventArgs<E, N>]) {
            if (!(e as {__src?: unknown}).__src || (e as {__src?: unknown}).__src === component) {
                callback.call(this, e, info);
            }
        });
    }

    /**
     * Listen to a component event.
     *
     * @param event     The event name.
     * @param callback  The event callback.
     */
    one<N extends ComponentEventName<E>>(event: N, callback: ComponentEventCallback<E, O, N>) {
        this.on(event, callback, {once: true});
    }

    /**
     * Stop listening to a component event.
     * @param event     The event name.
     * @param callback  The event callback.
     */
    off<N extends ComponentEventName<E>>(event: N | (string & {})) {
        this.$element.off(this._wrapEvent(event));
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
        return i18n(i18nData, key, args, defaultValue, this.options.lang, this.constructor.NAME)
            ?? i18n<string>(i18nData, key, args, defaultValue, this.options.lang)
            ?? `{i18n:${key}}`;
    }

    /**
     * Get event namespace.
     * @returns Event namespace.
     */
    get namespace(): `.zui.${string}` {
        return `${this.constructor.NAMESPACE}.${this._key}`;
    }

    /**
     * Wrap event names with component namespace.
     *
     * @param names The event names.
     * @returns     The wrapped event names.
     */
    protected _wrapEvent(names: string) {
        return names.split(' ').map(name => name.includes('.') ? name : `${name}${this.namespace}`).join(' ');
    }

    static ALL = new Map<HTMLElement, Set<Component>>();

    static TYPED_ALL = new Map<string, Set<Component>>();

    /**
     * Get the component instance of the given element.
     *
     * @param this     Current component constructor.
     * @param selector The component element selector.
     * @returns        The component instance.
     */
    static get<O extends {}, E extends ComponentEvents, U extends HTMLElement, T extends typeof Component<O, E, U>>(this: T, selector: Selector, key?: string | number): InstanceType<T> | undefined {
        const $element = $(selector);
        if (this.MULTI_INSTANCE && key !== undefined) {
            const instanceMap = $element.data(`${this.KEY}:ALL`);
            if (instanceMap) {
                return instanceMap.get(key);
            }
            return;
        }
        return $element.data(this.KEY);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static isValid<O extends {}, E extends ComponentEvents, U extends HTMLElement, T extends typeof Component<O, E, U>>(this: T, _instance: InstanceType<T>): boolean {
        return true;
    }

    /**
     * Ensure the component instance of the given element.
     *
     * @param this      Current component constructor.
     * @param selector  The component element selector.
     * @param options   The component options.
     * @returns         The component instance.
     */
    static ensure<O extends {}, E extends ComponentEvents, U extends HTMLElement, T extends typeof Component<O, E, U>>(this: T, selector: Selector, options?: Partial<ComponentOptions<O>>): InstanceType<T> {
        const instance = this.get(selector, options?.key);
        if (instance) {
            if (this.isValid(instance)) {
                if (options) {
                    instance.setOptions(options);
                }
                return instance;
            } else {
                instance.destroy();
            }
        }
        return new this(selector, options) as InstanceType<T>;
    }

    /**
     * Get all component instances.
     *
     * @param this     Current component constructor.
     * @param selector The component element selector.
     * @returns        All component instances.
     */
    static getAll<O extends {}, E extends ComponentEvents, U extends HTMLElement, T extends typeof Component<O, E, U>>(this: T, selector?: Selector, filter?: (instance: InstanceType<T>) => boolean): InstanceType<T>[] {
        const {SELECTOR, ALL, TYPED_ALL} = this;
        const list: InstanceType<T>[] = [];
        const checkInstance = (instance: Component) => {
            if (instance instanceof this && (!filter || filter(instance as InstanceType<T>) !== false)) {
                list.push(instance as InstanceType<T>);
            }
        };
        if (selector) {
            $(selector)
                .find(SELECTOR)
                .each((_, element) => {
                    ALL.get(element)?.forEach(checkInstance);
                });
        } else if (this !== Component) {
            TYPED_ALL.get(this.NAME)?.forEach(checkInstance);
        } else {
            ALL.forEach((components) => {
                components.forEach(checkInstance);
            });
        }
        return list.sort((a, b) => a.gid - b.gid);
    }

    /**
     * Query the component instance.
     *
     * @param this     Current component constructor.
     * @param selector The component element selector.
     * @returns        The component instance.
     */
    static query<O extends {}, E extends ComponentEvents, U extends HTMLElement, T extends typeof Component<O, E, U>>(this: T, selector?: Selector, key?: string | number, filter?: (instance: InstanceType<T>) => boolean): InstanceType<T> | undefined {
        if (selector === undefined) {
            return this.getAll(undefined, filter).pop();
        }
        return this.get($(selector).closest(this.SELECTOR), key);
    }

    /**
     * Create cash fn.method for current component.
     *
     * @param name The method name.
     */
    static defineFn(name?: string) {
        let fnName = (name || this.ZUI) as keyof Cash;
        if ($.fn[fnName]) {
            fnName = `zui${this.NAME}` as keyof Cash;
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const ZUIComponent = this;
        $.fn.extend({
            [fnName](options: Partial<ComponentOptions<{}>> | string, ...args: unknown[]) {
                const initOptions = typeof options === 'object' ? options : undefined;
                const callMethod = typeof options === 'string' ? options : undefined;
                let callResult: unknown;
                this.each((_: number, element: Element) => {
                    let instance = ZUIComponent.get(element);
                    if (instance) {
                        if (initOptions) {
                            instance.render(initOptions);
                        }
                    } else if (callMethod) {
                        return;
                    } else {
                        instance = new ZUIComponent(element, initOptions);
                    }
                    if (callMethod) {
                        let method: ((...args: unknown[]) => void) = (instance as unknown as Record<string, (...args: unknown[]) => void>)[callMethod];
                        let callThis: unknown = instance;
                        if (method === undefined) {
                            callThis = (instance as unknown as {$: Record<string, (...args: unknown[]) => void>}).$;
                            method = (callThis as Record<string, (...args: unknown[]) => void>)[callMethod as string];
                        }
                        if (typeof method === 'function') {
                            callResult = method.call(callThis, ...args);
                        } else {
                            callResult = method;
                        }
                    }
                });
                return callResult !== undefined ? callResult : this;
            },
        });
    }

    static map = new Map<string, typeof Component>();

    static toggleMap = new Map<string, typeof Component>();

    static register(ComponentClass?: typeof Component, name?: string) {
        ComponentClass = ComponentClass || this;
        name = (name ?? ComponentClass.NAME).toLowerCase();
        this.map.set(name, ComponentClass);

        const toggleName = ComponentClass.toggle?.name?.toLowerCase();
        if (toggleName && toggleName !== name) {
            this.toggleMap.set(toggleName, ComponentClass);
        }
    }
}
