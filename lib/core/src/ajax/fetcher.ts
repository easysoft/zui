import {formatString} from '@zui/helpers/src/format-string';
import {$} from '../cash';
import {Ajax} from './ajax';
import type {AjaxSetting, FetcherSetting} from './types';

export async function fetchData<T = {}, A extends unknown[] = unknown[], THIS = unknown>(setting: FetcherSetting<T, A, THIS>, args: A = ([] as unknown as A), extraAjaxSetting?: Partial<AjaxSetting> | ((ajaxSetting: AjaxSetting) => Partial<AjaxSetting>), thisObj?: THIS, ajaxGetter?: (ajax: Ajax<T>) => void): Promise<T> {
    const ajaxSetting = {throws: true, dataType: 'json'} as AjaxSetting;
    if (typeof setting === 'string') {
        ajaxSetting.url = setting;
    } else if (typeof setting === 'object') {
        $.extend(ajaxSetting, setting);
    } else if (typeof setting === 'function') {
        const result = setting.call(thisObj as THIS, ...args);
        if (result instanceof Promise) {
            const data = await result;
            return data;
        }
        return result;
    }
    if (extraAjaxSetting) {
        $.extend(ajaxSetting, typeof extraAjaxSetting === 'function' ? extraAjaxSetting(ajaxSetting) : extraAjaxSetting);
    }
    if (ajaxSetting.url) {
        ajaxSetting.url = formatString(ajaxSetting.url, ...args);
    }
    const ajax = new Ajax<T>(ajaxSetting);
    ajaxGetter?.(ajax);
    const [data] = await ajax.send();
    return data as T;
}

export function isFetchSetting(setting: FetcherSetting | unknown): setting is FetcherSetting {
    return !!(setting && (typeof setting === 'string' || (typeof setting === 'object' && (setting as AjaxSetting).url) || typeof setting === 'function'));
}

declare module 'cash-dom' {
    interface CashStatic {
        fetch<T = {}, A extends unknown[] = unknown[], THIS = unknown>(setting: FetcherSetting<T, A, THIS>, args: A, extraAjaxSetting?: Partial<AjaxSetting> | ((ajaxSetting: AjaxSetting) => Partial<AjaxSetting>), thisObj?: THIS, ajaxGetter?: (ajax: Ajax<T>) => void): Promise<T>;
    }
}

$.fetch = fetchData;
