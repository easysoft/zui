import {render} from 'preact';
import type {ComponentType} from 'preact';

export declare class VanillaComponentClass<O extends object = {}, E extends HTMLElement = HTMLElement> {
    static NAME: string;

    options: O;

    element: E;

    Component: ComponentType;

    constructor(element: E | string, options: O);

    render(options: Partial<O>): void;
}

export abstract class VanillaComponentBase<O extends object = {}, E extends HTMLElement = HTMLElement> {
    static NAME: string;

    #options: O;

    #element: E;

    abstract Component: ComponentType;

    get options() {
        return this.#options;
    }

    get element() {
        return this.#element;
    }

    constructor(element: E | string, options: O) {
        this.#element = (typeof element === 'string' ? document.querySelector(element) : element) as E;
        this.#options = options;

        this.render();
    }

    render(options?: Partial<O>) {
        this.#options = Object.assign(this.#options, options);
        render((
            <this.Component {...this.options} />
        ), this.element);
    }
}
