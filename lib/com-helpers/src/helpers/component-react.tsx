import {createRef, render} from 'preact';
import type {ComponentType, Component} from 'preact';
import {ComponentBase} from './vanilla-component';

export declare class ComponentReactClass<O extends object = {}, C extends Component<O> = Component<O>, V extends Record<string, Event> = {}, E extends HTMLElement = HTMLElement> extends ComponentBase<O, V, E>  {
    static Component: ComponentType;

    $: C | null;
}

export abstract class ComponentFromReact<O extends object, C extends Component<O>, V extends Record<string, Event> = {}, E extends HTMLElement = HTMLElement> extends ComponentBase<O, V, E> implements ComponentReactClass<O, C, V, E> {
    #ref = createRef<C>();

    get $() {
        return this.#ref.current;
    }

    init() {
        requestAnimationFrame(() => this.render());
    }

    render(options?: Partial<O>) {
        const Component = (this.constructor as typeof ComponentReactClass<O, C, V, E>).Component;
        render((
            <Component ref={this.#ref} {...this.setOptions(options)} />
        ), this.element);
    }
}
