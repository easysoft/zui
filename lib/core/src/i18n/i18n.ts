import {$} from '../cash';
import {deepGet} from '@zui/helpers/src/object/deep-get';
import {formatString} from '@zui/helpers/src/format-string';
import {I18nLangMap, I18nLangCode, I18nValuesMap} from './types';

let globalLangCode = (document.documentElement.getAttribute('lang') || 'zh_cn').toLowerCase().replace('-', '_');

let globalLangMap: I18nLangMap | undefined;

export function getLangCode() {
    return globalLangCode;
}

export function setLangCode(langCode: I18nLangCode) {
    globalLangCode = langCode.toLowerCase().replace('-', '_');
}

export function addI18nMap(map: I18nLangMap): void;
export function addI18nMap(code: I18nLangCode, values: I18nValuesMap): void;
export function addI18nMap(codeOrMap: I18nLangCode | I18nLangMap, values?: I18nValuesMap): void {
    if (!globalLangMap) {
        globalLangMap = {};
    }
    if (typeof codeOrMap === 'string') {
        codeOrMap = {[codeOrMap]: values ?? {}};
    }
    $.extend(true, globalLangMap, codeOrMap);
}

export function i18n<T = string>(maps: I18nLangMap | (I18nLangMap | undefined)[] | undefined, key: string, defaultValue?: T, langCode?: I18nLangCode, globalPrefix?: string): T | undefined;
export function i18n<T = string>(maps: I18nLangMap | (I18nLangMap | undefined)[] | undefined, key: string, args?: string | (string | number)[] | Record<string, string | number>, defaultValue?: T, langCode?: I18nLangCode, globalPrefix?: string): T | undefined;
export function i18n<T = string>(maps: I18nLangMap | (I18nLangMap | undefined)[] | undefined, key: string, args?: string | (string | number)[] | Record<string, string | number>, defaultValue?: T | I18nLangCode, langCode?: I18nLangCode, globalPrefix?: string): T | undefined {
    if (!Array.isArray(maps)) {
        maps = globalLangMap ? [globalLangMap, maps] : [maps];
    } else if (globalLangMap) {
        maps.unshift(globalLangMap);
    }
    if (typeof args === 'string') {
        globalPrefix = langCode;
        langCode = defaultValue as I18nLangCode;
        defaultValue = args;
        args = undefined;
    }
    const lang = langCode || globalLangCode;
    let value: T | undefined;
    for (const map of maps) {
        if (!map) {
            continue;
        }
        const mapValues = map[lang] || map.default;
        if (!mapValues) {
            continue;
        }
        const mapKey = (globalPrefix && map === globalLangMap) ? `${globalPrefix}.${key}` : key;
        value = deepGet<T>(mapValues, mapKey);
        if (value !== undefined) {
            break;
        }
    }
    if (value === undefined) {
        return defaultValue as T;
    }
    if (args) {
        return formatString(value as string, ...(Array.isArray(args) ? args : [args])) as T;
    }
    return value;
}

export function getLang<T = string>(key: string, args?: string | (string | number)[] | Record<string, string | number>, defaultValue?: T, langCode?: I18nLangCode): T | undefined {
    return i18n<T>(undefined, key, args, defaultValue, langCode);
}

i18n.addLang = addI18nMap;
i18n.getLang = getLang;
i18n.getCode = getLangCode;
i18n.setCode = setLangCode;
i18n.map = globalLangMap;
