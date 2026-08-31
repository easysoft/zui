/* eslint-disable @typescript-eslint/unified-signatures */
import {$} from '../cash';
import {BUILD} from '../config';

export type GetLibCallback = () => void;

export interface LoadJSOptions {
    src: string;
    id?: string;
    async?: boolean;
    defer?: boolean;
    noModule?: boolean;
    type?: string;
    integrity?: string;
    version?: string;
    noCache?: boolean;
}

export interface LoadJSModuleOptions<T = unknown> extends LoadJSOptions {
    type: 'module';
    imports?: string | Record<string, string>;
    srcList?: {src: string; imports?: string | Record<string, string>}[];
    globalVar?: boolean | string;
    resolve?: (result: T) => void;
}

export interface LoadCSSOptions {
    src: string;
    id?: string;
    type?: 'css';
    version?: string;
    noCache?: boolean;
}

export type GetLibOptions = {
    src: string | (string | LoadJSOptions | LoadCSSOptions)[];
    id?: string;
    async?: boolean;
    defer?: boolean;
    noModule?: boolean;
    type?: string;
    integrity?: string;
    version?: string;
    name?: string;
    root?: string;
    css?: string;
    check?: string | boolean | (() => boolean | Promise<boolean>);
    dependencies?: string[];
    success?: GetLibCallback;
    noCache?: boolean;
};

type LoadResourceElement = HTMLLinkElement | HTMLScriptElement;

const LOAD_STATE_KEY = 'zuiLoadState';

function getLoadState(element: LoadResourceElement): 'loading' | 'loaded' | 'error' | undefined {
    return element.dataset[LOAD_STATE_KEY] as 'loading' | 'loaded' | 'error' | undefined;
}

function setLoadState(element: LoadResourceElement, state: 'loading' | 'loaded' | 'error'): void {
    element.dataset[LOAD_STATE_KEY] = state;
}

function createLoadError(type: 'CSS' | 'JS' | 'module', src: string, cause?: unknown): Error {
    return new Error(`[ZUI] Failed to load ${type} from: ${src}`, cause === undefined ? undefined : {cause});
}

function waitForResource(element: LoadResourceElement, type: 'CSS' | 'JS', src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const onLoad = () => {
            cleanup();
            resolve();
        };
        const onError = (event: Event | string) => {
            cleanup();
            reject(createLoadError(type, src, event));
        };
        const cleanup = () => {
            element.removeEventListener('load', onLoad);
            element.removeEventListener('error', onError);
        };
        element.addEventListener('load', onLoad);
        element.addEventListener('error', onError);
    });
}

/* Declare types. */
declare module 'cash-dom' {
    interface CashStatic {
        libRoot?: string;

        libVersion?: string;

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

export function setLibRoot(root: string, libVersion?: string): void {
    $.libRoot = root;
    if (libVersion) {
        $.libVersion = libVersion;
    }
};

export function registerLib(name: string, options: GetLibOptions): void {
    if (!$.libMap) {
        $.libMap = {};
    }
    if (!options.id) {
        options.id = `zui-lib-${name}`;
    }
    $.libMap[name] = {name, ...options};
};

/** Define the $.libRoot property. */
$.setLibRoot = setLibRoot;

/** Define the $.libMap property. */
$.registerLib = registerLib;

$.libVersion = BUILD.toString(36);

/**
 * Load a CSS file by append a link tag to the head.
 */
export function loadCSS(options: string | LoadCSSOptions): Promise<void> {
    if (typeof options === 'string') {
        options = {src: options};
    }
    const {src, id, version, noCache} = options;
    const $oldLinks = $(id ? `#${id}` : `link[href^="${src}"]`);
    if ($oldLinks.length) {
        const oldLink = $oldLinks[0] as HTMLLinkElement;
        const state = getLoadState(oldLink);
        if (state === 'loading') {
            return waitForResource(oldLink, 'CSS', src);
        }
        if (state !== 'error') {
            return Promise.resolve();
        }
        if (!noCache) {
            return Promise.reject(createLoadError('CSS', src));
        }
        $oldLinks.remove();
    }
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        setLoadState(link, 'loading');
        link.onload = () => {
            setLoadState(link, 'loaded');
            link.onload = null;
            link.onerror = null;
            resolve();
        };
        link.onerror = (event) => {
            setLoadState(link, 'error');
            link.onload = null;
            link.onerror = null;
            reject(createLoadError('CSS', src, event));
        };
        link.rel = 'stylesheet';
        link.href = `${src}${version ? `${src.includes('?') ? '&' : '?'}v=${version}` : ''}`;
        if (id) {
            link.id = id;
        }
        $('head').append(link);
    });
}

export function loadJS(options: string | LoadJSOptions): Promise<void> {
    if (typeof options === 'string') {
        options = {src: options};
    }
    const {src, id, version, noCache} = options;
    const $oldScripts = $(id ? `#${id}` : `script[src^="${src}"]`);
    if ($oldScripts.length) {
        const oldScript = $oldScripts[0] as HTMLScriptElement;
        const state = getLoadState(oldScript);
        if (state === 'loading') {
            return waitForResource(oldScript, 'JS', src);
        }
        if (state !== 'error') {
            return Promise.resolve();
        }
        if (!noCache) {
            return Promise.reject(createLoadError('JS', src));
        }
        $oldScripts.remove();
    }
    return new Promise((resolve, reject) => {
        const {async = true, defer = false, noModule = false, type, integrity} = options;
        const script = document.createElement('script');
        setLoadState(script, 'loading');
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
            setLoadState(script, 'loaded');
            script.onload = null;
            script.onerror = null;
            resolve();
        };
        script.onerror = (e) => {
            setLoadState(script, 'error');
            script.onload = null;
            script.onerror = null;
            reject(createLoadError('JS', src, e));
        };
        if (id) {
            script.id = id;
        }
        $('head').append(script);
        script.src = `${src}${version ? `${src.includes('?') ? '&' : '?'}v=${version}` : ''}`;
    });
}

export function loadModule<T = unknown>(options: string | LoadJSModuleOptions): Promise<T> {
    return new Promise((resolve, reject) => {
        if (typeof options === 'string') {
            options = {type: 'module', src: options};
        }
        const {src, imports, id, noCache} = options;
        const srcList = [...(options.srcList ?? [])];
        if (src) {
            srcList.unshift({src, imports});
        }

        const srcListID = srcList.map(x => x.src).join(',');
        const $oldScripts = $(id ? `#${id}` : `script[data-src-list="${srcListID}"]`);
        if ($oldScripts.length) {
            const oldScript = $oldScripts[0] as HTMLScriptElement;
            const state = getLoadState(oldScript);
            const moduleResult = $oldScripts.data('module');
            if (state === 'loaded' || moduleResult) {
                resolve(moduleResult);
                return;
            }
            if (state === 'error') {
                if (!noCache) {
                    reject(createLoadError('module', srcListID));
                    return;
                }
                $oldScripts.remove();
            } else {
                const callbacks = $oldScripts.data('resolves') || [];
                callbacks.push(resolve);
                $oldScripts.data('resolves', callbacks);
                const errorCallbacks = $oldScripts.data('rejects') || [];
                errorCallbacks.push(reject);
                $oldScripts.data('rejects', errorCallbacks);
                return;
            }
        }
        const {async = true, defer = false, integrity, globalVar, resolve: resolveCallback} = options;
        const script = document.createElement('script');
        const resolveID = `zui-module-resolve-${$.guid++}`;
        const $script = $(script);
        setLoadState(script, 'loading');
        Object.assign(window, {[resolveID]: (result: T) => {
            setLoadState(script, 'loaded');
            script.onerror = null;
            const scriptResolves: ((result: T) => void)[] = $script.data('module', result).data('resolves') || [];
            scriptResolves.forEach(x => x(result));
            $script.removeData('resolves').removeData('rejects');
            resolveCallback?.(result);
            resolve(result);

            delete (window as unknown as Record<string, unknown>)[resolveID];
        }});
        script.async = async;
        script.defer = defer;
        script.type = 'module';
        if (id) {
            script.id = id;
        }
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
        script.onerror = (event) => {
            setLoadState(script, 'error');
            script.onerror = null;
            const error = createLoadError('module', srcListID, event);
            const scriptRejects: ((reason: Error) => void)[] = $script.data('rejects') || [];
            scriptRejects.forEach(rejectCallback => rejectCallback(error));
            $script.removeData('resolves').removeData('rejects');
            delete (window as unknown as Record<string, unknown>)[resolveID];
            reject(error);
        };
        $('head').append(script);
    });
}

export async function getLib<T = unknown>(optionsOrSrc: string | string[] | GetLibOptions, optionsOrCallback?: Omit<GetLibOptions, 'src'> | GetLibCallback, callback?: GetLibCallback): Promise<T | undefined> {
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
    const {name, success, dependencies} = options;
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

    if (dependencies?.length) {
        for (const dependency of dependencies) {
            try {
                await getLib(dependency, options.noCache ? {noCache: true} : undefined);
            } catch (error) {
                console.warn(`[ZUI] Failed to load dependency ${dependency} for ${name}`, error);
            }
        }
    }

    let {check = true} = options;
    if (check === true && name) {
        check = name;
    }
    const libVarName = typeof check === 'string' ? check : name;
    let moduleResult: T | undefined;
    const getLibVar = (): T | undefined => {
        let libVar: T | undefined;
        if (libVarName) {
            libVar = ((window as unknown as Record<string, unknown>)[libVarName] as T || moduleResult);
        }
        if (libVar instanceof Element) {
            return;
        }
        return libVar;
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

    const {root = $.libRoot, version = $.libVersion} = options;
    for (let srcOptions of srcList) {
        if (typeof srcOptions === 'string') {
            srcOptions = {src: srcOptions};
        }
        let {src} = srcOptions;
        if (root && !/https?:\/\//.test(src)) {
            src = `${root}${(root.endsWith('/') || src.startsWith('/')) ? '' : '/'}${src}`;
        }
        const srcID = srcOptions.id ?? options.id;
        const type = (srcOptions.type ?? options.type) ?? (src.endsWith('.css') ? 'css' : 'js');
        const loadOptions = {
            ...options,
            ...srcOptions,
            version,
            src,
            id: srcList.length > 1 ? `${srcID}-${type}-${src.split('/').pop()!.replaceAll(/[?.]/g, '_')}` : srcID,
        };

        if (type === 'css') {
            await loadCSS(loadOptions as LoadCSSOptions);
            continue;
        }
        if (type === 'module') {
            moduleResult = await loadModule(loadOptions as LoadJSModuleOptions);
            continue;
        }
        await loadJS(loadOptions as LoadJSOptions);
    }
    return onSuccess();
};

/** Define the $.getLib method. */
$.getLib = getLib;

/** Define the $.getScript method. */
$.getScript = $.getLib;
