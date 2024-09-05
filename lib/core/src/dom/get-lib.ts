import {$} from '../cash';

export type GetLibCallback = () => void;

export interface LoadJSOptions {
    src: string;
    id?: string;
    async?: boolean;
    defer?: boolean;
    noModule?: boolean;
    type?: string;
    integrity?: string;
}

export interface LoadJSModuleOptions<T = unknown> extends LoadJSOptions {
    type: 'module',
    imports?: string | Record<string, string>;
    srcList?: {src: string, imports?: string | Record<string, string>}[];
    globalVar?: boolean | string;
    resolve?: (result: T) => void;
}

export interface LoadCSSOptions {
    src: string;
    id?: string;
    type?: 'css';
}

export type GetLibOptions = {
    src: string | (string | LoadJSOptions | LoadCSSOptions)[];
    id?: string;
    async?: boolean;
    defer?: boolean;
    noModule?: boolean;
    type?: string;
    integrity?: string;
    name?: string;
    root?: string;
    css?: string;
    check?: string | boolean | (() => boolean | Promise<boolean>);
    success?: GetLibCallback;
};

/* Declare types. */
declare module 'cash-dom' {
    interface CashStatic {
        libRoot?: string;

        libMap?: Record<string, GetLibOptions>;

        setLibRoot(root: string): void;

        registerLib(name: string, options: GetLibOptions): void;

        getLib<T = unknown>(options: GetLibOptions): Promise<T>;
        getLib<T = unknown>(src: string | string[]): Promise<T>;
        getLib<T = unknown>(src: string | string[], options: Omit<GetLibOptions, 'src'>): Promise<T>;
        getLib<T = unknown>(src: string | string[], callback: GetLibCallback): Promise<T>;
        getLib<T = unknown>(src: string | string[], options: GetLibCallback, callback?: GetLibCallback): Promise<T>;
        getLib<T = unknown>(optionsOrSrc: string | string[] | GetLibOptions, optionsOrCallback?: Omit<GetLibOptions, 'src'> | GetLibCallback, callback?: GetLibCallback): Promise<T>;

        /**
         * @deprecated Use $.getLib instead.
         */
        getScript(optionsOrSrc: string | (GetLibOptions & {src: string}), optionsOrCallback?: Omit<GetLibOptions, 'src'> | GetLibCallback, callback?: GetLibCallback): Promise<unknown>;
    }
}

/** Define the $.libRoot property. */
$.setLibRoot = function (root: string): void {
    $.libRoot = root;
};

/** Define the $.libMap property. */
$.registerLib = function (name: string, options: GetLibOptions): void {
    if (!$.libMap) {
        $.libMap = {};
    }
    if (!options.name && options.id) {
        options.id = `zui-lib-${name}`;
    }
    $.libMap[name] = options;
};

/**
 * Load a CSS file by append a link tag to the head.
 */
export function loadCSS(options: string | LoadCSSOptions): Promise<void> {
    return new Promise((resolve, reject) => {
        if (typeof options === 'string') {
            options = {src: options};
        }
        const {src, id} = options;
        const $oldLinks = $(id ? `#${id}` : `link[href="${src}"]`);
        if ($oldLinks.length) {
            resolve();
            return;
        }
        const link = document.createElement('link');
        link.onload = () => {
            resolve();
        };
        link.onerror = () => {
            reject(new Error(`[ZUI] Failed to load CSS from: ${src}`));
        };
        link.rel = 'stylesheet';
        link.href = src;
        if (id) {
            link.id = id;
        }
        $('head').append(link);
    });
}

export function loadJS(options: string | LoadJSOptions): Promise<void> {
    return new Promise((resolve, reject) => {
        if (typeof options === 'string') {
            options = {src: options};
        }
        const {src, id} = options;
        const $oldScripts = $(id ? `#${id}` : `script[src="${src}"]`);
        if ($oldScripts.length) {
            if ($oldScripts.dataset('loaded')) {
                resolve();
            } else {
                const callbacks = $oldScripts.data('loadCalls') || [];
                callbacks.push(resolve);
                $oldScripts.data('loadCalls', callbacks);
            }
            return;
        }
        const {async = true, defer = false, noModule = false, type, integrity} = options;
        const script = document.createElement('script');
        script.async = async;
        script.defer = defer;
        script.noModule = noModule;
        if (type) {
            script.type = type;
        }
        if (integrity) {
            script.integrity = integrity;
        }

        script.onload = () => {
            resolve();
            const callbacks: GetLibCallback[] = $(script).dataset('loaded', true).data('loadCalls') || [];
            callbacks.forEach(x => x());
            $(script).removeData('loadCalls');
        };
        script.onerror = () => {
            reject(new Error(`[ZUI] Failed to load JS from: ${src}`));
        };
        $('head').append(script);
        script.src = src;
    });
}

export function loadModule<T = unknown>(options: string | LoadJSModuleOptions): Promise<T> {
    return new Promise((resolve) => {
        if (typeof options === 'string') {
            options = {type: 'module', src: options};
        }
        const {src, imports, srcList = [], id} = options;
        if (src) {
            srcList.unshift({src, imports});
        }

        const srcListID = srcList.map(x => x.src).join(',');
        const $oldScripts = $(id ? `#${id}` : `script[data-src-list="${srcListID}"]`);
        if ($oldScripts.length) {
            const moduleResult = $oldScripts.data('module');
            if (moduleResult) {
                resolve(moduleResult);
            } else {
                const callbacks = $oldScripts.data('resolves') || [];
                callbacks.push(resolve);
                $oldScripts.data('resolves', callbacks);
            }
            return;
        }
        const {async = true, defer = false, integrity, globalVar, resolve: resolveCallback} = options;
        const script = document.createElement('script');
        const resolveID = `zui-module-resolve-${$.guid++}`;
        const $script = $(script);
        Object.assign(window, {[resolveID]: (result: T) => {
            const scriptResolves: ((result: T) => void)[] = $script.data('module', result).data('resolves') || [];
            scriptResolves.forEach(x => x(result));
            $script.removeData('resolves').removeData('module');
            resolveCallback?.(result);
            resolve(result);
            delete (window as unknown as Record<string, unknown>)[resolveID];
        }});
        script.async = async;
        script.defer = defer;
        script.type = 'module';
        $script.attr('data-src-list', srcListID).attr('data-resolve-id', resolveID);
        const importNames: string[] = [];
        script.text = [
            ...srcList.map(({src: importSrc, imports: importMap}) => {
                if (imports) {
                    if (typeof importMap === 'string') {
                        importNames.push(importMap);
                        return `import * as ${importMap} from '${importSrc}';`;
                    }
                    if (importMap) {
                        importNames.push(...Object.values(importMap));
                        return `import {${Object.entries(importMap).map(([key, value]) => `${key} as ${value}`).join(',')}} from '${importSrc}';`;
                    }
                }
                return `import '${importSrc}';`;
            }),
            `const zuiImportResult = {${importNames.map(x => `${x}: ${x},`)}};`,
            globalVar ? `Object.assign(window, ${globalVar === true ? 'zuiImportResult' : `{${globalVar}: zuiImportResult}`});` : '',
            `if(window['${resolveID}']) window['${resolveID}'](zuiImportResult);`,
        ].join('\n');
        if (integrity) {
            script.integrity = integrity;
        }
        $('head').append(script);
    });
}

/** Define the $.getLib method. */
$.getLib = async function<T = unknown> (optionsOrSrc: string | string[] | GetLibOptions, optionsOrCallback?: Omit<GetLibOptions, 'src'> | GetLibCallback, callback?: GetLibCallback): Promise<T | undefined> {
    if (typeof optionsOrSrc === 'string') {
        optionsOrSrc = ($.libMap?.[optionsOrSrc] || {src: optionsOrSrc}) as GetLibOptions;
    }
    let options: GetLibOptions = Array.isArray(optionsOrSrc) ? {src: optionsOrSrc} : $.extend({}, optionsOrSrc);
    if (typeof optionsOrCallback === 'function') {
        options.success = optionsOrCallback;
    } else if (optionsOrCallback) {
        $.extend(options, optionsOrCallback);
    }
    if (callback) {
        options.success = callback;
    }

    let {src: srcList} = options;
    const {name, success} = options;
    const lib = ($.libMap && name) ? $.libMap[name] : null;
    if (lib) {
        options = $.extend({}, lib, options);
        srcList = lib.src || options.src;
    }
    if (typeof srcList === 'string') {
        srcList = [srcList];
    }
    if (!srcList || !srcList.length) {
        throw new Error('[ZUI] No src provided for $.getLib.');
    }

    let {check = true} = options;
    if (check === true && name) {
        check = name;
    }
    const libVarName = typeof check === 'string' ? check : name;
    let moduleResult: T | undefined;
    const getLibVar = (): T | undefined => {
        return libVarName ? ((window as unknown as Record<string, unknown>)[libVarName] as T || moduleResult) : undefined;
    };
    if (typeof check === 'string') {
        check = () => !!getLibVar();
    }
    const onSuccess = () => {
        success?.();
        return getLibVar();
    };
    if (typeof check === 'function') {
        const checkResult = await check();
        if (checkResult) {
            return onSuccess();
        }
    }

    const {root = $.libRoot} = options;
    for (let srcOptions of srcList) {
        if (typeof srcOptions === 'string') {
            srcOptions = {src: srcOptions};
        }
        let {src} = srcOptions;
        if (root && !/https?:\/\//.test(src)) {
            src = `${root}${(root.endsWith('/') || src.startsWith('/')) ? '' : '/'}${src}`;
        }
        const loadOptions = {
            ...options,
            ...srcOptions,
            src,
        };
        if (srcOptions.type === 'css' || (!srcOptions.type && src.endsWith('.css'))) {
            await loadCSS(loadOptions as LoadCSSOptions);
            continue;
        }
        if (loadOptions.type === 'module') {
            moduleResult = await loadModule(loadOptions as LoadJSModuleOptions);
            continue;
        }
        await loadJS(loadOptions as LoadJSOptions);
    }
    return onSuccess();
};

/** Define the $.getScript method. */
$.getScript = $.getLib;
