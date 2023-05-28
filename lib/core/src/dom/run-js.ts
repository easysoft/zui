import {$, Cash, Selector} from '../cash';

/**
 * Run javascript in an element.
 *
 * @param selector  Element selector to run.
 * @param jsCode    If not set, run all scripts in the element.
 */
export function runJS(selector: Selector, jsCode?: string) {
    const $element = $(selector);
    if (jsCode !== undefined) {
        const script = document.createElement('script');
        script.async = false;
        script.innerHTML = jsCode;
        $element.append(script);
        return;
    }
    $element.find('script').each((_, script) => {
        runJS($element, (script as HTMLScriptElement).innerHTML);
        script.remove();
    });
}

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        runJS(jsCode?: string): this;
    }
}

/* Extend as $.fn.runJS() */
$.fn.runJS = function (this: Cash, jsCode?: string) {
    return this.each((_, ele) => {
        runJS(ele, jsCode);
    });
};
