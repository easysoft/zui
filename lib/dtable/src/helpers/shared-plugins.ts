import {DTableOptions} from '../types/options';
import {DTablePlugin} from '../types/plugin';

const sharedPlugins = new Map<string, DTablePlugin>();

export function addPlugin(plugin: DTablePlugin, override = false) {
    if (!override && sharedPlugins.has(plugin.name)) {
        throw new Error(`DTable: Plugin with name ${plugin.name} already exists`);
    }
    sharedPlugins.set(plugin.name, plugin);
}

export function getPlugin(name: string): DTablePlugin | undefined {
    return sharedPlugins.get(name);
}

export function removePlugin(name: string): boolean {
    return sharedPlugins.delete(name);
}

export function initPlugins(nameOrPluginList?: (string | DTablePlugin)[]): DTablePlugin[] {
    if (!nameOrPluginList?.length) {
        return [];
    }
    return nameOrPluginList.reduce<DTablePlugin[]>((list, nameOrPlugin) => {
        if (typeof nameOrPlugin === 'string') {
            const plugin = getPlugin(nameOrPlugin);
            if (plugin) {
                list.push(plugin);
            } else {
                console.warn(`DTable: Cannot found plugin "${nameOrPlugin}"`);
            }
        } else if (typeof nameOrPlugin === 'object') {
            list.push(nameOrPlugin);
        } else {
            console.warn('DTable: Invalid plugin', nameOrPlugin);
        }
        return list;
    }, []);
}

export function mergePluginOptions(plugins: DTablePlugin[], options: DTableOptions): DTableOptions {
    return plugins.reduce((mergedOptions, plugin) => {
        if (typeof plugin.options === 'function') {
            return {...mergedOptions, ...plugin.options(mergedOptions)};
        } else if (plugin.options) {
            return {...mergedOptions, ...plugin.options};
        }
        return mergedOptions;
    }, options);
}
