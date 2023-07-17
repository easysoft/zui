import {$} from '../cash';

/* Declare types. */
declare module 'cash-dom' {
    interface CashStatic {
        getScript(src: string, func: () => void): Promise<void>;
    }
}

/** Define the $.getScript method. */
$.getScript = function (src: string, success?: () => void): Promise<void> {
    return new Promise((resolve) => {
        const $oldScripts = $(`script[src="${src}"]`);
        const onLoad = () => {
            resolve();
            success?.();
        };
        if ($oldScripts.length) {
            if ($oldScripts.dataset('loaded')) {
                onLoad();
            } else {
                const callbacks = $oldScripts.data('loadCalls') || [];
                callbacks.push(onLoad);
                $oldScripts.data('loadCalls', callbacks);
            }
            return;
        }
        const script = document.createElement('script');
        script.async = true;
        script.onload = () => {
            onLoad();
            const callbacks = $(script).dataset('loaded', true).data('loadCalls') || [];
            callbacks.forEach((callback: () => void) => callback());
        };
        script.src = src;
        $('head').append(script);
    });
};
