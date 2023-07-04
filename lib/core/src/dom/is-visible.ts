import {$, Cash, Selector} from '../cash';

/**
 * Options for {@link isVisible}.
 */
type ISVisibleOptions = {
    /** Whether to check if the element is fully visible. */
    fullyCheck?: boolean;
    viewport?: {left: number, top: number, width: number, height: number} | DOMRectReadOnly
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

    let {viewport} = options || {};
    const {left, top, width, height} = element.getBoundingClientRect();
    if (!viewport) {
        const {innerHeight, innerWidth} = window;
        const {clientHeight, clientWidth} = document.documentElement;
        viewport = {left: 0, top: 0, width: innerWidth || clientWidth, height: innerHeight || clientHeight};
    }
    const {left: viewportLeft, top: viewportTop, width: viewportWidth, height: viewportHeight} = viewport;
    if (options?.fullyCheck) {
        return (
            (left >= viewportLeft)
                && (top >= viewportTop)
                && ((left + width) <= viewportWidth)
                && ((top + height) <= viewportHeight)
        );
    }
    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const horInView = (left <= viewportWidth) && ((left + width) >= viewportLeft);
    const vertInView = (top <= viewportHeight) && ((top + height) >= viewportTop);

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
