import type {AjaxBeforeSendCallback, AjaxCallbackMap, AjaxCompleteCallback, AjaxErrorCallback, AjaxSetting, AjaxSuccessCallback} from './types';
import {createFormData} from '../form';
import {parseRawData} from '../helpers';

function setHeader(headers: HeadersInit, name: string, value: string) {
    if (headers instanceof Headers) {
        headers.set(name, value);
    } else if (Array.isArray(headers)) {
        headers.push([name, value]);
    } else {
        headers[name] = value;
    }
}

function getDataType(contentType: string | undefined | null, accepts: Record<string, string> | undefined) {
    if (contentType) {
        // Content-Type 可能带 charset 等参数（如 application/json; charset=utf-8），只取 mime 部分比对。
        const mime = contentType.split(';')[0].trim();
        const map = {
            text: 'text/plain',
            html: 'text/html',
            json: 'application/json',
            ...accepts,
        };
        for (const [key, value] of Object.entries(map)) {
            if (value.split(',').map(x => x.trim()).includes(mime)) {
                return key;
            }
        }
    }

    return 'text';
}

export class Ajax<T = unknown> {
    static globalBeforeSends: AjaxBeforeSendCallback[] = [];

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

    readonly [Symbol.toStringTag] = 'Ajax';

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
            this.success(data => resolve(data as T));
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
        return this.on('error', error => calback(error));
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

        if (type) {
            initOptions.method = type;
        }
        let requestUrl = url;
        const method = (initOptions.method || 'GET').toUpperCase();
        let dataSetting = data;
        if (dataSetting) {
            if (method === 'GET' || method === 'HEAD') {
                // GET/HEAD 请求不能带 body，数据并入 url 查询串。
                let query: string;
                if (processData) {
                    const params = new URLSearchParams();
                    createFormData(dataSetting).forEach((value, name) => {
                        params.append(name, typeof value === 'string' ? value : String(value));
                    });
                    query = params.toString();
                } else {
                    query = typeof dataSetting === 'string' ? dataSetting : new URLSearchParams(dataSetting as Record<string, string>).toString();
                }
                if (query) {
                    const hashIndex = requestUrl.indexOf('#');
                    const hash = hashIndex < 0 ? '' : requestUrl.slice(hashIndex);
                    const base = hashIndex < 0 ? requestUrl : requestUrl.slice(0, hashIndex);
                    requestUrl = `${base}${base.includes('?') ? '&' : '?'}${query}${hash}`;
                }
            } else {
                if (processData) {
                    dataSetting = createFormData(dataSetting);
                }
                initOptions.body = dataSetting as BodyInit;
            }
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

        const beforeSends = [...(this.constructor as typeof Ajax).globalBeforeSends, beforeSend];
        for (const callback of beforeSends) {
            if (!callback) {
                continue;
            }
            const result = callback.call(this, initOptions);
            if (result === false) {
                return false;
            }
            if (result) {
                Object.assign(initOptions, result);
            }
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

        if (initOptions.signal) {
            initOptions.signal.addEventListener('abort', () => {
                this.abort();
            });
        }
        initOptions.signal = this._controller.signal;

        this.url = requestUrl;
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
        if (this._init() === false) {
            return [];
        }

        const {timeout, dataType: dataTypeSetting, accepts, dataFilter, throws, jsonParser, convert} = this.setting;
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
                } else if (dataType === 'js') {
                    data = await response.text();
                    data = parseRawData(data as string);
                } else {
                    data = await response.text();
                }
                if (convert) {
                    data = await convert(data, dataType);
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
