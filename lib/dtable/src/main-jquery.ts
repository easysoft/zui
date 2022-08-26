import {DTableOptions} from './types/options';
import {DTable} from './dtable';

/// <reference types="jquery" />

function dtable(this: JQuery, options?: DTableOptions | string, ...args: unknown[]) {
    $(this).each(function () {
        const $e = $(this);
        const table = $e.data(DTable.NAME);
        if (table) {
            if (typeof options === 'string') {
                table[table]?.(...args);
            }
        } else {
            if (typeof options === 'string') {
                options = {};
            }
            $e.data(DTable.NAME, new DTable(this, {
                ...$e.data(),
                ...options,
            }));
        }
    });
}

$.extend($.fn, {
    dtable,
});

export default {};
