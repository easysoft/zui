import {$, Cash, CashStatic} from '../cash';

/**
 * Cache for data associated with the target object.
 */
const cache = new WeakMap<object, Record<string, unknown>>();

/**
 * Store data associated with the target object with key value in the cache.
 *
 * @param target  Target object to store data.
 * @param key     Key to store.
 * @param value   Value to store.
 */
export function storeData(target: object, key: string | null, value?: unknown): void;

/**
 * Store data associated with the target object in the cache.
 *
 * @param target  Target object to store data.
 * @param data    Data to store.
 */
export function storeData(target: object, data: Record<string, unknown>): void;

/**
 * Store data associated with the target object in the cache.
 *
 * @param target    Target object to store data.
 * @param keyOrData Key or data to store.
 * @param value     Value to store.
 */
export function storeData(target: object, keyOrData: string | Record<string, unknown> | null, value?: unknown): void {
    const hasCache = cache.has(target);
    const data = hasCache ? cache.get(target)! : {};
    if (typeof keyOrData === 'string') {
        data[keyOrData] = value;
    } else if (keyOrData === null) {
        Object.keys(data).forEach((key) => {
            delete data[key];
        });
    } else {
        Object.assign(data, keyOrData);
    }

    Object.keys(data).forEach((key) => {
        if (data[key] === undefined) {
            delete data[key];
        }
    });

    if (Object.keys(data).length) {
        if (!hasCache && target instanceof Element) {
            Object.assign(data, $(target).dataset(), data);
        }
        cache.set(target, data);
    } else {
        cache.delete(target);
    }
}

/**
 * Take data associated with the target object from the cache.
 *
 * @param target Target object to take data.
 */
export function takeData(target: object): Record<string, unknown>;

/**
 * Take data associated by key with the target object from the cache.
 *
 * @param target  Target object to take data.
 * @param key     Key to take.
 */
export function takeData(target: object, key: string): unknown;

/**
 * Take data associated with the target object from the cache.
 *
 * @param target Target object to take data.
 * @param key    Key to take.
 * @returns      Data associated with the target object.
 */
export function takeData(target: object, key?: string) {
    let data = cache.get(target);
    if (!data && target instanceof Element) {
        data = $(target).dataset(true);
    }
    if (key === undefined) {
        return data || {};
    }
    return data?.[key];
}

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        _data(): Record<string, unknown> | undefined;
        _data(name: string): unknown;
        _data(name: string, value: unknown): Cash;
        _data(dataset: Record<string, unknown>): Cash;

        dataset<T extends Record<string, unknown>>(parse?: boolean): T | undefined;
        dataset<T>(parse: boolean, name: string): T | undefined;
        dataset<T>(name: string): T;
        dataset(name: string, value: unknown): Cash;
        dataset(dataset: Record<string, unknown>): Cash;

        removeData(name?: string): Cash;
    }

    interface CashStatic {
        parseVal<T>(val: string): T;
    }
}

/* Add static methods. */
$.parseVal = <T> (val: string): T => {
    try {
        return JSON.parse(val) as T;
    } catch (e) {
        return val as unknown as T;
    }
};


/* Backup the origin $.fn.data method. */
$.fn._data = $.fn.data;
$.fn.dataset = function (this: Cash, ...args: (boolean | string | Record<string, unknown> | unknown)[]) {
    if (args.length && typeof args[0] === 'boolean') {
        const parse = args.shift() as boolean;
        const data = (this._data as (...args: unknown[]) => unknown)(...args);
        if (parse) {
            if (typeof args[1] === 'string') {
                return $.parseVal(data as string) as Cash;
            }
            if ($.isPlainObject(data)) {
                Object.keys(data).forEach((key) => {
                    data[key] = $.parseVal(data[key] as string);
                });
            }
        }
        return data as Cash;
    }
    return (this._data as (...args: unknown[]) => Cash)(...args);
};

/* Extend as $.fn.data() */
$.fn.data = function (this: Cash, ...args: (string | Record<string, unknown> | unknown)[]) {
    if (!this.length) {
        return;
    }
    const [data, value] = args;
    if (!args.length || (args.length === 1 && typeof data === 'string')) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return takeData(this[0]!, data as string) as any;
    }
    return this.each((_, ele) => {
        return storeData(ele, data as string, value);
    });
};

$.fn.removeData = function (this: Cash, name: string | null = null) {
    return this.each((_, ele) => {
        return storeData(ele, name);
    });
};
