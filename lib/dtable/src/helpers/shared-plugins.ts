const sharedPlugins = new Map<string, DTablePlugin>();
const buildInPlugins: string[] = [];

export function addPlugin(plugin: DTablePlugin, defineOptions?: DTablePluginDefineOptions) {
    const {name} = plugin;
    if (!defineOptions?.override && sharedPlugins.has(name)) {
        throw new Error(`DTable: Plugin with name ${name} already exists`);
    }
    sharedPlugins.set(name, plugin);
    if (defineOptions?.buildIn && !buildInPlugins.includes(name)) {
        buildInPlugins.push(name);
    }
}

export function definePlugin<T extends DTablePluginTypes = DTablePluginTypes>(plugin: DTablePlugin<T>, defineOptions?: DTablePluginDefineOptions): DTablePluginComsumer<T> {
    addPlugin(plugin as unknown as DTablePlugin, defineOptions);
    const comsumer: DTablePluginComsumer<T> = (options) => {
        if (!options) {
            return plugin;
        }
        const {defaultOptions, ...otherProps} = plugin;
        return {
            ...otherProps,
            defaultOptions: {...defaultOptions, ...options},
        };
    };
    comsumer.plugin = plugin;
    return comsumer;
}

export function removePlugin(name: string): boolean {
    return sharedPlugins.delete(name);
}

function getDTablePlugin(nameOrPlugin: DTablePluginLike): DTablePlugin | undefined {
    if (typeof nameOrPlugin === 'string') {
        const plugin = sharedPlugins.get(nameOrPlugin);
        if (!plugin) {
            console.warn(`DTable: Cannot found plugin "${nameOrPlugin}"`);
        }
        return plugin;
    }
    if (typeof nameOrPlugin === 'function' && 'plugin' in nameOrPlugin) {
        return nameOrPlugin.plugin;
    }
    if (typeof nameOrPlugin === 'object') {
        return nameOrPlugin;
    }
    console.warn('DTable: Invalid plugin', nameOrPlugin);
}

function initPluginsInner(plugins: DTablePlugin[], pluginsLike: DTablePluginLike[], pluginSet: Set<string>): DTablePlugin[] {
    pluginsLike.forEach(nameOrPlugin => {
        if (!nameOrPlugin) {
            return;
        }

        const plugin = getDTablePlugin(nameOrPlugin);
        if (!plugin || pluginSet.has((plugin.name))) {
            return;
        }
        plugins.push(plugin);
        pluginSet.add(plugin.name);

        if (!plugin.plugins?.length) {
            return;
        }
        initPluginsInner(plugins, plugin.plugins, pluginSet);
    });
    return plugins;
}

export function initPlugins(pluginsLike: DTablePluginLike[] = [], includeBuildIns = true): DTablePlugin[] {
    if (includeBuildIns && buildInPlugins.length) {
        pluginsLike.unshift(...buildInPlugins);
    }
    if (!pluginsLike?.length) {
        return [];
    }

    return initPluginsInner([], pluginsLike, new Set<string>());
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
