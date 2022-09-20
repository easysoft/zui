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

function getDTablePlugin(nameOrPlugin: DTablePluginLike): DTablePlugin | undefined {
    if (typeof nameOrPlugin === 'string') {
        const plugin = getPlugin(nameOrPlugin);
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

export function initPlugins(pluginsLike?: DTablePluginLike[]): DTablePlugin[] {
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
