import {$, Cash} from '../cash';

/**
 * Check whether the element is detached from document.
 * @param element  The element to check.
 * @returns       Whether the element is detached from document.
 */
export function isElementDetached(element: Node): boolean {
    if (element.parentNode === document) {
        return false;
    }
    if (!element.parentNode) {
        return true;
    }
    return isElementDetached(element.parentNode);
}

/* Declare types. */
declare module 'cash-dom' {
    interface CashStatic {
        isDetached(element: Node): boolean;
    }

    interface Cash {
        isDetached(): boolean;
    }
}

/* Extend $.isDetached. */
$.isDetached = isElementDetached;

/* Extend as $.fn.isDisabled(). */
$.fn.isDetached = function (this: Cash) {
    const element = this[0];
    return !element || isElementDetached(element);
};
