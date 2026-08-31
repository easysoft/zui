import {createRef, render, h} from 'preact';
import {Component as ComponentBase} from '../component';
import {mergeProps} from '../helpers';

import type {Component as ComponentReact, ComponentClass, Attributes, RefObject} from 'preact';
import {type I18nLangMap} from '../i18n';
import type {ComponentEventsDefnition} from '../component';
import {deepCall} from '@zui/helpers/src/object';

export class ComponentFromReact<O extends object = object, C extends ComponentReact<O> = ComponentReact<O>, E extends ComponentEventsDefnition = ComponentEventsDefnition, U extends HTMLElement = HTMLElement> extends ComponentBase<O & {$replace?: boolean}, E, U> {
    /**
     * The React component class.
     */
    static Component: unknown;

    /**
     * Whether replace the element.
     */
    static replace: boolean | keyof HTMLElementTagNameMap | (string & {}) = false;

    /**
     * Access to static properties via this.constructor.
     *
     * @see https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     */
    declare ['constructor']: typeof ComponentFromReact<O, C, E, U>;

    /**
     * The React ref for component instance.
     */
    protected _ref = createRef<C>();

    /**
     * The DOM container the Preact tree was rendered into, used to unmount on destroy.
     */
    protected declare _renderContainer?: HTMLElement;

    /**
     * The React component instance.
     */
    get $(): C | null {
        return this._ref.current;
    }

    /**
     * The i18n data.
     */
    get i18nData() {
        const {i18n, i18nData} = this.constructor.Component as {i18n?: I18nLangMap; i18nData?: (I18nLangMap | undefined)[]};
        if (i18nData) {
            return [...i18nData, this.constructor.i18n];
        }
        return [i18n, ...super.i18nData];
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
        // Unmount the whole Preact tree so nested components run their cleanup (componentWillUnmount, effect teardown) instead of leaking.
        if (this._renderContainer) {
            render(null, this._renderContainer);
            this._renderContainer = undefined;
        }
        this._ref.current = null;
        super.destroy();
    }

    protected _getRenderProps(userOptions: Omit<O, '$replace' | '$optionsFromDataset' | '$class' | '$style'>): Omit<O, '$replace' | '$optionsFromDataset' | '$class' | '$style'> & {ref: RefObject<C>} {
        return {
            ref: this._ref,
            ...userOptions,
        };
    }

    /**
     * Render component.
     *
     * @param options new options.
     */
    render(options?: Partial<O>, reset?: boolean) {
        const {element, $: instance} = this;
        const {Component, replace} = this.constructor;

        super.render(options, reset);
        const {$replace = replace, $optionsFromDataset, $class, $style, ...userOptions} = this.options;
        const props = this._getRenderProps(userOptions);
        if (reset) {
            (instance as {resetState?: (props?: Record<string, unknown>, init?: boolean) => void})?.resetState?.(props);
        }

        if ($replace && (Component as {HElement?: boolean}).HElement && (element.tagName.toLowerCase() === $replace || $replace === true)) {
            const attrs = Array.from(element.attributes).reduce<Record<string, unknown>>((data, attribute) => {
                const {name, value} = attribute;
                data[name === 'class' ? 'className' : name] = value;
                return data;
            }, {});
            this._renderContainer = element.parentElement ?? undefined;
            render(
                h(Component as ComponentClass, mergeProps({component: element.tagName.toLowerCase(), attrs}, props)),

                element.parentElement!,
                element,
            );
        } else {
            this._renderContainer = element;
            render(
                h(Component as ComponentClass, props as Attributes),
                element,
            );
        }
    }

    /**
     * Execute a command.
     * @param command The command.
     * @param args    The command arguments.
     * @returns       The command result.
     */
    executeCommand(command: string, args: unknown[]) {
        try {
            return deepCall(this.$!, command, args, this.$, true);
        } catch {
            return super.executeCommand(command, args);
        }
    }

    static renderHTML(options: Record<string, unknown>): string {
        const tmpNode = document.createElement('div');
        render(h(this.Component as ComponentClass, options), tmpNode);
        return tmpNode.innerHTML;
    }
}
