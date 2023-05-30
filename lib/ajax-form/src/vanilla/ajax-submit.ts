import {$} from '@zui/core';
import {AjaxFormResult, AjaxSubmitOptions} from '../types';

function handleSubmitResult(result: AjaxFormResult, options: AjaxSubmitOptions) {
    const {message} = result;
    if (result.result === 'success') {
        this.emit('success', {result}, false);
        if (options.onSuccess?.(result) === false) {
            return;
        }

        if (typeof message === 'string' && message.length) {
            options.onMessage?.(message, result);
        }
    } else {
        this.emit('fail', {result}, false);
        if (options.onFail?.(result) === false) {
            return;
        }

        // Handle message
        if (message) {
            options.onMessage?.(message, result);
        }
    }

    const closeModal = result.closeModal || options.closeModal;
    if (closeModal) {
        $(options.element || document).trigger('zui.modal.hide', {target: typeof closeModal === 'string' ? closeModal : undefined});
    }

    // Handle callback
    const callback = result.callback || options.callback;
    if (typeof callback === 'string') {
        const spIndex = callback.indexOf('(');
        const cNames = (spIndex > 0 ? callback.substring(0, spIndex) : callback).split('.');
        let win: Window | null = window;
        let cName = cNames[0];
        if (cNames.length > 1) {
            cName = cNames[1];
            if (cNames[0] === 'top') win = window.top;
            else if (cNames[0] === 'parent') win = window.parent;
            else win = window[cNames[0]];
        }
        const func = win?.[cName];
        if (typeof func === 'function') {
            let params: unknown[] = [];
            if (spIndex > 0 && callback[callback.length - 1] == ')') {
                params = JSON.parse('[' + callback.substring(spIndex + 1, callback.length - 1) + ']');
            } else {
                params.push(result);
            }
            return func.apply(this, params);
        }
    } else if (callback && typeof callback === 'object') {
        const target = callback.target ? window[callback.target] : window;
        const func = target[callback.name];
        func.apply(this, Array.isArray(callback.params) ? callback.params : [callback.params]);
    }

    // Handle locate
    const load = result.load || options.load || result.locate;
    if (load) {
        $(options.element || document).trigger('zui.locate', load);
    }
}

export async function ajaxSubmit(options: AjaxSubmitOptions): Promise<[result: AjaxFormResult | undefined, error: Error | undefined]> {
    if (options.beforeSubmit?.(options) === false) {
        return [undefined, new Error('canceled')];
    }

    const {loadingClass, element} = options;
    if (element && loadingClass) {
        $(element).addClass(loadingClass);
    }

    const {data} = options;
    let formData: FormData | undefined;
    if (data instanceof FormData) {
        formData = data;
    } else if (data) {
        formData = new FormData();
        for (const [name, value] of Object.entries(data)) {
            if (Array.isArray(value)) {
                for (const item of value) {
                    formData.append(name, item as string);
                }
                continue;
            } else {
                formData.append(name, value as string);
            }
        }
    }

    const {beforeSend} = options;
    if (beforeSend) {
        const result = beforeSend(formData);
        if (result instanceof FormData) {
            formData = result;
        }
    }

    let error: Error | undefined;
    let responseText: string | undefined;
    let result: AjaxFormResult | undefined;
    try {
        const response = await fetch(options.url, {
            method: options.method || 'POST',
            body: formData,
            credentials: 'same-origin',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                ...options.headers,
            },
        });

        responseText = await response.text();
        if (response.ok) {
            result = JSON.parse(responseText) as AjaxFormResult;
            if (!result || typeof result !== 'object') {
                error = new Error('Invalid json format');
            }
        } else {
            error = new Error(response.statusText);
        }
    } catch (err) {
        error = err;
    }

    if (error) {
        options.onError?.(error, responseText);
    } else {
        handleSubmitResult(result!, options);
    }

    options.onComplete?.(result, error);

    if (element && loadingClass) {
        $(element).removeClass(loadingClass);
    }

    return [result, error];
}

$.extend($, {ajaxSubmit});
