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
function loadCSS(options: string | LoadCSSOptions): Promise<void> {
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

function loadJS(options: string | LoadJSOptions): Promise<void> {
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
        script.src = src;
        $('head').append(script);
    });
}

/** Define the $.getLib method. */
$.getLib = async function<T = unknown> (optionsOrSrc: string | string[] | GetLibOptions, optionsOrCallback?: Omit<GetLibOptions, 'src'> | GetLibCallback, callback?: GetLibCallback): Promise<T | undefined> {
    let options: GetLibOptions = typeof optionsOrSrc === 'string' ? {src: optionsOrSrc} : $.extend({}, optionsOrSrc);
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
    const lib = $.libMap && name && $.libMap[name];
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
    const getLibVar = (): T | undefined => {
        return libVarName ? ((window as unknown as Record<string, unknown>)[libVarName] as T) : undefined;
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
    await Promise.all(srcList.map(srcOptions => {
        if (typeof srcOptions === 'string') {
            srcOptions = {src: srcOptions};
        }
        let {src} = srcOptions;
        if (root) {
            src = `${root}${(root.endsWith('/') || src.startsWith('/')) ? '' : '/'}${src}`;
        }
        const loadOptions = {
            ...options,
            ...srcOptions,
            src,
        };
        if (srcOptions.type === 'css' || (!srcOptions.type && src.endsWith('.css'))) {
            return loadCSS(loadOptions as LoadCSSOptions);
        }
        return loadJS(loadOptions as LoadJSOptions);
    }));
    return onSuccess();
};

/** Define the $.getScript method. */
$.getScript = $.getLib;
