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
    const map = new Map<string, DTablePlugin>();
    const plugins = [options?.plugins].flat().reduce<DTablePlugin[]>((list, nameOrPlugin) => {
        if (!nameOrPlugin) {
            return list;
        }
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

        if (plugin && !map.has(plugin.name)) {
            let dependencies = plugin.plugins;
            if (dependencies?.length) {
                if (typeof dependencies === 'string') {
                    dependencies = [dependencies];
                }
                dependencies.forEach(dependency => {
                    if (map.has(dependency)) {
                        return;
                    }
                    const dependencyPlugin = getPlugin(dependency);
                    if (!dependencyPlugin) {
                        console.warn(`DTable: Cannot found dependency plugin "${dependency}" for plugin "${plugin?.name}"`);
                        return;
                    }
                    list.push(dependencyPlugin);
                    map.set(dependencyPlugin.name, dependencyPlugin);
                });
            }
            list.push(plugin);
            map.set(plugin.name, plugin);
        }
        return list;
    }, []);
    return plugins;
}

export function mergePluginOptions(plugins: readonly DTablePlugin[], options: DTableOptions): DTableOptions {
    return plugins.reduce((mergedOptions, plugin) => {
        const {options: optionsModifier, defaultOptions} = plugin;
        if (defaultOptions) {
            mergedOptions = {...defaultOptions, ...mergedOptions};
        }
        if (optionsModifier) {
            Object.assign(mergedOptions, typeof optionsModifier === 'function' ? optionsModifier(mergedOptions) : optionsModifier);
        }
        return mergedOptions;
    }, options);
}
