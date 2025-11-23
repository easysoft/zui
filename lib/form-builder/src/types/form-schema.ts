import {FormWidgetSetting} from './form-builder-options';
import type {JSONSchema, ObjectSchema} from './json-schema';

/**
 * 支持 JavaScript 表达式的模板类型
 * 可以是纯值或者包含在 {{}} 中的 JavaScript 表达式字符串
 * @template T 支持的值类型
 * @example
 * // 纯值
 * "Hello World"
 * // JavaScript 表达式
 * "{{user.name}}"
 */
export type ExpressionOrValue<T> = `{{${string}}}` | T;

/**
 * 表单显示类型
 * - vert: 垂直布局（标签在上，控件在下）
 * - horz: 水平布局（标签在左，控件在右）
 * - inline: 内联布局（标签和控件在同一行）
 */
export type FormDisplayType = 'vert' | 'horz' | 'inline';

/**
 * 表单布局配置
 * 用于定义表单字段的分组和布局
 */
export type FormLayout = {
    /** 布局组的标题 */
    title?: string;
    /** 布局组使用的组件 */
    widget?: string;
    /** 布局组包含的字段名称列表 */
    fields?: string[];
};

/**
 * 表单 Schema 配置接口
 * 继承自 ObjectSchema，添加了表单特有的布局和显示配置
 */
export interface FormSchema extends ObjectSchema {
    /** 表单的显示类型 */
    displayType?: FormDisplayType;
    /** 表单的列数，用于栅格布局 */
    column?: number;
    /** 标签的宽度（像素） */
    labelWidth?: number;
    /** 标签的对齐方式 */
    labelAlign?: 'left' | 'right' | 'center';
    /** 表单的布局配置，用于字段分组 */
    layout?: FormLayout[];
}

/**
 * 字段 Schema 信息
 * 用于描述字段的路径、类型、对象属性、数组项
 */
export type FieldSchemaInfo = {
    path: string;
    schema: JSONSchema;
    properties?: string[];
    value: unknown;
    widget: FormWidgetSetting;
    dependenciesSet: Set<string>;
};
