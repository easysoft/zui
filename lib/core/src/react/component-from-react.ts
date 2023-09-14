import {createRef, render, h, Attributes} from 'preact';
import type {Component as ComponentReact, ComponentClass} from 'preact';
import {Component as ComponentBase, ComponentEventsDefnition} from '../component';
import {mergeProps} from '../helpers';

export class ComponentFromReact<O extends {} = {}, C extends ComponentReact<O> = ComponentReact<O>, E extends ComponentEventsDefnition = {}, U extends HTMLElement = HTMLElement> extends ComponentBase<O, E, U> {
    /**
     * The React component class.
     */
    static Component: unknown;

    /**
     * Whether replace the element.
     */
    static replace = false;

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
        const {element} = this;
        const {Component, replace} = this.constructor;
        const props = {
            ref: this.ref,
            ...this.setOptions(options),
        } as Attributes;
        if (replace && (Component as {HElement?: boolean}).HElement) {
            const attrs = Array.from(element.attributes).reduce<Record<string, unknown>>((data, attribute) => {
                const {name, value} = attribute;
                data[name === 'class' ? 'className' : name] = value;
                return data;
            }, {});
            return render(
                h(Component as ComponentClass, mergeProps({component: element.tagName.toLowerCase(), attrs}, props)),
                element.parentElement!,
                element,
            );
        }
        render(
            h(Component as ComponentClass, props),
            element,
        );
    }
}
