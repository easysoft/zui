import {$} from '../cash';
import {Ajax} from './ajax';
import type {AjaxSetting, FetcherSetting} from './types';

export function fetchData<T = {}, A extends unknown[] = unknown[]>(setting: FetcherSetting<T, A>, args: A = ([] as unknown as A)): Promise<T> {
    let ajaxSetting: AjaxSetting | undefined;
    if (typeof setting === 'string') {
        ajaxSetting = {url: setting};
    } else if (typeof setting === 'object') {
        ajaxSetting = setting;
    } else if (typeof setting === 'function') {
        const result = setting(...args);
        if (result instanceof Promise) {
            return result;
        }
        ajaxSetting = result;
    }
    if (ajaxSetting) {
        const ajax = new Ajax<T>(ajaxSetting);
        return ajax.send() as Promise<T>;
    }
    throw new Error('Invalid fetcher setting');
}

declare module 'cash-dom' {
    interface CashStatic {
        fetch<T = {}, A extends unknown[] = unknown[]>(setting: FetcherSetting<T, A>, args?: A): Promise<T>
    }
}

$.fetch = fetchData;
