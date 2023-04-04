import {cash} from '@zui/cash/src/cash';
import {CashAjaxOptions, CashStaticAjax} from './types';

const $ = cash as (typeof cash & CashStaticAjax);

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

const document = window.document;
let key: string;
let name: string;
const rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
const scriptTypeRE = /^(?:text|application)\/javascript/i;
const xmlTypeRE = /^(?:text|application)\/xml/i;
const jsonType = 'application/json';
const htmlType = 'text/html';
const blankRE = /^\s*$/;
const originAnchor = document.createElement('a');

originAnchor.href = window.location.href;

// trigger a custom event and return false if it was cancelled
function triggerAndReturn(context, eventName, data?: unknown) {
    const event = new CustomEvent(eventName, {detail: data});
    $(context).trigger(event as Parameters<typeof $.fn.trigger>[1], data);
    return !event.defaultPrevented;
}

// trigger an Ajax "global" event
function triggerGlobal(settings, context, eventName, data?: unknown) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data);
}

// Number of active Ajax requests
$.active = 0;

function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
}
function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop');
}

// triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
function ajaxBeforeSend(xhr, settings) {
    const context = settings.context;
    if (settings.beforeSend.call(context, xhr, settings) === false ||
          triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
        return false;

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
}
function ajaxSuccess(data, xhr, settings) {
    const context = settings.context, status = 'success';
    settings.success.call(context, data, status, xhr);
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
    ajaxComplete(status, xhr, settings);
}
// type: "timeout", "error", "abort", "parsererror"
function ajaxError(error, type, xhr, settings) {
    const context = settings.context;
    settings.error.call(context, xhr, type, error);
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type]);
    ajaxComplete(type, xhr, settings);
}
// status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
function ajaxComplete(status, xhr, settings) {
    const context = settings.context;
    settings.complete.call(context, xhr, status);
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
    ajaxStop(settings);
}

function ajaxDataFilter(data, type, settings) {
    if (settings.dataFilter == empty) return data;
    const context = settings.context;
    return settings.dataFilter.call(context, data, type);
}

// Empty function, used as default callback
function empty() {}

$.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
        return new window.XMLHttpRequest();
    },
    // MIME types mapping
    // IIS returns Javascript as "application/x-javascript"
    accepts: {
        script: 'text/javascript, application/javascript, application/x-javascript',
        json:   jsonType,
        xml:    'application/xml, text/xml',
        html:   htmlType,
        text:   'text/plain',
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true,
    //Used to handle the raw response data of XMLHttpRequest.
    //This is a pre-filtering function to sanitize the response.
    //The sanitized response should be returned
    dataFilter: empty,
};

function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0];
    return mime && ( mime == htmlType ? 'html' :
        mime == jsonType ? 'json' :
            scriptTypeRE.test(mime) ? 'script' :
                xmlTypeRE.test(mime) && 'xml' ) || 'text';
}

function appendQuery(url, query) {
    if (query == '') return url;
    return (url + '&' + query).replace(/[&?]{1,2}/, '?');
}

// serialize payload and append it to the URL for GET requests
function serializeData(options) {
    if (options.processData && options.data && typeof options.data != 'string')
        options.data = $.param(options.data, options.traditional);
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType)) {
        options.url = appendQuery(options.url, options.data);
        options.data = undefined;
    }
}

$.ajax = function (options: CashAjaxOptions) {
    const settings = $.extend({}, options || {});
    let urlAnchor, hashIndex;
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];

    ajaxStart(settings);

    if (!settings.crossDomain) {
        urlAnchor = document.createElement('a');
        urlAnchor.href = settings.url;
        // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
        // eslint-disable-next-line no-self-assign
        urlAnchor.href = urlAnchor.href;
        settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host);
    }

    if (!settings.url) settings.url = window.location.toString();
    if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex);
    serializeData(settings);

    let dataType = settings.dataType;
    const hasPlaceholder = /\?.+=\?/.test(settings.url);
    if (hasPlaceholder) dataType = 'jsonp';

    if (settings.cache === false || (
        (!options || options.cache !== true) &&
           ('script' == dataType || 'jsonp' == dataType)
    ))
        settings.url = appendQuery(settings.url, '_=' + Date.now());

    let mime = settings.accepts[dataType];
    const headers = { };
    const setHeader = function (n, value) { headers[n.toLowerCase()] = [n, value]; };
    const protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol;
    const xhr = settings.xhr();
    const nativeSetHeader = xhr.setRequestHeader;
    let abortTimeout;

    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest');
    setHeader('Accept', mime || '*/*');
    mime = settings.mimeType;
    if (mime) {
        if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
        xhr.overrideMimeType?.(mime);
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
        setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');

    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name]);
    xhr.setRequestHeader = setHeader;

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            xhr.onreadystatechange = empty;
            clearTimeout(abortTimeout);
            let result, error = false;
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
                dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));

                if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob')
                    result = xhr.response;
                else {
                    result = xhr.responseText;

                    try {
                        // http://perfectionkills.com/global-eval-what-are-the-options/
                        // sanitize response accordingly if data filter callback provided
                        result = ajaxDataFilter(result, dataType, settings);
                        if (dataType == 'script')    eval(result);
                        else if (dataType == 'xml')  result = xhr.responseXML;
                        else if (dataType == 'json') result = blankRE.test(result) ? null : JSON.parse(result);
                    } catch (e) { error = e; }

                    if (error) return ajaxError(error, 'parsererror', xhr, settings);
                }

                ajaxSuccess(result, xhr, settings);
            } else {
                ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings);
            }
        }
    };

    if (ajaxBeforeSend(xhr, settings) === false) {
        xhr.abort();
        ajaxError(null, 'abort', xhr, settings);
        return xhr;
    }

    const async = 'async' in settings ? settings.async : true;
    xhr.open(settings.type, settings.url, async, settings.username, settings.password);

    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name];

    for (name in headers) nativeSetHeader.apply(xhr, headers[name]);

    if (settings.timeout > 0) abortTimeout = setTimeout(function () {
        xhr.onreadystatechange = empty;
        xhr.abort();
        ajaxError(null, 'timeout', xhr, settings);
    }, settings.timeout);

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null);
    return xhr;
};

// handle optional data/success arguments
function parseArguments(url, data?, success?, dataType?) {
    if ($.isFunction(data)) {
        dataType = success;
        success = data;
        data = undefined;
    }
    if (!$.isFunction(success)) {
        dataType = success;
        success = undefined;
    }
    return {
        url: url
        , data: data
        , success: success
        , dataType: dataType,
    };
}

$.get = function (url, data, success, dataType) {
    return $.ajax(parseArguments(url, data, success, dataType));
};

$.post = function (url, data, success, dataType) {
    const options = parseArguments(url, data, success, dataType);
    return $.ajax(Object.assign(options, {type: 'POST'}));
};

$.getJSON = function (url, data, success, dataType) {
    const options = parseArguments(url, data, success, dataType);
    options.dataType = 'json';
    return $.ajax(options);
};

$.fn.load = function (url, data, success) {
    if (!this.length) return this;
    const parts = url.split(/\s/);
    let selector;
    const options = parseArguments(url, data, success);
    const callback = options.success;
    if (parts.length > 1) {
        options.url = parts[0];
        selector = parts[1];
    }
    options.success = (response, ...args) => {
        this.html(selector ?
            $('<div>').html(response.replace(rscript, '')).find(selector)
            : response);
        callback?.call(this, response, ...args);
    };
    $.ajax(options);
    return this;
};

const escape = encodeURIComponent;

function serialize(params, obj, traditional, scope?) {
    const array = $.isArray(obj);
    const hash = $.isPlainObject(obj);
    $.each(obj, function (k, value) {
        const type = Array.isArray(value) ? 'array' : typeof value;
        if (scope) k = traditional ? scope :
            scope + '[' + (hash || type == 'object' || type == 'array' ? k : '') + ']';
        // handle data in serializeArray() format
        if (!scope && array) params.add((value as {name: string}).name, (value as {value: string}).value);
        // recurse into nested objects
        else if (type == 'array' || (!traditional && type == 'object'))
            serialize(params, value, traditional, k);
        else params.add(k, value);
    });
}

$.param = function (obj, traditional) {
    const params = [] as unknown as (string[] & {add: (k: string, value: any) => void});
    params.add = function (k, value) {
        if ($.isFunction(value)) value = value();
        if (value == null) value = '';
        this.push(escape(k) + '=' + escape(value));
    };
    serialize(params, obj, traditional);
    return params.join('&').replace(/%20/g, '+');
};

export const ajax = Object.assign($.ajax, {
    get: $.get,
    post: $.post,
    getJSON: $.getJSON,
    param: $.param,
    ajaxSettings: $.ajaxSettings,
});
