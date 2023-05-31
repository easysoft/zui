import {createRef, render, h, Attributes} from 'preact';
import type {Component as ComponentReact, ComponentClass} from 'preact';
import {Component as ComponentBase, ComponentEventsDefnition} from '../component';

export class ComponentFromReact<O extends {} = {}, C extends ComponentReact<O> = ComponentReact<O>, E extends ComponentEventsDefnition = {}, U extends Element = Element> extends ComponentBase<O, E, U> {
    /**
     * The React component class.
     */
    static Component: unknown;

    /**
     * Access to static properties via this.constructor.
     *
     * @see https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     */
    declare ['constructor']: typeof ComponentFromReact<O, C, E, U>;

    /**
     * The React ref for component instance.
     */
    ref = createRef<C>();

    /**
     * The React component instance.
     */
    get $(): C | null {
        return this.ref.current;
    }

    /**
     * Render after component init.
     */
    afterInit() {
        this.render();
    }

    /**
     * Destroy component.
     */
    destroy() {
        this.$?.componentWillUnmount?.();
        if (this.element) {
            this.element.innerHTML = '';
        }
        super.destroy();
    }

    /**
     * Render component.
     *
     * @param options new options.
     */
    render(options?: Partial<O>) {
        render(
            h(this.constructor.Component as ComponentClass, {
                ref: this.ref,
                ...this.setOptions(options),
            } as Attributes),
            this.element,
        );
    }
}
