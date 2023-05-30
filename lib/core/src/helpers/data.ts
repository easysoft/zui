import {$, Cash} from '../cash';

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
export function storeData(target: object, key: string, value: unknown): void;

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
export function storeData(target: object, keyOrData: string | Record<string, unknown>, value?: unknown): void {
    const hasCache = cache.has(target);
    const data = hasCache ? cache.get(target)! : {};
    if (typeof keyOrData === 'string') {
        data[keyOrData] = value;
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
        data = $(target).dataset();
    }
    if (key === undefined) {
        return data || {};
    }
    return data?.[key];
}

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        dataset(): Record<string, unknown> | undefined;
        dataset(name: string): unknown;
        dataset(name: string, value: unknown): Cash;
        dataset(dataset: Record<string, unknown>): Cash;
    }
}

/* Backup the origin $.fn.data method. */
$.fn.dataset = $.fn.data;

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
