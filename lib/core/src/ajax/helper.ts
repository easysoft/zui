import {$, Cash} from '@zui/core';
import {Ajax} from './ajax';
import type {AjaxFormData, AjaxSetting, AjaxSuccessCallback} from './types';

/* Declare types. */
declare module 'cash-dom' {
    interface CashStatic {
        ajax(urlOrSetting: string | AjaxSetting, setting?: Partial<AjaxSetting>): Ajax;

        getJSON(url: string, dataOrSuccess?: AjaxFormData | AjaxSuccessCallback, success?: AjaxSuccessCallback): Ajax;

        get(url: string, dataOrSuccess?: AjaxFormData | AjaxSuccessCallback, successOrDataType?: AjaxSuccessCallback | string, dataType?: string, method?: string): Ajax;

        post(url: string, dataOrSuccess?: AjaxFormData | AjaxSuccessCallback, successOrDataType?: AjaxSuccessCallback | string, dataType?: string): Ajax;
    }

    interface Cash {
        load(this: Cash, url: string, dataOrSuccess?: AjaxFormData | AjaxSuccessCallback, success?: AjaxSuccessCallback): Cash;
    }
}

/* Extend as $.ajax() to create ajax for cash. */
$.ajax = (urlOrSetting: string | AjaxSetting, setting?: Partial<AjaxSetting>) => {
    setting = setting || {};
    if (typeof urlOrSetting === 'string') {
        setting.url = urlOrSetting;
    } else {
        $.extend(setting, urlOrSetting);
    }
    const ajax = new Ajax(setting as AjaxSetting);
    ajax.send();
    return ajax;
};

/* Extend as $.getJSON() to create getJSON for cash. */
$.getJSON = (url: string, dataOrSuccess?: AjaxFormData | AjaxSuccessCallback, success?: AjaxSuccessCallback) => {
    if (typeof dataOrSuccess === 'function') {
        success = dataOrSuccess;
        dataOrSuccess = undefined;
    }
    return $.ajax({
        url,
        data: dataOrSuccess,
        success,
        dataType: 'json',
    });
};

/* Extend as $.get() to create get for cash. */
$.get = (url: string, dataOrSuccess?: AjaxFormData | AjaxSuccessCallback, successOrDataType?: AjaxSuccessCallback | string, dataType?: string, method = 'GET') => {
    let success: AjaxSuccessCallback | undefined;
    let data: AjaxFormData | undefined;
    if (typeof dataOrSuccess === 'function') {
        success = dataOrSuccess;
        data = undefined;
    } else {
        data = dataOrSuccess;
    }
    if (typeof successOrDataType === 'function') {
        success = successOrDataType;
        dataType = undefined;
    } else {
        dataType = successOrDataType;
    }
    return $.ajax({
        method,
        url,
        data,
        success,
        dataType,
    });
};

/* Extend as $.post() to create post for cash. */
$.post = (url: string, dataOrSuccess?: AjaxFormData | AjaxSuccessCallback, successOrDataType?: AjaxSuccessCallback | string, dataType?: string) => {
    return $.get(url, dataOrSuccess, successOrDataType, dataType, 'POST');
};

/* Extend as $.load() to create load for cash. */
$.fn.load = function (this: Cash, url: string, dataOrSuccess?: AjaxFormData | AjaxSuccessCallback, success?: AjaxSuccessCallback): Cash {
    if (typeof dataOrSuccess === 'function') {
        success = dataOrSuccess;
        dataOrSuccess = undefined;
    }
    const [realUrl, selector] = url.split(' ');
    $.get(realUrl, dataOrSuccess, (data, statusText, response) => {
        if (selector) {
            data = $(data as string).find(selector).html();
        }
        $(this).html(data as string);
        success?.call(this, data, statusText, response);
    }, 'html');
    return this;
};
