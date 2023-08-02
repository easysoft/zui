import {Component, $} from '@zui/core';
import {SortableModule, SortableClass, SortableOptions} from '../types';

export class Sortable extends Component<SortableOptions> {
    static NAME = 'Sortable';

    static DEFAULT: Partial<SortableOptions> = {
    };

    declare module: SortableModule;

    async afterInit() {
        const SortableModuleClass = await Sortable.loadModule();
        this.module = new SortableModuleClass(this.element, this.options);
    }

    /**
     * Options getter/setter
     * @param name a SortableOptions property.
     * @param value a value.
     */
    option<K extends keyof SortableOptions>(name: K, value: SortableOptions[K]): void;
    option<K extends keyof SortableOptions>(name: K): SortableOptions[K];
    option<K extends keyof SortableOptions>(name: K, value?: SortableOptions[K]): void | SortableOptions[K] {
        if (value === undefined) {
            return this.module.option(name);
        }
        this.module.option(name, value);
    }

    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * @param element an HTMLElement or selector string.
     * @param selector default: `options.draggable`
     */
    closest(element: HTMLElement, selector?: string): HTMLElement | null {
        return this.module.closest(element, selector);
    }

    /**
     * Sorts the elements according to the array.
     * @param order an array of strings to sort.
     * @param useAnimation default: false.
     */
    sort(order: ReadonlyArray<string>, useAnimation?: boolean): void {
        this.module.sort(order, useAnimation);
    }

    /**
     * Saving and restoring of the sort.
     */
    save(): void {
        this.module.save();
    }

    /**
     * Removes the sortable functionality completely.
     */
    destroy(): void {
        super.destroy();
        this.module.destroy();
    }

    /**
     * Serializes the sortable's item data-id's (dataIdAttr option) into an array of string.
     */
    toArray(): string[] {
        return this.module.toArray();
    }

    static Module?: SortableClass;

    static async loadModule(): Promise<SortableClass> {
        if (!this.Module) {
            this.Module = await $.getLib('sortablejs');
        }
        return this.Module;
    }
}

$.registerLib('sortablejs', {
    src: 'sortable/sortable.min.js',
    name: 'Sortable',
});
