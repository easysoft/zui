import {DTable} from './dtable';

/// <reference types="jquery" />

function dtable(this: JQuery, options?: DTableOptions | string, ...args: unknown[]) {
    return $(this).each(function () {
        const $e = $(this);
        const table = $e.data(DTable.NAME);
        if (table) {
            if (typeof options === 'string') {
                table[options]?.(...args);
            }
        } else {
            if (typeof options === 'string') {
                options = {} as DTableOptions;
            }
            $e.data(DTable.NAME, new DTable(this, {
                ...$e.data(),
                ...options,
            }));
        }
    });
}

$.extend(true, $, {zui3: {DTable}, fn: {dtable}});

export default {};
