import {createRef, render} from 'preact';
import type {ComponentType, Component} from 'preact';
import {ComponentBase} from './vanilla-component';

export declare class ComponentReactClass<O extends object = {}, C extends Component<O> = Component<O>, E extends HTMLElement = HTMLElement> {
    static NAME: string;

    static Component: ComponentType;

    $: C | null;

    options: O;

    element: E;

    constructor(element: E | string, options: O);

    render(options: Partial<O>): void;
}

export abstract class ComponentFromReact<O extends object, C extends Component<O>, E extends HTMLElement = HTMLElement> extends ComponentBase<O, E> implements ComponentReactClass<O, C, E> {
    #ref = createRef<C>();

    get $() {
        return this.#ref.current;
    }

    init() {
        requestAnimationFrame(() => this.render());
    }

    render(options?: Partial<O>) {
        const Component = (this.constructor as typeof ComponentReactClass<O, C, E>).Component;
        render((
            <Component ref={this.#ref} {...this.setOptions(options)} />
        ), this.element);
    }
}
