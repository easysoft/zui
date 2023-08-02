import {$} from '../cash';

export type GetLibCallback = () => void;

export type GetLibOptions = {
    src?: string;
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

        setLibRoot(root: string): void;

        getLib(options: GetLibOptions & {src: string}): Promise<unknown>;
        getLib(src: string, options?: GetLibOptions): Promise<unknown>;
        getLib(src: string, callback?: GetLibCallback): Promise<unknown>;
        getLib(src: string, options: GetLibCallback, callback?: GetLibCallback): Promise<unknown>;
        getLib(optionsOrSrc: string | (GetLibOptions & {src: string}), optionsOrCallback?: GetLibOptions | GetLibCallback, callback?: GetLibCallback): Promise<unknown>;

        /**
         * @deprecated Use $.getLib instead.
         */
        getScript(optionsOrSrc: string | (GetLibOptions & {src: string}), optionsOrCallback?: GetLibOptions | GetLibCallback, callback?: GetLibCallback): Promise<unknown>;
    }
}

$.setLibRoot = function (root: string): void {
    $.libRoot = root;
};


/** Define the $.getLib method. */
$.getLib = function (optionsOrSrc: string | (GetLibOptions & {src: string}), optionsOrCallback?: GetLibOptions | GetLibCallback, callback?: GetLibCallback): Promise<unknown> {

    return new Promise((resolve) => {
        const options: GetLibOptions = typeof optionsOrSrc === 'string' ? {src: optionsOrSrc} : optionsOrSrc;
        if (typeof optionsOrCallback === 'function') {
            options.success = optionsOrCallback;
        } else if (optionsOrCallback) {
            $.extend(options, optionsOrCallback);
        }
        if (callback) {
            options.success = callback;
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

        const {src, id} = options;
        if (!src) {
            throw new Error('[ZUI] No src provided for $.getLib.');
        }
        const libSrc = $.libRoot ? `${$.libRoot}/${src}`.replace('//', '/') : src;
        const $oldScripts = $(id ? `#${id}` : `script[src="${libSrc}"]`);
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
        script.src = libSrc;
        $('head').append(script);
    });
};

/** Define the $.getScript method. */
$.getScript = $.getLib;
