import {createRef, render} from 'preact';
import {DTableOptions} from './types/options';
import {DTable as DTableReact} from './dtable-react';
import {getDefaultOptions} from './helpers/default-options';
import {removePlugin, definePlugin} from './helpers/shared-plugins';

export class DTable {
    static NAME = 'zui.dtable';

    static definePlugin = definePlugin;

    static removePlugin = removePlugin;

    element: HTMLElement;

    options: DTableOptions;

    #ref = createRef<DTableReact>();

    get $(): DTableReact | null {
        return this.#ref.current;
    }

    constructor(element: HTMLElement, options?: Partial<DTableOptions>) {
        this.element = element;
        this.options = {...getDefaultOptions(), ...options} as DTableOptions;
        if (this.options.cols?.length) {
            this.render();
        }
    }

    render(options?: Partial<DTableOptions>) {
        this.options = Object.assign(this.options, options);
        render((
            <DTableReact ref={this.#ref} {...this.options} />
        ), this.element);
    }
}
