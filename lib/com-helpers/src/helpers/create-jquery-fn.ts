import type JQuery from 'jquery';
import {VanillaComponentClass} from './vanilla-component';

export function createJQueryFn<O extends object = {}>(name: string, ComponentClass: typeof VanillaComponentClass<O>) {
    function fn(this: JQuery, options?: O | string, ...args: unknown[]) {
        return $(this).each(function () {
            const $e = $(this);
            const component = $e.data(ComponentClass.NAME);
            if (component) {
                if (typeof options === 'string') {
                    component[options]?.(...args);
                }
            } else {
                if (typeof options === 'string') {
                    options = {} as O;
                }
                $e.data(ComponentClass.NAME, new ComponentClass(this, {
                    ...$e.data(),
                    ...options,
                } as O));
            }
        });
    }

    $.extend(true, $, {zui3: {[ComponentClass.name]: ComponentClass}, fn: {[name]: fn}});
}
