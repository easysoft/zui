import type JQuery from 'jquery';
import {ComponentClass} from './vanilla-component';

export function createJQueryFn<O extends object = {}>(ComponentClassType: typeof ComponentClass<O>, name?: string) {
    function fn(this: JQuery, options?: O | string, ...args: unknown[]) {
        return $(this).each(function () {
            const $e = $(this);
            const component = $e.data(ComponentClassType.KEY);
            if (component) {
                if (typeof options === 'string') {
                    component[options]?.(...args);
                }
            } else {
                if (typeof options === 'string') {
                    options = {} as O;
                }
                $e.data(ComponentClassType.KEY, new ComponentClassType(this, {
                    ...$e.data(),
                    ...options,
                } as O));
            }
        });
    }

    $.extend(true, $, {zui3: {[name ?? ComponentClassType.NAME]: ComponentClassType}, fn: {[(name ?? ComponentClassType.NAME).toLowerCase()]: fn}});
}
