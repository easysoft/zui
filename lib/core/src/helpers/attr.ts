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
    attr(this: Cash, ...args: (string | Record<string, string | null> | null)[]): Cash | string | null | undefined {
        const [attrs, value] = args;
        if (!args.length || (args.length === 1 && typeof attrs === 'string')) {
            // eslint-disable-next-line prefer-spread
            return this._attr.apply(this, args as [attrs: Record<string, string>]);
        }
        if (typeof attrs === 'object') {
            if (attrs) {
                Object.keys(attrs).forEach((key) => {
                    const val = attrs[key];
                    if (val === null) {
                        this.removeAttr(key);
                    } else {
                        this._attr(key, val);
                    }
                });
            }
            return this;
        }
        if (value === null) {
            return this.removeAttr(attrs as string);
        }
        return this._attr(attrs as string, value as string);
    },
});
