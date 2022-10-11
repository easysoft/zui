export abstract class ComponentBase<O extends object = {}, E extends HTMLElement = HTMLElement> {
    static NAME: string;

    #options: O;

    #element: E;

    get options() {
        return this.#options;
    }

    get element() {
        return this.#element;
    }

    get defaultOptions(): Partial<O> {
        return {};
    }

    constructor(element: E | string, options?: Partial<O>) {
        this.#element = (typeof element === 'string' ? document.querySelector(element) : element) as E;
        this.#options = {...this.defaultOptions, ...options} as O;
    }

    setOptions(options?: Partial<O>) {
        if (options) {
            Object.assign(this.#options, options);
        }
        return this.#options;
    }

    render(options?: Partial<O>) {
        this.setOptions(options);
    }

    destroy() {}
}
