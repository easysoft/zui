import {$} from '@zui/core';
import type {Selector} from 'cash-dom';

export type AutoHeightOptions = {
    fast?: boolean;
};

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        autoHeight(this: Cash, options?: AutoHeightOptions): Cash;
    }

    interface CashStatic {
        autoHeight(selector: Selector, options?: AutoHeightOptions): Cash;
    }
}

function autoHeight(selector: Selector) {
    const $element = $(selector);
    $element.css({minHeight: 0});
    const maxHeight = +($element.css('max-height') || '').replace('px', '');
    let minHeight = Math.max(32, ($element[0] as HTMLTextAreaElement).scrollHeight);
    if (maxHeight && minHeight > maxHeight) {
        minHeight = maxHeight;
    }
    return $element.css({minHeight});
}

$.fn.autoHeight = function (options: AutoHeightOptions) {
    return this.each(function () {
        const $element = $(this);
        if (!$element.data('auto-height')) {
            $element.on('input paste change', function (this: Element) {
                autoHeight(this);
            }).data('auto-height', true);
        }
        if (!options?.fast) {
            autoHeight($element);
        }
        setTimeout(() => autoHeight($element), 100);
    });
};

$.autoHeight = autoHeight;
