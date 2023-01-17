import '@zui/form';
import '@zui/form-control';
import '@zui/button';
import 'zui-dev';
import {AjaxForm} from './src/main';

onPageLoad(() => {
    new AjaxForm('#ajax-form-1', {
        rules: {
            name: {
                required: true,
                errMsg: '请输入登录名',
            },
            password: {
                required: true,
                errMsg: '请输入密码',
            },
        },
    });

    new AjaxForm('#ajax-form-2', {
        rules: {
            price: [{
                required: true,
                errMsg: '请输入价格', // 错误信息提示
            }, {
                regexp: /\d+/,
                errMsg: '价格必须为数字',
            }, {
                validate: (x) => +x > 0,
                errMsg: '价格不能为负数',
            }],
        },
    });

    const ajaxForm3 = new AjaxForm('#ajax-form-3', {
        rules: {
            userId: {
                validate(x) {
                    if (!x) return true;
                    return /\d+/.test(x);
                },
                errMsg: 'userId must be a number!',
            },
        },
        onLoad: (e) => {
            console.log(e);
            alert(`POST Response:
${JSON.stringify(ajaxForm3.response)}`);
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    const ajaxForm4 = new AjaxForm('#ajax-form-4', {
        onLoad: (e) => {
            console.log(e);
            alert(`GET Response:
    ${JSON.stringify(ajaxForm4.response)}`);
        },
        rules: {
            id: [{
                required: true,
                errMsg: 'id is required!',
            }, {
                regexp: /\d+/,
                errMsg: 'reg must be a number!',
            }],
        },
    });

    const ajaxForm5 = new AjaxForm('#ajax-form-5', {
        onLoad: (e) => {
            console.log(e);
            alert(`GET Response:
${JSON.stringify(ajaxForm5.response)}`);
        },
        rules: {
            paragraphs: [{
                required: true,
                errMsg: 'paragraphs is required!',
            }, {
                regexp: /\d+/,
                errMsg: 'paragraphs must be a number!',
            }, {
                validate: (x) => (+x > 0 && +x <= 20),
                errMsg: 'paragraphs must be greater then 0 and less than 20!',
            }],
            sentences: {
                validate: (x) => {
                    if (!x) return false;
                    if (!/\d+/.test(x)) return false;
                    return +x > 0 && +x <= 50;
                },
                errMsg: 'sentences must be greater then 0 and less than 50!',
            },
        },
        generateGetURL: (baseUrl, formData) => {
            const url = `${baseUrl}/${formData.paragraphs}/${formData.sentences}`;
            if (formData.p === 'true') {
                return `${url}?p=${formData.p}`;
            }
            return url;
        },
        responseType: 'text',
    });
});
