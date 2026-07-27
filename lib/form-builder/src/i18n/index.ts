import {i18n} from '@zui/core';

const zh_cn = {
    validate: {
        required: '“{title}”不能为空',
        minLength: '“{title}”的长度不能少于{min}',
        maxLength: '“{title}”的长度不能超过{max}',
        minCount: '“{title}”的数目不能少于{min}',
        maxCount: '“{title}”的数目不能超过{max}',
        min: '“{title}”不能小于{min}',
        max: '“{title}”不能超过{max}',
        pattern: '“{title}”格式不正确',
        integer: '“{title}”必须是整数',
    },
};

const zh_tw: typeof zh_cn = {
    validate: {
        required: '“{title}”不能為空',
        minLength: '“{title}”的長度不能少於{min}',
        maxLength: '“{title}”的長度不能超過{max}',
        minCount: '“{title}”的數目不能少於{min}',
        maxCount: '“{title}”的數目不能超過{max}',
        min: '“{title}”不能小於{max}',
        max: '“{title}”不能超過{max}',
        pattern: '“{title}”格式不正確',
        integer: '“{title}”必須是整數',
    },
};

const en: typeof zh_cn = {
    validate: {
        required: '"{title}" is required',
        minLength: '"{title}" length must be greater than {min}',
        maxLength: '"{title}" length must be less than {max}',
        minCount: '"{title}" count must be greater than {min}',
        maxCount: '"{title}" count must be less than {max}',
        min: '"{title}" must be greater than {min}',
        max: '"{title}" must be less than {max}',
        pattern: '"{title}" format is incorrect',
        integer: '"{title}" must be an integer',
    },
};

i18n.addLang({
    zh_cn: {
        formBuilder: zh_cn,
    },
    zh_tw: {
        formBuilder: zh_tw,
    },
    en: {
        formBuilder: en,
    },
});

export function getLang(key: string, args?: string | (string | number)[] | Record<string, string | number>, defaultValue?: string) {
    return i18n.getLang(`formBuilder.${key}`, args, defaultValue);
}
