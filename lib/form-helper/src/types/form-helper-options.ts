import type {Component, Cash} from '@zui/core';

export type FormControlInfo = {
    type: string;
    instance: Component;
    $element: Cash;
    getVal: () => unknown;
    setVal: (value: unknown) => boolean | undefined;
};

export type FormField = {
    query: string;
    name: string;
    $field: Cash;
    value: unknown;
    control?: FormControlInfo;
};

export type FormControlFinder = ($field: Cash, $scope: Cash) => Omit<FormControlInfo, 'type'> & {type?: string} | undefined;

export type FormFieldFinder = (query: string, $scope: Cash) => FormField | Cash | false | undefined;

export interface FormHelperOptions {
    /**
     * 当查询参数无法作为 name 匹配时，是否自动将查询参数作为 ID 查询。
     * Whether to automatically use the query parameter as an ID query when the query parameter cannot be matched as a name.
     */
    matchID?: boolean;

    /**
     * 当查询参数无法作为 name 匹配时，是否自动将查询参数作 name[] 的形式进行查询。
     * Whether to automatically use the query parameter as name[] for query when the query parameter cannot be matched as a name.
     */
    matchBrackets?: boolean;

    /**
     * 是否缓存查询字段。
     * Whether to cache query fields.
     */
    cacheQuery?: boolean;

    /**
     * 是否允许同名字段。
     * Whether to allow same name fields.
     */
    allowSameName?: boolean;

    /**
     * 控件查找器。
     * Control finder.
     */
    controls?: Record<string, FormControlFinder>;

    /**
     * 表单字段查找。
     * Form fields finder.
     */
    fields?: Record<string, FormFieldFinder> | FormFieldFinder;

    /**
     * 是否在找不到控件时抛出错误。
     * Whether to throw an error when a control is not found.
     */
    throwError?: boolean;
}
