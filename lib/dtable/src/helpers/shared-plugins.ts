import {DTableOptions} from '../types/options';
import {DTablePlugin, DTablePluginComsumer} from '../types/plugin';

const sharedPlugins = new Map<string, DTablePlugin>();

export function addPlugin(plugin: DTablePlugin, override = false) {
    if (!override && sharedPlugins.has(plugin.name)) {
        throw new Error(`DTable: Plugin with name ${plugin.name} already exists`);
    }
    sharedPlugins.set(plugin.name, plugin);
}

export function definePlugin<O = {}, S extends {} = {}, C extends {} = {}, T extends {} = {}>(plugin: DTablePlugin<O, S, C, T>, override = false): DTablePluginComsumer<O> {
    addPlugin(plugin as unknown as DTablePlugin, override);
    const comsumer: DTablePluginComsumer<O> = (options?: DTableOptions & O): DTablePlugin<O> => {
        if (!options) {
            return plugin as unknown as DTablePlugin<O>;
        }
        const {defaultOptions, ...otherProps} = plugin;
        return {
            ...otherProps,
            defaultOptions: {...defaultOptions, ...options},
        } as unknown as DTablePlugin<O>;
    };
    comsumer.plugin = plugin as unknown as DTablePlugin<O>;
    return comsumer;
}

export function getPlugin(name: string): DTablePlugin | undefined {
    return sharedPlugins.get(name);
}

export function removePlugin(name: string): boolean {
    return sharedPlugins.delete(name);
}

export function initPlugins(options?: DTableOptions): DTablePlugin[] {
    if (!options?.plugins?.length) {
        return [];
    }
    const {plugins: nameOrPluginList} = options;
    return nameOrPluginList.reduce<DTablePlugin[]>((list, nameOrPlugin) => {
        let plugin: DTablePlugin | undefined;
        if (typeof nameOrPlugin === 'string') {
            plugin = getPlugin(nameOrPlugin);
            if (!plugin) {
                console.warn(`DTable: Cannot found plugin "${nameOrPlugin}"`);
            }
        } else if (typeof nameOrPlugin === 'function') {
            plugin = nameOrPlugin.plugin;
        } else if (typeof nameOrPlugin === 'object') {
            plugin = nameOrPlugin;
        } else {
            console.warn('DTable: Invalid plugin', nameOrPlugin);
        }
        if (plugin) {
            list.push(plugin);
        }
        return list;
    }, []);
}

export function mergePluginOptions(plugins: readonly DTablePlugin[], options: DTableOptions): DTableOptions {
    return plugins.reduce((mergedOptions, plugin) => {
        const {options: optionsModifier, defaultOptions} = plugin;
        Object.assign(mergedOptions, defaultOptions, mergedOptions);
        if (options) {
            Object.assign(mergedOptions, typeof optionsModifier === 'function' ? optionsModifier(mergedOptions) : optionsModifier);
        }
        return mergedOptions;
    }, options);
}
