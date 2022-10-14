import {deepGet} from '@zui/helpers/src/object/deep-get';
import {mergeDeep} from '@zui/helpers/src/object/merge-deep';
import {formatString} from '@zui/helpers/src/format-string';

export type I18nLangCode = string;

export type I18nValuesMap = Record<string, string | object>;

export type I18nLangMap = Record<I18nLangCode, I18nValuesMap>;

let globalLangCode = document.documentElement.getAttribute('lang')?.toLowerCase() ?? 'zh_cn';

let globalLangMap: I18nLangMap | undefined;

export function getLangCode() {
    return globalLangCode;
}

export function setLangCode(langCode: I18nLangCode) {
    globalLangCode = langCode.toLowerCase();
}

export function addI18nValues(map: I18nLangMap): void;
export function addI18nValues(code: I18nLangCode, values: I18nValuesMap): void;
export function addI18nValues(codeOrMap: I18nLangCode | I18nLangMap, values?: I18nValuesMap): void {
    if (!globalLangMap) {
        globalLangMap = {};
    }
    if (typeof codeOrMap === 'string') {
        codeOrMap = {[codeOrMap]: values ?? {}};
    }
    mergeDeep(globalLangMap, codeOrMap);
}

export function i18n(maps: I18nLangMap | I18nLangMap[], key: string, defaultValue?: string, langCode?: I18nLangCode): string | undefined;
export function i18n(maps: I18nLangMap | I18nLangMap[], key: string, args?: (string | number)[] | Record<string, string | number>, defaultValue?: string, langCode?: I18nLangCode): string | undefined;
export function i18n(maps: I18nLangMap | I18nLangMap[], key: string, args?: string | (string | number)[] | Record<string, string | number>, defaultValue?: string, langCode?: I18nLangCode): string | undefined {
    if (!Array.isArray(maps)) {
        maps = globalLangMap ? [globalLangMap, maps] : [maps];
    } else if (globalLangMap) {
        maps.unshift(globalLangMap);
    }
    if (typeof args === 'string') {
        langCode = defaultValue;
        defaultValue = args;
        args = undefined;
    }
    const lang = langCode || globalLangCode;
    let value: string | undefined;
    for (const map of maps) {
        const mapValues = map[lang];
        if (!mapValues) {
            return;
        }
        value = deepGet(mapValues, key);
        if (value !== undefined) {
            break;
        }
    }
    if (value === undefined) {
        return defaultValue;
    }
    if (args) {
        return formatString(value, Array.isArray(args) ? args : [args]);
    }
    return value;
}

i18n.addLang = addI18nValues;
i18n.getCode = getLangCode;
i18n.setCode = setLangCode;
