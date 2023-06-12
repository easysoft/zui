import {$, Cash, Selector, CashStatic} from '../cash';

/**
 * Run javascript in an element.
 *
 * @param selector  Element selector to run.
 * @param jsCode    If not set, run all scripts in the element.
 */
export function runJS(selector: Selector, jsCode?: string, removeAfterRun = false) {
    const $element = $(selector);
    if (jsCode !== undefined) {
        const id = `zui-runjs-${$.guid++}`;
        $element.append(`<script id="${id}">${jsCode}</script>`);
        if (removeAfterRun) {
            $element.find(`#${id}`).remove();
        }
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

    interface CashStatic {
        runJS<T>(jsCode: string, ...args: [name: string, value: unknown][]): T;
    }
}

/* Extend as $.runJS() */
$.runJS = <T>(jsCode: string, ...args: [name: string, value: unknown][]): T => {
    jsCode = jsCode.trim();
    if (!jsCode.startsWith('return ')) {
        jsCode = `return ${jsCode}`;
    }
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const func = new Function(...args.map(([name]) => name), jsCode);
    return func(...args.map(([, value]) => value));
};

/* Extend as $.fn.runJS() */
$.fn.runJS = function (this: Cash, jsCode?: string) {
    return this.each((_, ele) => {
        runJS(ele, jsCode);
    });
};
