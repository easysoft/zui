import {$, Cash} from '../cash';

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        _attr(): undefined;
        _attr(attrs: string): string | null;
        _attr(attrs: string, value: string): this;
        _attr(attrs: Record<string, string>): this;

        attr(attrs: string, value: string | null): Cash;
        attr(attrs: Record<string, string | null>): Cash;
    }
}

/* Backup the origin $.fn.attr() method. */
$.fn._attr = $.fn.attr;

/* Extend the attr method. */
$.fn.extend({
    attr(this: Cash, attrs?: string | Record<string, string | null>, value?: string | null): Cash | string | null | undefined {
        if (typeof attrs === 'object') {
            Object.keys(attrs).forEach((key) => {
                const val = attrs[key];
                if (val === null) {
                    this.removeAttr(key);
                } else {
                    this._attr(key, val);
                }
            });
            return this;
        }
        if (value === null) {
            return this.removeAttr(attrs as string);
        }
        return this._attr(attrs as string, value as string);
    },
});
