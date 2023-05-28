import {$, Cash, Selector} from '../cash';

/**
 * Check an element whether is disabled.
 *
 * @param selector Element selector to check.
 * @returns True if the element is disabled.
 */
export function isDisabled(selector: Selector): boolean {
    const $element = $(selector);
    if ($element[0]?.nodeType !== Node.ELEMENT_NODE) {
        return true;
    }

    if ($element.hasClass('disabled')) {
        return true;
    }

    const disabled = $element.attr('disabled');
    return !!disabled && disabled !== 'false';
}

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        isDisabled(): this;
    }
}

/* Extend as $.fn.isDisabled() */
$.fn.isDisabled = function (this: Cash) {
    return this.each((_, ele) => {
        isDisabled(ele);
    });
};
