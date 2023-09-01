import {$} from '../cash';
import {Ajax} from './ajax';
import type {AjaxSetting, FetcherSetting} from './types';

export async function fetchData<T = {}, A extends unknown[] = unknown[]>(setting: FetcherSetting<T, A>, args: A = ([] as unknown as A), extraAjaxSetting?: Partial<AjaxSetting> | ((ajaxSetting: AjaxSetting) => Partial<AjaxSetting>)): Promise<T> {
    const ajaxSetting = {throws: true} as AjaxSetting;
    if (typeof setting === 'string') {
        ajaxSetting.url = setting;
    } else if (typeof setting === 'object') {
        $.extend(ajaxSetting, setting);
    } else if (typeof setting === 'function') {
        const result = setting(...args);
        if (result instanceof Promise) {
            const data = await result;
            return data;
        }
        $.extend(ajaxSetting, result);
    }
    if (extraAjaxSetting) {
        $.extend(ajaxSetting, typeof extraAjaxSetting === 'function' ? extraAjaxSetting(ajaxSetting) : extraAjaxSetting);
    }
    const ajax = new Ajax<T>(ajaxSetting);
    const [data] = await ajax.send();
    return data as T;
}

declare module 'cash-dom' {
    interface CashStatic {
        fetch<T = {}, A extends unknown[] = unknown[]>(setting: FetcherSetting<T, A>, args?: A, extraAjaxSetting?: Partial<AjaxSetting> | ((ajaxSetting: AjaxSetting) => Partial<AjaxSetting>)): Promise<T>
    }
}

$.fetch = fetchData;
