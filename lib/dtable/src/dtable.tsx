import {createRef, render} from 'preact';
import {DTable as DTableReact} from './dtable-react';
import {removePlugin, definePlugin} from './helpers/shared-plugins';
import * as plugins from './plugins';

export class DTable {
    static NAME = 'zui.dtable';

    static definePlugin = definePlugin;

    static removePlugin = removePlugin;

    static plugins = plugins;

    element: HTMLElement;

    options: DTableOptions;

    #ref = createRef<DTableReact>();

    get $(): DTableReact | null {
        return this.#ref.current;
    }

    constructor(element: HTMLElement, options?: Partial<DTableOptions>) {
        this.element = element;
        this.options = {...options} as DTableOptions;
        this.render();
    }

    render(options?: Partial<DTableOptions>) {
        this.options = Object.assign(this.options, options);
        render((
            <DTableReact ref={this.#ref} {...this.options} />
        ), this.element);
    }
}
