import {Component, $} from '@zui/core';
import {SortableModule, SortableClass, SortableJSOptions, SortableOptions} from '../types';

export class Sortable extends Component<SortableOptions> {
    static NAME = 'Sortable';

    static DEFAULT: Partial<SortableOptions> = {
        animation: 150,
    };

    declare module: SortableModule;

    protected _emptyShadow?: HTMLElement;

    async afterInit() {
        const SortableModuleClass = await Sortable.loadModule();
        const {options} = this;
        if (options.dragShadow !== undefined && options.dragShadow !== true) {
            const {dragShadow, onEnd, setData} = options;
            options.setData = ((dataTransfer, dragEl) => {
                if (dragShadow === false && !this._emptyShadow) {
                    this._emptyShadow = dragEl.cloneNode(true) as HTMLElement;
                    this._emptyShadow.classList.add('sortable-empty-shadow');
                    document.body.appendChild(this._emptyShadow);
                }
                dataTransfer.setDragImage(dragShadow === false ? this._emptyShadow! : dragShadow, 0, 0);
                setData?.(dataTransfer, dragEl);
            });
            options.onEnd = (event) => {
                onEnd?.(event);
                this._emptyShadow?.remove();
                this._emptyShadow = undefined;
            };
            delete options.dragShadow;
        }
        this.module = new SortableModuleClass(this.element, options);
    }

    /**
     * Options getter/setter
     * @param name a SortableOptions property.
     * @param value a value.
     */
    option<K extends keyof SortableJSOptions>(name: K, value: SortableJSOptions[K]): void;
    option<K extends keyof SortableJSOptions>(name: K): SortableJSOptions[K];
    option<K extends keyof SortableJSOptions>(name: K, value?: SortableJSOptions[K]): void | SortableJSOptions[K] {
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
    check: 'Sortable',
});
