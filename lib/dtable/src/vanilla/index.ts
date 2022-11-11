import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {DTable as DTableReact} from '../components/dtable';
import {removePlugin, definePlugin} from '../helpers/shared-plugins';
import * as plugins from '../plugins';
import type {DTableOptions} from '../types/options';

export class DTable extends ComponentFromReact<DTableOptions, DTableReact> {
    static NAME = 'dtable';

    static Component = DTableReact;

    static definePlugin = definePlugin;

    static removePlugin = removePlugin;

    static plugins = plugins;
}
