import type {Context, Cash} from 'cash-dom';

export type CashAjaxContext = Context;

export type BeforeSendCallback = (this: CashAjaxContext, xhr: XMLHttpRequest, settings: CashAjaxSetting) => void;

export type SuccessCallback = (this: CashAjaxContext, data: unknown, status: string, xhr: XMLHttpRequest) => void;

export type CompleteCallback = (this: CashAjaxContext, status: string, xhr: XMLHttpRequest) => void;

export type ErrorCallback = (this: CashAjaxContext, xhr: XMLHttpRequest, type: string, error: Error) => void;

export type DataFilterCallback = (this: CashAjaxContext, data: unknown, type: string, settings: CashAjaxSetting) => unknown;

export interface CashAjaxSetting {
    global: boolean;
    type: string;
    context: CashAjaxContext | null;
    beforeSend: BeforeSendCallback;
    success: SuccessCallback;
    error: ErrorCallback;
    complete: CompleteCallback;
    dataFilter: DataFilterCallback;
    xhr: () => XMLHttpRequest;
    accepts: Record<string, string>;
    crossDomain: boolean;
    timeout: number;
    processData: boolean;
    cache: boolean;
}

export type CashAjaxOptions = Partial<CashAjaxSetting> & {
    url: string;
};

export interface CashStaticAjax {
    active: number;
    ajaxSettings: CashAjaxSetting;
    param: (obj: Record<string, unknown>, traditional?: boolean) => string;
    ajax: (options: CashAjaxOptions) => XMLHttpRequest;
    fn: {
        load: (this: Cash, url: string, data?: Record<string, unknown>, complete?: SuccessCallback) => unknown;
    },
    get: (url: string, data?: Record<string, unknown>, success?: SuccessCallback, dataType?: string) => XMLHttpRequest;
    post: (url: string, data?: Record<string, unknown>, success?: SuccessCallback, dataType?: string) => XMLHttpRequest;
    getJSON: (url: string, data?: Record<string, unknown>, success?: SuccessCallback, dataType?: string) => XMLHttpRequest;
}
