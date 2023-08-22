export type AjaxBeforeSendCallback = (init: RequestInit) => void | false;

export type AjaxCompleteCallback = (response: Response | undefined) => void;

export type AjaxErrorCallback = (error: Error, response?: Response) => void;

export type AjaxSuccessCallback = (data: unknown, statusText: string, response: Response) => unknown;

export type AjaxDataFilter = (data: unknown, dataType: string) => unknown;

export type AjaxFormItemValue = undefined | null | string | Blob | File | boolean | number;

export type AjaxFormData = string | FormData | URLSearchParams | Record<string, AjaxFormItemValue | AjaxFormItemValue[]> | [name: string, value: AjaxFormItemValue][];

export type AjaxCallbackMap = {
    success: AjaxSuccessCallback;
    error: AjaxErrorCallback;
    complete: AjaxCompleteCallback;
};

export interface AjaxSetting extends RequestInit {
    url: string;
    type?: string;
    data?: AjaxFormData;
    contentType?: string; // application/x-www-form-urlencoded, multipart/form-data, or text/plain
    accepts?: Record<string, string>;
    dataType?: string;
    timeout?: number;
    processData?: boolean;
    // global?: boolean;
    crossDomain?: boolean;
    traditional?: boolean;
    dataFilter?: AjaxDataFilter;
    beforeSend?: AjaxBeforeSendCallback;
    success?: AjaxSuccessCallback;
    error?: AjaxErrorCallback;
    complete?: AjaxCompleteCallback;
}
