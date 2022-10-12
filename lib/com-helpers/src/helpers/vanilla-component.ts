import {parseDataset} from './parse-dataset';

export declare class ComponentClass<O extends object = {}, E extends HTMLElement = HTMLElement> {
    static NAME: string;

    static KEY: string;

    options: O;

    element: E;

    constructor(element: E | string, options: O);

    render(options: Partial<O>): void;

    init(): void;

    destroy(): void;

    setOptions(options?: Partial<O>): O;
}

export class ComponentBase<O extends object = {}, E extends HTMLElement = HTMLElement> implements ComponentClass<O, E> {
    #options: O;

    #element: E;

    get options() {
        return this.#options;
    }

    get element() {
        return this.#element;
    }

    constructor(element: E | string, options?: Partial<O>) {
        this.#element = (typeof element === 'string' ? document.querySelector(element) : element) as E;
        this.#options = {...(this.constructor as typeof ComponentBase).DEFAULT, ...parseDataset(this.#element.dataset), ...options} as O;

        (this.constructor as typeof ComponentBase).all.set(this.#element, this);
        this.init();
    }

    init() {}

    setOptions(options?: Partial<O>) {
        if (options) {
            Object.assign(this.#options, options);
        }
        return this.#options;
    }

    render(options?: Partial<O>) {
        this.setOptions(options);
    }

    destroy() {
        (this.constructor as typeof ComponentBase).all.delete(this.#element);
    }

    /**
     * Component internal name, like "Menu"
     */
    static NAME: string = this.name.toLowerCase();

    /**
     * Component data key, like "zui.menu"
     */
    static get KEY() {
        return `zui.${this.NAME ?? this.name.toLowerCase()}`;
    }

    static get DEFAULT(): object {
        return  {};
    }

    static all = new Map<HTMLElement, unknown>();

    static getAll<O extends object, E extends HTMLElement, T extends typeof ComponentBase<O, E>>(this: T): Map<E, InstanceType<T>> {
        return this.all as Map<E, InstanceType<T>>;
    }

    static get<O extends object, E extends HTMLElement, T extends typeof ComponentBase<O, E>>(this: T, element: E): InstanceType<T> | undefined {
        return this.all.get(element) as InstanceType<T> | undefined;
    }

    static ensure<O extends object, E extends HTMLElement, T extends typeof ComponentBase<O, E>>(this: T, element: E, options?: O): InstanceType<T> {
        return this.get(element) || (new this(element, options) as InstanceType<T>);
    }
}
