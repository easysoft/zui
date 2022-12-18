import {CustomEventListener, CustomEventMap} from '@zui/event-bus';
import {EventHub} from '@zui/event-bus/src/event-hub';
import {i18n} from '@zui/i18n/src/module/i18n';
import {parseDataset} from './parse-dataset';

export type ComponentHTMLEventMap = {[event in keyof HTMLElementEventMap]: HTMLElementEventMap[event]};

export type ComponentInternalEventMap = {
    inited: CustomEvent,
    destroyed: CustomEvent,
};

type ComponentOptionEventMap<T extends CustomEventMap> = {[p in `on${Capitalize<string & keyof T>}`]: p extends `on${infer name}` ? Uncapitalize<name> extends keyof T ? T[Uncapitalize<name>] : never : never};

export type ComponentEventMap<V extends CustomEventMap = {}> = V & ComponentHTMLEventMap & ComponentInternalEventMap;

export type ComponentEventNames<V extends CustomEventMap = {}> = keyof HTMLElementEventMap | Extract<keyof V, string> | keyof ComponentInternalEventMap;

export type ComponentI18nOptions = {
    lang?: string;
    i18n?: Record<string, Record<string, string | {}>>;
};

export type ComponentEventOptions<V extends CustomEventMap = {}> = {
    [p in keyof ComponentOptionEventMap<ComponentInternalEventMap & V>]: (event: Event) => void | false;
};

export type ComponentOptions<O extends {} = {}, V extends CustomEventMap = {}> = O & ComponentI18nOptions & Partial<ComponentEventOptions<V>>;

export declare class ComponentClass<O extends {} = {}, V extends CustomEventMap = {}, E extends HTMLElement = HTMLElement> {
    static NAME: string;

    static KEY: string;

    options: ComponentOptions<O, V>;

    element: E;

    constructor(element: E | string, options: Partial<ComponentOptions<O, V>>);

    render(options: Partial<ComponentOptions<O, V>>): void;

    init(): void;

    destroy(): void;

    setOptions(options?: Partial<ComponentOptions<O, V>>): ComponentOptions<O, V>;

    on<T extends ComponentEventNames<V>>(type: T, listener: CustomEventListener<ComponentEventMap<V>[T]>, options?: AddEventListenerOptions): void;

    once<T extends ComponentEventNames<V>>(type: T, listener: CustomEventListener<ComponentEventMap<V>[T]>, options?: AddEventListenerOptions): void;

    off<T extends ComponentEventNames<V>>(type: T, listener: CustomEventListener<ComponentEventMap<V>[T]>, options?: AddEventListenerOptions): void;

    emit<T extends ComponentEventNames<V>>(event: T | ComponentEventMap<V>[T], detail?: (ComponentEventMap<V>[T] extends CustomEvent ? ComponentEventMap<V>[T]['detail'] : never)): ComponentEventMap<V>[T];

    i18n(key: string, defaultValue?: string): string;
    i18n(key: string, args?: (string | number)[] | Record<string, string | number>, defaultValue?: string): string;
    i18n(key: string, args?: string | (string | number)[] | Record<string, string | number>, defaultValue?: string): string;
}

export class ComponentBase<O extends {} = {}, V extends CustomEventMap = {}, E extends HTMLElement = HTMLElement> implements ComponentClass<O, V, E> {
    #options: ComponentOptions<O, V>;

    #element: E;

    #events?: EventHub<ComponentEventMap<V>>;

    get options() {
        return this.#options;
    }

    get element() {
        return this.#element;
    }

    get events() {
        return this.#events;
    }

    constructor(element: E | string, options?: Partial<ComponentOptions<O, V>>) {
        element = (typeof element === 'string' ? document.querySelector(element) : element) as E;

        if ((this.constructor as typeof ComponentBase).EVENTS) {
            this.#events = new EventHub(element, {customEventSuffix: `.${(this.constructor as typeof ComponentBase).KEY}`});
        }

        this.#options = {...(this.constructor as typeof ComponentBase).DEFAULT, ...(element instanceof HTMLElement ? parseDataset(element.dataset) : null), ...options} as ComponentOptions<O, V>;

        (this.constructor as typeof ComponentBase).all.set(element, this);
        this.#element = element;

        requestAnimationFrame(() => {
            this.init();
            this.#events?.emit('inited', this);
        });
    }

    init() {}

    setOptions(options?: Partial<ComponentOptions<O, V>>) {
        if (options) {
            Object.assign(this.#options, options);
        }
        return this.#options;
    }

    render(options?: Partial<ComponentOptions<O, V>>) {
        this.setOptions(options);
    }

    destroy() {
        (this.constructor as typeof ComponentBase).all.delete(this.#element);

        if (this.#events) {
            this.#events.emit('destroyed', this);
            this.#events.offAll();
        }
    }

    on<T extends ComponentEventNames<V>>(type: T, listener: CustomEventListener<ComponentEventMap<V>[T]>, options?: AddEventListenerOptions) {
        this.#events?.on(type, listener, options);
    }

    once<T extends ComponentEventNames<V>>(type: T, listener: CustomEventListener<ComponentEventMap<V>[T]>, options?: AddEventListenerOptions) {
        this.#events?.once(type, listener, options);
    }

    off<T extends ComponentEventNames<V>>(type: T, listener: CustomEventListener<ComponentEventMap<V>[T]>, options?: AddEventListenerOptions) {
        this.#events?.off(type, listener, options);
    }

    emit<T extends ComponentEventNames<V>>(event: T | ComponentEventMap<V>[T], detail?: (ComponentEventMap<V>[T] extends CustomEvent ? ComponentEventMap<V>[T]['detail'] : never)): ComponentEventMap<V>[T] {
        let eventObject = EventHub.createEvent<ComponentEventMap<V>[T]>(event, detail);
        const eventOptionName = `on${eventObject.type.replace(`.${(this.constructor as typeof ComponentBase).KEY}`, '')}` as keyof ComponentEventOptions<V>;
        const eventCallback = this.#options[eventOptionName] as ((event: ComponentEventMap<V>[T]) => false | void);
        if (eventCallback && eventCallback(eventObject) === false) {
            eventObject.preventDefault();
            eventObject.stopPropagation();
        }
        eventObject = this.#events?.emit(eventObject) as ComponentEventMap<V>[T];
        return eventObject;
    }

    i18n(key: string, defaultValue?: string): string;
    i18n(key: string, args?: (string | number)[] | Record<string, string | number>, defaultValue?: string): string;
    i18n(key: string, args?: string | (string | number)[] | Record<string, string | number>, defaultValue?: string): string {
        return i18n(this.#options.i18n, key, args, defaultValue, this.options.lang, (this.constructor as typeof ComponentBase).NAME) ?? `{i18n:${key}}`;
    }

    static EVENTS = false;

    /**
     * Component internal name, like "Menu"
     */
    static get NAME(): string {
        throw new Error(`static NAME should be override in class ${this.name}`);
    }

    /**
     * Component data key, like "zui.menu"
     */
    static get KEY() {
        return `zui.${this.NAME}`;
    }

    static DEFAULT = {};

    static allComponents = new Map<string, Map<HTMLElement, unknown>>();

    static get all(): Map<HTMLElement, unknown> {
        const name = this.NAME;
        if (this.allComponents.has(name)) {
            return this.allComponents.get(name) as Map<HTMLElement, unknown>;
        }
        const map = new Map<HTMLElement, unknown>();
        this.allComponents.set(name, map);
        return map;
    }

    static getAll<O extends {}, V extends CustomEventMap, E extends HTMLElement, T extends typeof ComponentBase<O, V, E>>(this: T): Map<E, InstanceType<T>> {
        return this.all as Map<E, InstanceType<T>>;
    }

    static get<O extends {}, V extends CustomEventMap, E extends HTMLElement, T extends typeof ComponentBase<O, V, E>>(this: T, element: E): InstanceType<T> | undefined {
        return this.all.get(element) as InstanceType<T> | undefined;
    }

    static ensure<O extends {}, V extends CustomEventMap, E extends HTMLElement, T extends typeof ComponentBase<O, V, E>>(this: T, element: E, options?: O): InstanceType<T> {
        return (this.get<O, V, E, T>(element) || new this(element, options)) as InstanceType<T>;
    }
}
