import {$, Cash, Selector} from '../cash';

/**
 * Listen element resize with ResizeObserver.
 *
 * @param selector Element selector to check.
 * @returns True if the element is disabled.
 */
export function listenResize(selector: Selector, callback: ResizeObserverCallback): ResizeObserver {
    const $elements = $(selector);
    const observer = new ResizeObserver(callback);

    $elements.each((_, ele) => {
        observer.observe(ele);
    });

    return observer;
}

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        resize(callback: ResizeObserverCallback): ResizeObserver;
    }
}

/* Extend as $.fn.resize() */
$.fn.resize = function (this: Cash, callback: ResizeObserverCallback) {
    return listenResize(this, callback);
};
