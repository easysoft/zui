import {$, Cash, Selector, Comparator} from '../cash';
import {isVisible} from './is-visible';

/**
 * Options for {@link scrollIntoView}.
 */
type CashScrollIntoViewOptions = ScrollIntoViewOptions & {
    ifNeeded?: boolean;
    container?: Comparator;
};

function hasScrollbar(element: HTMLElement, direction: 'vert' | 'horz' | 'both' = 'both') {
    if (direction === 'vert' || direction === 'both') {
        if (element.clientHeight < element.scrollHeight) {
            return true;
        }
    }

    if (direction === 'horz' || direction === 'both') {
        if (element.clientWidth < element.scrollWidth) {
            return true;
        }
    }

    return false;
}

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
    const {ifNeeded = true, container, ...other} = options || {};
    $element.each((_, ele) => {
        if (container) {
            const $container = $(ele).closest(container);
            if (!$container.length || !hasScrollbar($container[0] as HTMLElement)) {
                return;
            }
        }
        if (ifNeeded) {
            if ((ele as unknown as {scrollIntoViewIfNeeded?: (options: ScrollIntoViewOptions) => void}).scrollIntoViewIfNeeded) {
                return (ele as unknown as {scrollIntoViewIfNeeded: (options: ScrollIntoViewOptions) => void}).scrollIntoViewIfNeeded(other);
            }
            if (isVisible(ele, {viewport: ele.getBoundingClientRect()})) {
                return;
            }
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
