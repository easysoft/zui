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

    disabled: boolean; //禁用

    validation: {
        valid: false, 
        msg: '',
    };

    isPass: boolean;

    rules: object;

    constructor(element, options) {
        this.ajaxUrl = '';
        this.formData = {};
        this.timer = null;
        this.invalid = false;
        element = element.replace(/\s*/g, '');
        const formIdData = element.split(',');
        if (formIdData?.length) {
            formIdData.forEach(item => {
                if (item) {
                    this.#form = document.querySelector(`#${item}`);
                    if (this.#form) {
                        this.getAjaxFormData(this.#form, options);
                      
                        this.ajaxUrl = (this.#form.action ? this.#form.action : options.url) || '';
                        this.submitBtn = document.querySelector(`#${item} [data-type=submit]`);
                        this.resetBtn = document.querySelector(`#${item} [data-type=reset]`);
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
                        this.disabled = this.#form.querySelectorAll('.disabled')?.length > 0;
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
            });
        }
    }

    reset() {
        this.invalid = false;
        const formControls = this.#form.querySelectorAll('.form-control');
        formControls.forEach(item => {
            item.parentElement.classList.remove('has-error');
            if (item.nextElementSibling?.classList.contains('form-tip')) {
                item.nextElementSibling.remove();
            }
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

    checkValidity() {
        if (this.novalidate) {
            return true;
        }
        const formControls = this.#form.querySelectorAll('.form-control:not(.disabled)');
        const elements = [...formControls].reverse();
        let validity = true;
        elements.forEach(el => {
            if (el.checkValidity && !el.checkValidity()) {
                validity = false;
            }
        });
        this.invalid = !validity;
        return validity;
    }

    getAjaxFormData(ele, options) {
        if (typeof options === 'function') {
            options = {complete: options};
        }
        const formData = {};
        const formControls = this.#form.querySelectorAll('.form-control:not(.disabled)');
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
            this.rules = options.rules;
            delete options.rules;
        } else {
            this.rules = {};
        }
       
        this.formData = {
            timeout: window?.config ? window?.config.timeout : 0,
            dataType: 'json',
            ...this.formData,
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

    // 触发验证
    validate(rules) {
        if (rules) {
            for (const i in this.formData) {
                this.validation[i] = {valid: false, msg: ''};
            }
        }
        
        // 计算最终结果的唯一标识
        for (const j in this.validation) {
            if (typeof this.validation[j] === 'object') {
                if (this.validation[j].valid) {
                    this.validation.valid = true;
                    this.validation.msg = '';
                } else {
                    this.validation.valid = false;
                    this.validation.msg = this.validation[j].msg;
                    break;
                }
            }
        }
        this.isPass = this.validation.valid;
    }

    // doValidate (eleName, validateObj){
    //     let value = this.parent.querySelector('[name=' + eleName + ']').value.replace(/(^\s*)|(\s*$)/g, '');
    //     // 判断必填选项
    //     if(validateObj.required){
    //         if (/\S/.test(value)) {
    //             this.setTrue(eleName);
    //         } else {
    //             this.setFalse(eleName, validateObj.msg);
    //             return;
    //         }
    //     }
    //     // 判断正则选项
    //     if (validateObj.patterns) {
    //         for(let i in validateObj.patterns){
    //             if (validateObj.patterns[i].reg.test(value)) {
    //                 this.setTrue(eleName);
    //             } else {
    //                 this.setFalse(eleName, validateObj.patterns[i].msg);
    //                 return;
    //             }
    //         }
    //     }
    // }

    setTrue(eleName) {
        this.validation[eleName].valid = true;
        this.validation[eleName].msg = '';
    }

    setFalse(eleName, msg) {
        this.validation[eleName].valid = false;
        this.validation[eleName].msg = msg;
    }
    
    onBeforeSubmit(data, currentForm, option) {
        if (this.rules) {
            this.validate(this.rules);
        }
        if ((this.callback.beforeSubmit && this.callback.beforeSubmit(data, currentForm, option)) === false) return false;
        this.#form.classList.remove('form-watched');
        
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
        this.checkValidity();
        // this.onBeforeSubmit(null, null, null);
        this.ajaxSubmit(this.#form, this.formData);
        return false;
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

document.addEventListener('click', (e) => {
    if (e !== null && e.target instanceof HTMLElement) {
        if (e.target.dataset?.type === 'submit') {
            new AjaxForm('apiForm2', {
                rules: {
                    'name': {
                        required: true,
                        msg: 'name必填',
                        patterns: [{
                            reg: /^[a-zA-Z]+$/,
                            msg: 'name请填入英文',
                        }],
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
        }
    }
});