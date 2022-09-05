export default class AjaxForm {

    static NAME = 'zui.ajaxForm';

    #form: HTMLElement;

    submitBtn: HTMLElement;

    resetBtn: HTMLElement;

    beforeSubmit: (data, currentForm, option) => {};

    success: (data) => {};

    error: (data) => {};

    finish: (data) => {};

    ajaxUrl: string;

    formData: object;

    invalid: boolean;  // 校验状态

    timer:  NodeJS.Timer;

    novalidate: boolean; // 不校验

    validity: boolean;

    // disabled: boolean; //禁用

    rules: object;

    constructor(element, options) {
        this.ajaxUrl = '';
        this.formData = {};
        this.timer = null;
        this.invalid = false;
       
        this.#form = document.querySelector(`#${element}`);
        if (this.#form) {
            this.getAjaxFormData(this.#form, options);
            
            this.ajaxUrl = (this.#form.action ? this.#form.action : options.url) || '';
            this.submitBtn = document.querySelector(`#${element} [data-type=submit]`);
            this.resetBtn = document.querySelector(`#${element} [data-type=reset]`);
            
            if (this.submitBtn) {
                this.submitBtn.addEventListener('click', () => {
                    this.submitForm();
                });
            }
            if (this.resetBtn) {
                this.resetBtn.addEventListener('click', () => this.reset());
            }
            this.#form.addEventListener('keydown', (ev) => {
                if (ev.target === this.resetBtn) {
                    return;
                }
                switch (ev.keyCode) {
                    case 13:
                        this.submitForm();
                        break;
                    default:
                        break;
                }
            });
            // this.disabled = this.#form.querySelectorAll('.disabled')?.length > 0;
            this.novalidate = this.#form.dataset?.novalidate === 'true';
            const formControls = [...this.#form.querySelectorAll('.form-control:not(.disabled)')];
            this.validity = formControls.every(el => el?.validity);
            if (!this.novalidate) {
                formControls.forEach(el => {
                    if (el.tagName === 'input') {
                        el.addEventListener('blur', () => {
                            this.invalid = !this.validity;
                        });
                    } else {
                        el.addEventListener('change', () => {
                            this.invalid = !this.validity;
                        }); 
                    }
                });
            }
        }
    }

    reset() {
        this.invalid = false;
        const formControls = this.#form.querySelectorAll('.form-control');
        formControls.forEach(item => {
            this.removeError(item);
            item.value = null;
        });
    }

    addErrorTip(ele, msg) {
        const hasTipList = ele.querySelectorAll('.form-tip');
        if (hasTipList?.length) {
            hasTipList.forEach(item => {
                item.remove();
            });
        }
        const tipElement = document.createElement('div');
        tipElement.innerText = msg;
        tipElement.classList.add('form-tip');
        ele.classList.add('has-error');
        ele.append(tipElement);
    }

    removeError(ele) {
        ele.parentElement.classList.remove('has-error');
        if (ele.nextElementSibling?.classList.contains('form-tip')) {
            ele.nextElementSibling.remove();
        }
    }

    checkRequired(ele, value) {
        if (ele.previousSibling.previousElementSibling.classList.contains('required')) {
            if (!(/\S/.test(value))) {
                this.addErrorTip(ele.parentElement, `${ele.tagName === 'INPUT' ? '请输入' : '请选择'}${ele.previousElementSibling.innerText}`);
                return false; 
            } else {
                this.removeError(ele);
            }
            
        }
    }

    beforeCheck(ele, value, ruleItem) {
        let validity = true;
        if (ruleItem.required && !(/\S/.test(value))) {
            this.addErrorTip(ele.parentElement, ruleItem.msg);
            validity = false;
            return false; 
        } else {
            this.removeError(ele);
        }
        if (ruleItem.patterns?.length) {
            const patterns = ruleItem.patterns;
            patterns.forEach(patternsItem => {
                if (!patternsItem.reg.test(value)) { 
                    this.addErrorTip(ele.parentElement, patternsItem.msg);
                    validity = false;
                    return false; 
                } else {
                    this.removeError(ele);
                }
            });
        }
        this.invalid = !validity;
        return true; 
    }

    checkValidity() {
        if (this.novalidate || !this.rules || !Object.keys(this.rules).length) {
            return true;
        }
       
        const formControls = this.#form.querySelectorAll('.form-control:not(.disabled)');
        const elements = [...formControls].reverse();
        elements.forEach(el => {
            for (const key in this.rules) {
                if (key === el.id) {
                    this.beforeCheck(el, this.formData[key],  this.rules[key]);
                } else {
                    this.checkRequired(el, el.value);
                }
            }
        });
    }

    getAjaxFormData(ele, options) {
        if (typeof options === 'function') {
            options = {complete: options};
        }
        const formData = {};
        const formControls = ele.querySelectorAll('.form-control:not(.disabled)');
        formControls.forEach(item => {
            formData[item.id] = item.value || '';
        });
        if (options.beforeSubmit) {
            this.beforeSubmit = options.beforeSubmit;
            delete options.beforeSubmit;
        }
        if (options.success) {
            this.success = options.success;
            delete options.success;
        }
        if (options.error) {
            this.error = options.error;
            delete options.error;
        }
        if (options.finish) {
            this.finish = options.finish;
            delete options.finish;
        }
        if (options.rules) {
            this.rules = {...options.rules};
            delete options.rules;
        }
        this.formData = {
            timeout: window?.config ? window?.config.timeout : 0,
            dataType: 'json',
            ...formData,
            ...options,
        };
    }

    changeFormDataToString(queryData) {
        const stringJson = [];
        const isArray = queryData.constructor == Array;
        let requestValue;
        if (isArray) {
            for (let i = 0; i < queryData.length; i++) {
                requestValue = queryData[i];
                const k = requestValue.name;
                requestValue = requestValue.value;
                stringJson[stringJson.length] = encodeURIComponent(k) + '=' + encodeURIComponent(requestValue);
            }
        } else {
            for (const k in queryData) {
                requestValue = queryData[k];
                if (requestValue && requestValue.constructor == Array) {
                    for (const i in requestValue) {
                        stringJson[stringJson.length] = encodeURIComponent(k) +
                            '=' + encodeURIComponent(requestValue[i]);
                    }
                } else {
                    stringJson[stringJson.length] = encodeURIComponent(k) +
                        '=' + encodeURIComponent(requestValue);
                }
            }
        }

        return stringJson.join('&').replace(' ', '+');
    }

    ajaxRequest(requestData) {
        const {params, data, headers, timeout} = requestData;
        let url = requestData.url;
        const method = requestData.method ? requestData.method.toUpperCase() : 'POST';
        const queryParams = params ? this.changeFormDataToString(params) : null;
        let newData = data || null;
        if (queryParams) {
            if (method == 'GET' || newData) {
                url += url.indexOf('?') >= 0 ? '&' : '?' + queryParams;
            } else {
                newData = queryParams;
            }
        }
        const xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xmlHttp.onreadystatechange = () => {
            let response = xmlHttp.response || {};
            response = {
                'result': 'fail',
                // 'message': '提交成功，这是来自服务器的消息。',
                'message': {
                    'fruit': '请选择水果',
                    'name': '请输入账号',
                    'pw': '请输入密码',
                    
                   
                },
            };
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                if (typeof response == 'string') response = JSON.parse(response);
        
                if (response === null || typeof response !== 'object') {
                    if (response) return alert(response);
                    return this.showFormMessage('No response.', 'danger', null);
                }
                if (response.result === 'success') {
                    if (this.success) this.success(response);
                } else {
                    this._error(response);
                    if (this.error) this.error(response);
                }
            } else {
                this._error(response);
                if (this.error) this.error(response);
            }

            if (this.finish) this.finish(response);
            
        };
        xmlHttp.open(method, url, true);
        for (const headerKey in headers) {
            const requestValue = headers[headerKey];
            if (typeof requestValue == 'string') xmlHttp.setRequestHeader(headerKey, requestValue);
        }
        if (timeout) {
            this.timer = setInterval(() => {
                xmlHttp.abort();
            });
        }
       
        xmlHttp.send(newData);
    }

    ajaxSubmit(form, options) {
        const submitData = {
            url: this.ajaxUrl,
            method: form.method, 
            params: this.formData, 
            data: null,
            headers: options.headers || {'Content-Type': 'application/x-www-form-urlencoded'},
            timeout: options.timeout,
        };
        this.ajaxRequest(submitData);
    }

    submitForm() {
        if (this.checkValidity()) {
            this.ajaxSubmit(this.#form, this.formData);
        }
    }

    showFormMessage(message, method: string, options: object) {
        console.log(method, options);
        alert(message);
    }


    _error(response) {
        const message = response.message || response.reason || response.error;
        if (typeof message === 'string') {
            this.showFormMessage(message, 'danger', null);
        } else if (typeof message === 'object') {
            const unShowedMessages = [];
            for (const key in message) {
                const controlMessage = Array.isArray(message[key]) ? message[key].join('') : message[key];
                const $control = this.#form.querySelectorAll(`#${key}`);
                if (!$control?.length) {
                    unShowedMessages.push(controlMessage);
                    return;
                }
                $control.forEach(controlItem => {
                    this.addErrorTip(controlItem.parentElement, message[key]);
                });
            }
            if (unShowedMessages.length) {
                this.showFormMessage(unShowedMessages.join(''), 'danger', null);
            }
        }

    }    
}
document.addEventListener('form', () => {
    console.log(window.addEventListener);
});

document.addEventListener('click', (e) => {
    new AjaxForm('resetForm', {
        rules: {
            'name': {
                required: true,
                msg: '登录名必填',
                patterns: [{
                    reg: /^[a-zA-Z]+$/,
                    msg: '登录名请填入英文',
                }],
            },
            'pw': {
                required: true,
                msg: '密码必填',
            },
        },
        success: (data)=>{
            console.log('success', data);
        },
        error: (data)=>{
            console.log('fail', data);
        },
        // finish: (data)=>{
        //     console.log('finish', data);
        // },
    });
    new AjaxForm('apiForm2', {
        rules: {
            'name': {
                required: true,
                msg: '登录名必填',
            },
            'pw': {
                required: true,
                msg: '密码必填',
            },
        },
        success: (data)=>{
            console.log('success', data);
        },
        error: (data)=>{
            console.log('fail', data);
        },
        // finish: (data)=>{
        //     console.log('finish', data);
        // },
    });
});