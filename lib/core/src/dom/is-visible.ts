import {$, Cash, Selector} from '../cash';

/**
 * Options for {@link isVisible}.
 */
type ISVisibleOptions = {
    /** Whether to check if the element is fully visible. */
    fullyCheck: boolean;
};

/**
 * Check an element whethear is visible in the current viewport.
 *
 * @param selector Element selector to check.
 * @param options  Options.
 * @returns True if the element is visible.
 * @see https://stackoverflow.com/a/26039199
 */
export function isVisible(selector: Selector, options?: ISVisibleOptions): boolean {
    const element = $(selector)[0];
    if (!element) {
        return false;
    }

    const {left, top, width, height} = element.getBoundingClientRect();
    const {innerHeight, innerWidth} = window;
    const {clientHeight, clientWidth} = document.documentElement;
    const windowHeight = innerHeight || clientHeight;
    const windowWidth = innerWidth || clientWidth;

    if (options?.fullyCheck) {
        return (
            (left >= 0)
                && (top >= 0)
                && ((left + width) <= windowWidth)
                && ((top + height) <= windowHeight)
        );
    }
    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (top <= windowHeight) && ((top + height) >= 0);
    const horInView = (left <= windowWidth) && ((left + width) >= 0);

    return vertInView && horInView;
}

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        isVisible(options?: ISVisibleOptions): this;
    }
}

/* Extend as $.fn.isVisible() */
$.fn.isVisible = function (this: Cash, options?: ISVisibleOptions) {
    return this.each((_, ele) => {
        isVisible(ele, options);
    });
};
