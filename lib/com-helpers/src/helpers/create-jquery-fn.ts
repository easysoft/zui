import type JQuery from 'jquery';
import {ComponentClass} from './vanilla-component';

export function createJQueryFn<O extends object = {}>(name: string, ComponentClassType: typeof ComponentClass<O>) {
    function fn(this: JQuery, options?: O | string, ...args: unknown[]) {
        return $(this).each(function () {
            const $e = $(this);
            const component = $e.data(ComponentClassType.NAME);
            if (component) {
                if (typeof options === 'string') {
                    component[options]?.(...args);
                }
            } else {
                if (typeof options === 'string') {
                    options = {} as O;
                }
                $e.data(ComponentClassType.NAME, new ComponentClassType(this, {
                    ...$e.data(),
                    ...options,
                } as O));
            }
        });
    }

    $.extend(true, $, {zui3: {[ComponentClassType.name]: ComponentClassType}, fn: {[name]: fn}});
}
