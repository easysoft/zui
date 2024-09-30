import {ComponentFromReact, ComponentOptions} from '@zui/core';
import {DTable as DTableReact} from '../components/dtable';
import {removePlugin, definePlugin} from '../helpers/shared-plugins';
import * as plugins from '../plugins';
import type {DTableOptions} from '../types/options';

export class DTable extends ComponentFromReact<DTableOptions, DTableReact> {
    static NAME = 'DTable';

    static Component = DTableReact;

    static definePlugin = definePlugin;

    static removePlugin = removePlugin;

    static plugins = plugins;

    setOptions(options?: Partial<ComponentOptions<DTableOptions>>, reset?: boolean): ComponentOptions<DTableOptions> {
        options = super.setOptions(options, reset);
        if (!options.parent) {
            options.parent = this.element;
        }
        return options as ComponentOptions<DTableOptions>;
    }
}
