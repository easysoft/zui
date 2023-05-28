import {$, Cash, Selector} from '../cash';

/**
 * Select text in an element.
 *
 * @param selector Element selector to select.
 * @returns True if the text was selected.
 */
export function selectText(selector: Selector): boolean {
    const element = $(selector)[0];
    if (!element) {
        return false;
    }
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        element.select();
        return true;
    }
    const getSelection = window.getSelection;
    if (getSelection) {
        const selection = getSelection();
        if (selection) {
            const range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            return true;
        }
    }
    return false;
}

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        selectText(): this;
    }
}

/* Extend as $.fn.selectText() */
$.fn.selectText = function (this: Cash) {
    return this.each((_, ele) => {
        selectText(ele);
    });
};
