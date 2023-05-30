import {i18n} from '../i18n';
import {$, Element, Selector} from '../cash';
import type {ComponentCustomEvent, ComponentEventArgs, ComponentEventName, ComponentOptions} from './types';

/**
 * The event callback for component.
 */
export type ComponentEventCallback<E extends ComponentCustomEvent, O extends {}, N extends ComponentEventName<E> = ComponentEventName<E>> = (event: Event, args: [Component<O, E>, ...ComponentEventArgs<E, N>]) => void | false;


/**
 * The component base class.
 */
export class Component<O extends {} = {}, E extends ComponentCustomEvent = {}> {
    /**
     * The default options.
     */
    static DEFAULT = {};

    /**
     * The component name.
     * It usually equals to the class name.
     * The name must be provided in subclass.
     */
    static get NAME(): string {
        throw new Error(`[ZUI] Component name must be provided in class "${this.name}".`);
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
    static get NAMESPACE(): `.${string}.zui` {
        return `.${this.NAME}.zui`;
    }

    /**
     * Access to static properties via this.constructor.
     *
     * @see https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     */
    declare ['constructor']: typeof Component;

    /**
     * Store the component options.
     */
    #options?: ComponentOptions<O>;

    /**
     * Store the component element.
     */
    #element?: Element;

    /**
     * Store the component event handlers.
     */
    #gid: number;

    /**
     * The component constructor.
     *
     * @param options The component initial options.
     */
    constructor(element: Selector, options?: Partial<ComponentOptions<O>>) {
        const $element = $(element);
        if ($element.data(this.constructor.KEY)) {
            throw new Error('[ZUI] The component has been initialized on element.');
        }

        const gid = $.guid++;
        this.#gid = gid;
        $element.data(this.constructor.KEY, this).attr(`data-zui-${this.constructor.KEY}`, `${gid}`);
        this.#element = $element[0] as Element;

        this.#options = {...this.constructor.DEFAULT, ...$element.dataset()} as ComponentOptions<O>;
        this.setOptions(options);

        this.init();
        requestAnimationFrame(() => {
            (this.emit as ((event: string, ...args: unknown[]) => void))('inited', this.options);
            this.afterInit();
        });
    }

    /**
     * Get the component element.
     */
    get element() {
        return this.#element!;
    }

    /**
     * Get the component options.
     */
    get options() {
        return this.#options!;
    }

    /**
     * Get the component global id.
     */
    get gid() {
        return this.#gid;
    }

    /**
     * Get the component element as a jQuery like object.
     */
    get $element() {
        return $(this.element);
    }

    /**
     * Initialize the component.
     */
    init() {}

    /**
     * Do something after the component initialized.
     */
    afterInit() {}

    /**
     * Render the component.
     *
     * @param options The component options to override before render.
     */
    render(options?: Partial<ComponentOptions<O>>) {
        this.setOptions(options);
    }

    /**
     * Destroy the component.
     */
    destroy() {
        this.$element
            .off(this.constructor.NAMESPACE)
            .data(this.constructor.KEY, undefined)
            .attr(`data-zui-${this.constructor.KEY}`, null);

        this.#options = undefined;
        this.#element = undefined;

        (this.emit as ((event: string, ...args: unknown[]) => void))('destroyed');
    }

    /**
     * Set the component options.
     *
     * @param options  The component options to set.
     * @returns The component options.
     */
    setOptions(options?: Partial<ComponentOptions<O>>) {
        if (options) {
            $.extend(this.#options, options);
        }
        return this.#options;
    }

    /**
     * Emit a component event.
     * @param event  The event name.
     * @param args   The event arguments.
     */
    emit<N extends ComponentEventName<E>>(event: N, ...args: ComponentEventArgs<E, N>) {
        this.$element.trigger(this.constructor.#wrapEventNames(event), [this, ...args]);
    }

    /**
     * Listen to a component event.
     *
     * @param event     The event name.
     * @param callback  The event callback.
     */
    on<N extends ComponentEventName<E>>(event: N, callback: ComponentEventCallback<E, O, N>) {
        this.$element.on(this.constructor.#wrapEventNames(event), callback);
    }

    /**
     * Stop listening to a component event.
     * @param event     The event name.
     * @param callback  The event callback.
     */
    off<N extends ComponentEventName<E>>(event: N, callback?: ComponentEventCallback<E, O, N>) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.$element.off(this.constructor.#wrapEventNames(event), callback as any);
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
    i18n(key: string, args?: (string | number)[] | Record<string, string | number>, defaultValue?: string): string;

    /**
     * Get the i18n text.
     *
     * @param key          The i18n key.
     * @param args         The i18n arguments or the default value.
     * @param defaultValue The default value if the key is not found.
     * @returns            The i18n text.
     */
    i18n(key: string, args?: string | (string | number)[] | Record<string, string | number>, defaultValue?: string): string {
        return i18n(this.options.i18n, key, args, defaultValue, this.options.lang, this.constructor.NAME) ?? i18n(this.options.i18n, key, args, defaultValue, this.options.lang) ?? `{i18n:${key}}`;
    }

    /**
     * Wrap event names with component namespace.
     *
     * @param names The event names.
     * @returns     The wrapped event names.
     */
    static #wrapEventNames(names: string): string {
        return names.split(' ').map(name => name.includes('.') ? name : `${name}${this.NAMESPACE}`).join(' ');
    }

    /**
     * Get the component instance of the given element.
     *
     * @param this     Current component constructor.
     * @param selector The component element selector.
     * @returns        The component instance.
     */
    static get<O extends {}, E extends ComponentCustomEvent, T extends typeof Component<O, E>>(this: T, selector: Selector): InstanceType<T> | undefined {
        return $(selector).data(this.KEY);
    }

    /**
     * Ensure the component instance of the given element.
     *
     * @param this      Current component constructor.
     * @param selector  The component element selector.
     * @param options   The component options.
     * @returns         The component instance.
     */
    static ensure<O extends {}, E extends ComponentCustomEvent, T extends typeof Component<O, E>>(this: T, selector: Selector, options?: Partial<ComponentOptions<O>>): InstanceType<T> {
        const instance = this.get(selector);
        if (instance) {
            return instance;
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
    static getAll<O extends {}, E extends ComponentCustomEvent, T extends typeof Component<O, E>>(this: T, selector?: Selector): InstanceType<T>[] {
        return $(selector || 'body').find(`[data-zui-${this.KEY}]`).map((_, element) => $(element).data(this.KEY)).get() as InstanceType<T>[];
    }

    /**
     * Query the component instance.
     *
     * @param this     Current component constructor.
     * @param selector The component element selector.
     * @returns        The component instance.
     */
    static query<O extends {}, E extends ComponentCustomEvent, T extends typeof Component<O, E>>(this: T, selector?: Selector): InstanceType<T> | undefined {
        if (selector === undefined) {
            return this.getAll().sort((a, b) => a.gid - b.gid)[0];
        }
        return this.get($(selector).closest(`[data-zui-${this.KEY}]`));
    }
}
