import {$} from '@zui/core';

import type {AjaxCallbackMap, AjaxCompleteCallback, AjaxErrorCallback, AjaxFormItemValue, AjaxSetting, AjaxSuccessCallback} from './types';

function setHeader(headers: HeadersInit, name: string, value: string) {
    if (headers instanceof Headers) {
        headers.set(name, value);
    } else if (Array.isArray(headers)) {
        headers.push([name, value]);
    } else {
        headers[name] = value;
    }
}

function setFormItem(formData: FormData, name: string, value: AjaxFormItemValue | AjaxFormItemValue[] | Record<string, AjaxFormItemValue>) {
    if (value === undefined || value === null) {
        return;
    }
    if (Array.isArray(value)) {
        value.forEach((v) => setFormItem(formData, name, v));
    } else if (!(value instanceof Blob) && $.isPlainObject(value)) {
        Object.entries(value).forEach(([key, v]) => {
            setFormItem(formData, `${name}[${key}]`, v);
        });
    } else {
        formData.append(name, value instanceof Blob ? value : String(value));
    }
}

function getDataType(contentType: string | undefined | null, accepts: Record<string, string> | undefined) {
    if (contentType) {
        const map = {
            text: 'text/plain',
            html: 'text/html',
            json: 'application/json',
            ...accepts,
        };
        for (const [key, value] of Object.entries(map)) {
            if (value.split(',').map(x => x.trim()).includes(contentType)) {
                return key;
            }
        }
    }

    return 'text';
}

export function createFormData(data: string | FormData | URLSearchParams | Record<string, AjaxFormItemValue | AjaxFormItemValue[]> | [name: string, value: AjaxFormItemValue][], existingFormData?: FormData): FormData {
    const formData = existingFormData || new FormData();
    if (data) {
        if (typeof data === 'string') {
            data = new URLSearchParams(data);
        }
        if (data instanceof URLSearchParams) {
            data.forEach((value, name) => {
                setFormItem(formData, name, value);
            });
        } else if (Array.isArray(data)) {
            data.forEach(([name, value]) => {
                setFormItem(formData, name, value);
            });
        } else if (data instanceof FormData) {
            data.forEach((value, name) => {
                setFormItem(formData, name, value);
            });
        } else if ($.isPlainObject(data)) {
            Object.entries(data).forEach(([name, value]) => {
                setFormItem(formData, name, value);
            });
        }
    }
    return formData;
}

export class Ajax<T> {
    private declare _timeoutID: number;

    private _controller: AbortController;

    private _callbacks: {[P in keyof AjaxCallbackMap]: AjaxCallbackMap[P][];};

    private declare _abortError?: Error;

    setting: AjaxSetting;

    declare data: T;

    declare error: Error;

    declare response: Response;

    declare url: string;

    declare request: RequestInit;

    get completed() {
        return this.data !== undefined || this.error !== undefined;
    }

    get [Symbol.toStringTag]() {
        return 'Ajax';
    }

    constructor(setting: AjaxSetting) {
        this.setting = setting;
        this._controller = new AbortController();
        this._callbacks = {success: [], error: [], complete: []};
    }

    on<N extends keyof AjaxCallbackMap>(name: N, callback: AjaxCallbackMap[N]) {
        (this._callbacks[name]).push(callback);
        return this;
    }

    success(calback: AjaxSuccessCallback) {
        return this.on('success', calback);
    }

    done(calback: AjaxSuccessCallback) {
        return this.success(calback);
    }

    fail(calback: AjaxErrorCallback) {
        return this.on('error', calback);
    }

    complete(calback: AjaxCompleteCallback) {
        return this.on('complete', calback);
    }

    always(calback: AjaxCompleteCallback) {
        return this.complete(calback);
    }

    then(resolve: (data: T) => void, reject?: (error: Error) => void) {
        if (this.completed) {
            if (reject && this.error) {
                reject(this.error);
            } else {
                resolve(this.data);
            }
        } else {
            this.success((data) => resolve(data as T));
            if (reject) {
                this.fail(reject);
            }
        }
        return this;
    }

    catch(calback: (error: Error) => void) {
        if (this.error) {
            calback(this.error);
            return this;
        }
        return this.on('error', (error) => calback(error));
    }

    finally(onFinally: () => void) {
        if (this.completed) {
            onFinally();
            return this;
        }
        return this.complete(() => onFinally());
    }

    abort(abortError?: Error) {
        if (this.completed) {
            return false;
        }
        this._abortError = abortError;
        this._controller.abort();
        return true;
    }

    getResponseHeader(name: string) {
        return this.response?.headers.get(name);
    }

    private _init() {
        if (this.completed) {
            return;
        }
        const {
            url,
            type,
            data,
            processData = true,
            contentType,
            crossDomain,
            accepts,
            dataType,
            timeout,
            dataFilter,
            beforeSend,
            success,
            error,
            complete,
            ...initOptions
        } = this.setting;

        if (beforeSend?.(initOptions) === false) {
            return;
        }
        if (type) {
            initOptions.method = type;
        }
        let dataSetting = data;
        if (dataSetting) {
            if (processData) {
                dataSetting = createFormData(dataSetting);
            }
            initOptions.body = dataSetting as BodyInit;
        }
        if (crossDomain) {
            initOptions.mode = 'cors';
        }
        const headers = initOptions.headers || {};
        setHeader(headers, 'X-Requested-With', 'XMLHttpRequest');
        if (contentType) {
            setHeader(headers, 'Content-Type', contentType);
        }
        initOptions.headers = headers;

        if (initOptions.signal) {
            initOptions.signal.addEventListener('abort', () => {
                this.abort();
            });
        }
        if (success) {
            this.success(success);
        }
        if (error) {
            this.fail(error);
        }
        if (complete) {
            this.complete(complete);
        }
        initOptions.signal = this._controller.signal;
        this.url = url;
        this.request = initOptions;
    }

    private _emit<N extends keyof AjaxCallbackMap>(name: N, ...args: Parameters<AjaxCallbackMap[N]>) {
        this._callbacks[name].forEach((callback) => {
            callback.call(this, ...(args as [arg0: Error & Response, statusText: string, arg2: string & Response]));
        });
    }

    async send<D = T>(): Promise<[data?: D | undefined, error?: Error | undefined, response?: Response | undefined]> {
        if (this.completed) {
            return [];
        }
        this._init();

        const {timeout, dataType: dataTypeSetting, accepts, dataFilter, throws, jsonParser} = this.setting;
        if (timeout) {
            this._timeoutID = window.setTimeout(() => {
                this.abort(new Error('timeout'));
            }, timeout);
        }

        let response: Response | undefined;
        let error: Error | undefined;
        let data: unknown | undefined;
        try {
            response = await fetch(this.url, this.request);
            this.response = response;
            const {statusText} = response;
            if (response.ok) {
                const isAttachment = response.headers.get('Content-Disposition')?.startsWith('attachment');
                const dataType = isAttachment ? 'blob' : (dataTypeSetting || getDataType(response.headers.get('Content-Type'), accepts));
                if (isAttachment || dataType === 'blob' || dataType === 'file') {
                    data = await response.blob();
                } else if (dataType === 'json') {
                    if (typeof jsonParser === 'function') {
                        data = await response.text();
                        data = jsonParser(data as string);
                    } else {
                        data = await response.json();
                    }
                } else {
                    data = await response.text();
                }
                this.data = data as T;
                const filteredData = dataFilter?.(data, dataType) ?? data;
                this._emit('success', filteredData, statusText, response);
            } else {
                this.data = await response.text() as T;
                throw new Error(statusText);
            }
        } catch (err) {
            if (this.data === undefined && data !== undefined) {
                this.data = data as T;
            }
            error = err as Error;
            let skipTriggerError = false;
            if (error.name === 'AbortError') {
                if (this._abortError) {
                    error = this._abortError;
                } else {
                    skipTriggerError = true;
                }
            }
            this.error = error;
            if (!skipTriggerError) {
                this._emit('error', error, response?.statusText, error.message);
            }
        }

        if (this._timeoutID) {
            clearTimeout(this._timeoutID);
        }

        this._emit('complete', response, response?.statusText);
        if (error && throws) {
            throw error;
        }
        return [data as D, error, response];
    }
}
