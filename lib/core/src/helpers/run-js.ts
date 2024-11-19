import {$, Cash} from '../cash';
import {nextGid} from '.';

import type {Selector} from '../cash';

/**
 * Run javascript in an element.
 *
 * @param selector  Element selector to run.
 * @param jsCode    If not set, run all scripts in the element.
 */
export function runJS(selector: Selector, jsCode?: string | null, removeAfterRun = false) {
    const $element = $(selector);
    if (jsCode !== undefined) {
        if (typeof jsCode === 'string' && jsCode.length) {
            const id = `zui-runjs-${nextGid()}`;
            $element.append(`<script id="${id}">${jsCode}</script>`);
            if (removeAfterRun) {
                $element.find(`#${id}`).remove();
            }
        }
        return;
    }
    if ($element.is('script')) {
        const code = $element[0]?.textContent;
        if (code) {
            runJS($element.parent(), code);
        }
        return;
    }
    $element.find('script').each((_, script) => {
        runJS($element, (script as HTMLScriptElement).textContent);
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
    if (!jsCode.startsWith('return ') && !jsCode.endsWith(';')) {
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
