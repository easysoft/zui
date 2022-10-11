import {render} from 'preact';
import type {ComponentType} from 'preact';
import {ComponentBase} from './vanilla-component';

export declare class ComponentReactClass<O extends object = {}, E extends HTMLElement = HTMLElement> {
    static NAME: string;

    options: O;

    element: E;

    Component: ComponentType;

    constructor(element: E | string, options: O);

    render(options: Partial<O>): void;
}

export abstract class ComponentFromReact<O extends object = {}, E extends HTMLElement = HTMLElement> extends ComponentBase<O, E> implements ComponentReactClass {
    static NAME: string;

    abstract Component: ComponentType;

    constructor(element: E | string, options: O) {
        super(element, options);

        requestAnimationFrame(() => this.render());
    }

    render(options?: Partial<O>) {
        render((
            <this.Component {...this.setOptions(options)} />
        ), this.element);
    }
}
