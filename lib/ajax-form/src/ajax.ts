type Rule = {
    required: boolean;
    errMsg: string;
} | {
    regexp: RegExp;
    errMsg: string;
} | {
    validate: (value: string) => boolean;
    errMsg: string;
};

type Options = Partial<{
    url: string;
    onLoad: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
    onLoadend: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
    onLoadstart: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
    onError: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
    onProgress: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
    onAbort: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
    headers: Record<string, string>;
    rules: Record<string, Rule | Array<Rule>>;
    timeout: number;
    method: 'GET' | 'POST';
    formType: 'AJAX' | 'FormData';
    responseType: XMLHttpRequestResponseType;
}>;

export class AjaxForm {

    static NAME = 'zui.ajaxForm';

    #formEl: HTMLFormElement;

    #url: string;

    #method: 'GET' | 'POST';

    #formData: Record<string, string> | FormData;

    #options: Options;

    #xhr = new XMLHttpRequest();

    get responseType() {
        return this.#options.responseType ?? 'json';
    }

    get formType() {
        return this.#options.formType ?? 'AJAX';
    }

    get url() {
        return this.#url;
    }

    get method() {
        return this.#method;
    }

    get formEl() {
        return this.#formEl;
    }

    get onLoad() {
        return this.#options.onLoad;
    }

    get onError() {
        return this.#options.onError;
    }

    get onLoadend() {
        return this.#options.onLoadend;
    }

    get onLoadstart() {
        return this.#options.onLoadstart;
    }

    get onProgress() {
        return this.#options.onProgress;
    }

    get onAbort() {
        return this.#options.onAbort;
    }

    get formData() {
        return this.#formData;
    }

    get headers() {
        return this.#options.headers;
    }

    get rules() {
        return this.#options.rules;
    }

    get timeout() {
        return this.#options.timeout;
    }

    get status() {
        return this.#xhr.status;
    }

    get statusText() {
        return this.#xhr.statusText;
    }

    get readyState() {
        return this.#xhr.readyState;
    }

    get response() {
        return this.#xhr.response;
    }

    get responseXML() {
        return this.#xhr.responseXML;
    }

    get responseText() {
        return this.#xhr.responseText;
    }

    get responseURL() {
        return this.#xhr.responseURL;
    }

    get withCredentials() {
        return this.#xhr.withCredentials;
    }

    get upload() {
        return this.#xhr.upload;
    }

    constructor(form: string | HTMLFormElement, options: Options = {}) {
        this.#options = options;

        this.#formEl = form instanceof HTMLFormElement
            ? form
            : document.querySelector(form) as HTMLFormElement;
        if (!(this.#formEl instanceof HTMLFormElement)) {
            throw new Error('Param form must be a HTMLFormElement.');
        }

        this.#method = (this.formEl.method ?? options.method ?? 'POST').toUpperCase() as typeof this.method;
        if (!['GET', 'POST'].includes(this.method)) {
            throw new Error('Method must be "GET" or "POST"!');
        }
        if (this.method === 'GET') {
            this.#options.formType = 'AJAX';
        }

        this.#url = this.#formEl.action ?? options.url ?? '';
        if (!this.url) {
            throw new Error('Form action is required!');
        }

        this.#buildFormData();

        this.formEl.querySelector('[data-type=submit]')?.addEventListener('click', () => {
            this.submit();
        });
        this.formEl.querySelector('[data-type=reset]')?.addEventListener('click', () => {
            this.reset();
        });

    }

    #addErrorTip(el: HTMLElement, msg: string) {
        const formGroupEl = el.closest<HTMLElement>('.form-group');
        if (!formGroupEl) {
            throw new Error('.form-control must be in .form-group!');
        }
        formGroupEl.querySelectorAll<HTMLElement>('.form-tip').forEach(x => x.remove());

        const tipEl = document.createElement('div');
        tipEl.innerText = msg;
        tipEl.classList.add('form-tip');
        formGroupEl.classList.add('has-error');
        formGroupEl.append(tipEl);
    }

    #removeError(el: HTMLElement) {
        const formGroupEl = el.closest<HTMLElement>('.form-group');
        if (!formGroupEl) {
            throw new Error('.form-control must be in .form-group!');
        }
        formGroupEl.classList.remove('has-error');
        formGroupEl.querySelectorAll('.form-tip').forEach(x => x.remove());
    }

    #clearError() {
        const formControls = this.#formEl.querySelectorAll<HTMLInputElement>('.form-control');
        formControls.forEach(item => {
            this.#removeError(item);
        });
    }

    #checkValidity() {
        if (!this.rules || !Object.keys(this.rules).length) {
            return true;
        }

        this.#clearError();

        let isValid = true;
        this.#formEl.querySelectorAll<HTMLInputElement>('.form-control:not(.disabled)').forEach((formControl => {
            const {id, value} = formControl;
            const currentRule = this.rules![id];
            if (!currentRule) {
                return;
            }

            const validate = (rule: Rule) => {
                if (
                    'required' in rule && rule.required && !value
                    || 'regexp' in rule && rule.regexp && !rule.regexp.test(value)
                    || 'validate' in rule && rule.validate && !rule.validate(value)
                ) {
                    this.#addErrorTip(formControl, rule.errMsg);
                    return isValid = false;
                }
                return true;
            };

            if (Array.isArray(currentRule)) {
                for (const rule of currentRule) {
                    if (!validate(rule)) {
                        break;
                    }
                }
                return;
            }

            validate(currentRule);
        }));
        return isValid;
    }

    #buildFormData() {
        const formControls = this.#formEl.querySelectorAll<HTMLInputElement>('.form-control:not(.disabled)');
        if (this.formType === 'AJAX') {
            this.#formData = {};
            formControls.forEach(({id, value}) => {
                (this.#formData as Record<string, string>)[id] = value;
            });
            return;
        }

        this.#formData = new FormData();
        formControls.forEach(({id, value}) => {
            (this.#formData as FormData).append(id, value);
        });
    }

    #initXhr() {
        if (this.onLoadstart) {
            this.#xhr.addEventListener('loadstart', this.onLoadstart);
        }
        if (this.onLoad) {
            this.#xhr.addEventListener('load', this.onLoad);
        }
        if (this.onLoadend) {
            this.#xhr.addEventListener('loadend', this.onLoadend);
        }
        if (this.onProgress) {
            this.#xhr.addEventListener('progress', this.onProgress);
        }
        if (this.onError) {
            this.#xhr.addEventListener('error', this.onError);
        }
        if (this.onAbort) {
            this.#xhr.addEventListener('abort', this.onAbort);
        }
        if (this.headers) {
            Object.entries(this.headers).forEach(([key, value]) => {
                // 此方法必须在 xhr.open() 方法和 xhr.send() 之间调用。如果多次对同一个请求头赋值，只会生成一个合并了多个值的请求头。
                this.#xhr.setRequestHeader(key, value);
            });
        }
    }

    #buildQueryString(params: Record<string, string>) {
        return Object.entries(params)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
    }

    #getRequest() {
        this.#xhr.open('GET', `${this.url}?${this.#buildQueryString(this.#formData as Record<string, string>)}`);
        this.#initXhr();
        this.#xhr.send();
    }

    #postRequest() {
        this.#initXhr();
        this.#xhr.open('POST', this.url);
        const body =  this.formType === 'AJAX' ? JSON.stringify(this.formData as Record<string, string>) : this.formData as FormData;
        this.#xhr.send(body);
    }

    submit() {
        if (this.#checkValidity()) {
            if (this.method === 'POST') {
                this.#postRequest();
            } else {
                this.#getRequest();
            }
        }
    }

    abort() {
        this.#xhr.abort();
    }

    getAllResponseHeaders() {
        return this.#xhr.getAllResponseHeaders();
    }

    getResponseHeader(name: string) {
        return this.#xhr.getResponseHeader(name);
    }

    overrideMimeType(mime: string) {
        return this.#xhr.overrideMimeType(mime);
    }

    reset() {
        this.#formEl.reset();
        this.#clearError();
    }
}
