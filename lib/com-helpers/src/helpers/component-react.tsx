import {createRef, render} from 'preact';
import type {ComponentType, Component} from 'preact';
import {ComponentBase} from './vanilla-component';

export abstract class ComponentFromReact<O extends object, C extends Component<O>, V extends Record<string, Event> = {}, E extends HTMLElement = HTMLElement> extends ComponentBase<O, V, E> {
    static Component: ComponentType;

    ref = createRef<C>();

    get $() {
        return this.ref.current;
    }

    init() {
        requestAnimationFrame(() => this.render());
    }

    destroy() {
        super.destroy();
        this.element.innerHTML = '';
    }

    render(options?: Partial<O>) {
        const Component = (this.constructor as typeof ComponentFromReact<O, C, V, E>).Component;
        render((
            <Component ref={this.ref} {...this.setOptions(options)} />
        ), this.element);
    }
}
