import {$} from '../cash';

export type GetLibCallback = () => void;

export type GetLibOptions = {
    src: string;
    id?: string;
    async?: boolean;
    defer?: boolean;
    noModule?: boolean;
    type?: string;
    integrity?: string;
    name?: string;
    success?: GetLibCallback;
};

/* Declare types. */
declare module 'cash-dom' {
    interface CashStatic {
        libRoot?: string;

        libMap?: Record<string, GetLibOptions>;

        setLibRoot(root: string): void;

        registerLib(name: string, options: GetLibOptions): void;

        getLib(options: GetLibOptions): Promise<unknown>;
        getLib(src: string): Promise<unknown>;
        getLib(src: string, options: Omit<GetLibOptions, 'src'>): Promise<unknown>;
        getLib(src: string, callback: GetLibCallback): Promise<unknown>;
        getLib(src: string, options: GetLibCallback, callback?: GetLibCallback): Promise<unknown>;
        getLib(optionsOrSrc: string | GetLibOptions, optionsOrCallback?: Omit<GetLibOptions, 'src'> | GetLibCallback, callback?: GetLibCallback): Promise<unknown>;

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
    $.libMap[name] = options;
};

/** Define the $.getLib method. */
$.getLib = function (optionsOrSrc: string | (GetLibOptions & {src: string}), optionsOrCallback?: Omit<GetLibOptions, 'src'> | GetLibCallback, callback?: GetLibCallback): Promise<unknown> {
    return new Promise((resolve) => {
        let options: GetLibOptions = typeof optionsOrSrc === 'string' ? {src: optionsOrSrc} : $.extend({}, optionsOrSrc);
        if (typeof optionsOrCallback === 'function') {
            options.success = optionsOrCallback;
        } else if (optionsOrCallback) {
            $.extend(options, optionsOrCallback);
        }
        if (callback) {
            options.success = callback;
        }

        let {src} = options;
        if (!src) {
            throw new Error('[ZUI] No src provided for $.getLib.');
        }
        if ($.libMap && $.libMap[src]) {
            options = $.extend({}, $.libMap[src], options);
            src = options.src;
        }
        if ($.libRoot) {
            src = `${$.libRoot}/${src}`.replace('//', '/');
        }

        const {success, name} = options;
        const getLibVar = () => {
            return name ? (window as unknown as Record<string, unknown>)[name] : undefined;
        };
        const onSuccess = () => {
            resolve(getLibVar());
            success?.();
        };
        if (getLibVar()) {
            onSuccess();
            return;
        }

        const {id} = options;
        const $oldScripts = $(id ? `#${id}` : `script[src="${src}"]`);
        if ($oldScripts.length) {
            if ($oldScripts.dataset('loaded')) {
                onSuccess();
            } else {
                const callbacks = $oldScripts.data('loadCalls') || [];
                callbacks.push(onSuccess);
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
            onSuccess();
            const callbacks: GetLibCallback[] = $(script).dataset('loaded', true).data('loadCalls') || [];
            callbacks.forEach(x => x());
            $(script).removeData('loadCalls');
        };
        script.src = src;
        $('head').append(script);
    });
};

/** Define the $.getScript method. */
$.getScript = $.getLib;
