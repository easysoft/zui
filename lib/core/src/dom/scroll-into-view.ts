import {$, Cash, Selector} from '../cash';
import {isVisible} from './is-visible';

/**
 * Options for {@link scrollIntoView}.
 */
type CashScrollIntoViewOptions = ScrollIntoViewOptions & {
    ifNeeded?: boolean;
};

/**
 * Scroll into view.
 *
 * @param selector Element selector to scroll into view.
 * @param options  Options.
 * @returns True if the element is visible.
 * @see https://stackoverflow.com/a/26039199
 */
export function scrollIntoView(selector: Selector, options?: CashScrollIntoViewOptions): Cash {
    const $element = $(selector);
    const {ifNeeded = true, ...other} = options || {};
    $element.each((_, ele) => {
        if (ifNeeded && isVisible(ele, {viewport: ele.getBoundingClientRect()})) {
            return;
        }
        ele.scrollIntoView(other);
    });
    return $element;
}

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        scrollIntoView(options?: CashScrollIntoViewOptions): this;
    }
}

/* Extend as $.fn.scrollIntoView() */
$.fn.scrollIntoView = function (this: Cash, options?: CashScrollIntoViewOptions) {
    return this.each((_, ele) => {
        scrollIntoView(ele, options);
    });
};
