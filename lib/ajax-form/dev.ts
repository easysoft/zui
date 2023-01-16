import '@zui/form';
import '@zui/form-control';
import '@zui/button';
import 'zui-dev';
import {AjaxForm} from './src/main';

onPageLoad(() => {
    new AjaxForm('#ajax-form-1', {
        rules: {
            'name-1': {
                required: true,
                errMsg: '请输入登录名',
            },
            'pw-1': {
                required: true,
                errMsg: '请输入密码',
            },
        },
        onError: (e) => {
            console.log(e);
        },
        onLoad: (e) => {
            console.log(e);
        },
        onLoadstart: (e) => {
            console.log(e);
        },
        onLoadend: (e) => {
            console.log(e);
        },
        onProgress: (e) => {
            console.log(e);
        },
    });

    new AjaxForm('#ajax-form-2', {
        rules: {
            'price-2': [{
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

    new AjaxForm('#ajax-form-3', {
        rules: {
            'name-3': {
                required: true,
                errMsg: '请输入登录名',
            },
            'pw-3': {
                required: true,
                errMsg: '请输入密码',
            },
        },
    });
});
