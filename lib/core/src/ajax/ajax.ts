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

function setFormItem(formData: FormData, name: string, value: AjaxFormItemValue) {
    if (value === undefined || value === null) {
        return;
    }
    if (Array.isArray(value)) {
        value.forEach((v) => setFormItem(formData, name, v));
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

export class Ajax {
    private declare _timeoutID: number;

    private _controller: AbortController;

    private _callbacks: {[P in keyof AjaxCallbackMap]: AjaxCallbackMap[P][];};

    private declare _abortError?: Error;

    setting: AjaxSetting;

    declare data: unknown;

    declare error: Error;

    declare response: Response;

    declare url: string;

    declare request: RequestInit;

    get completed() {
        return this.data !== undefined || this.error !== undefined;
    }

    constructor(setting: AjaxSetting) {
        this.setting = setting;
        this._controller = new AbortController();
        this._callbacks = {success: [], error: [], complete: []};
    }

    on<T extends keyof AjaxCallbackMap>(name: T, callback: AjaxCallbackMap[T]) {
        (this._callbacks[name]).push(callback);
        return this;
    }

    success(calback: AjaxSuccessCallback) {
        return this.on('success', calback);
    }

    done(calback: AjaxSuccessCallback) {
        return this.success(calback);
    }

    then(calback: AjaxSuccessCallback) {
        return this.success(calback);
    }

    catch(calback: AjaxErrorCallback) {
        return this.on('error', calback);
    }

    fail(calback: AjaxErrorCallback) {
        return this.catch(calback);
    }

    complete(calback: AjaxCompleteCallback) {
        return this.on('complete', calback);
    }

    always(calback: AjaxCompleteCallback) {
        return this.complete(calback);
    }

    finally(calback: AjaxCompleteCallback) {
        return this.complete(calback);
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
            dataType: dataTypeSetting,
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
                if ($.isPlainObject(dataSetting)) {
                    dataSetting = Object.entries(dataSetting);
                }
                if (Array.isArray(dataSetting)) {
                    dataSetting = dataSetting.reduce((formData, [name, value]) => {
                        setFormItem(formData, name, value);
                        return formData;
                    }, new FormData());
                }
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

    private _emit<T extends keyof AjaxCallbackMap>(name: T, ...args: Parameters<AjaxCallbackMap[T]>) {
        this._callbacks[name].forEach((callback) => {
            callback(...(args as [arg0: Error & Response, arg1: string & Response, response: Response]));
        });
    }

    async send(): Promise<[data?: unknown | undefined, error?: Error | undefined, response?: Response | undefined]> {
        if (this.completed) {
            return [];
        }
        this._init();

        const {timeout, dataType: dataTypeSetting, accepts, dataFilter} = this.setting;
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
                const dataType = dataTypeSetting || getDataType(response.headers.get('Content-Type'), accepts);
                data = await (dataType === 'json' ? response.json() : response.text());
                this.data = data;
                const filteredData = dataFilter?.(data, dataType) ?? data;
                this._emit('success', filteredData, statusText, response);
            } else {
                throw new Error(statusText);

            }
        } catch (err) {
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
        return [data, error, response];
    }
}
