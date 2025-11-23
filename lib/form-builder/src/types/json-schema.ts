/**
 * JSON Schema 支持的基本数据类型
 * - string: 字符串类型
 * - number: 数字类型(包含小数)
 * - integer: 整数类型
 * - boolean: 布尔类型
 * - array: 数组类型
 * - object: 对象类型
 * - map: 映射类型(键值对)
 */
export type JSONSchemaType = 'string'
    | 'number'
    | 'integer'
    | 'boolean'
    | 'array'
    | 'object'
    | 'map';

/**
 * 表单验证规则配置
 */
export type FormValidateRule = {
    /** 验证的正则表达式模式 */
    pattern?: string;
    /** 验证失败时显示的错误消息 */
    message?: string;
};

/**
 * 表单额外内容配置
 * 可以是纯文本或包含 HTML 的对象
 */
export type FormExtra = string | {html: string};

/**
 * 表单网格宽度配置
 * 支持多种宽度表示方式：
 * - 'full': 全宽
 * - '1/2', '2/3' 等: 分数表示
 * - '100px': 像素值
 * - '50%': 百分比
 * - 数字: 栅格列数
 */
export type FormGridWidth = 'full' | `${number}/${number}` | `${number}px` | `${number}%` | number;

/**
 * 基础 Schema 接口，所有字段类型的共同配置
 * @template T 字段值的数据类型
 */
export interface BaseSchema<T = unknown> {
    /** 字段的数据类型 */
    type: JSONSchemaType;
    /** 字段标题/标签 */
    title?: string;
    /** 字段描述文本，支持 JavaScript 表达式 */
    description?: string;
    /** 额外的内容或 HTML */
    extra?: FormExtra;
    /** 字段的默认值 */
    defaultValue?: T;
    /** 字段的宽度配置 */
    width?: FormGridWidth;
    /** 用于渲染字段的组件名称 */
    widget?: string;
    /** 只读模式下使用的组件名称 */
    readonlyWidget?: string;
    /** 输入框占位符文本，支持 JavaScript 表达式 */
    placeholder?: string;
    /** 传递给组件的额外属性，支持 JavaScript 表达式 */
    props?: Record<string, unknown>;
    /** 是否为必填字段，支持 JavaScript 表达式 */
    required?: boolean | string[];
    /** 工具提示文本，支持 JavaScript 表达式 */
    tooltip?: string;
    /** 提示信息文本，支持 JavaScript 表达式 */
    hint?: string;
    /** 是否禁用字段，支持 JavaScript 表达式 */
    disabled?: boolean;
    /** 是否隐藏字段，支持 JavaScript 表达式 */
    hidden?: boolean;
    /** 是否为只读模式，支持 JavaScript 表达式 */
    readonly?: boolean;
    /** 验证规则列表 */
    rules?: FormValidateRule[];
    /** 依赖的字段 */
    dependencies?: string[];
    /** 字段排序 */
    order?: number;
}

/**
 * 字符串类型字段的 Schema 配置
 */
export interface StringSchema extends BaseSchema<string> {
    type: 'string';
    /** 字符串格式，如 'email', 'url', 'date' 等，支持 JavaScript 表达式 */
    format?: string;
    /** 字符串最大长度 */
    max?: number;
    /** 字符串最小长度 */
    min?: number;
    /** 字符串验证的正则表达式模式 */
    pattern?: string;
}

/**
 * 数字类型字段的 Schema 配置（支持小数）
 */
export interface NumberSchema extends BaseSchema<number> {
    type: 'number';
    /** 数字最大值 */
    max?: number;
    /** 数字最小值 */
    min?: number;
}

/**
 * 整数类型字段的 Schema 配置
 */
export interface IntegerSchema extends BaseSchema<number> {
    type: 'integer';
    /** 整数最大值 */
    max?: number;
    /** 整数最小值 */
    min?: number;
}

/**
 * 布尔类型字段的 Schema 配置
 */
export interface BooleanSchema extends BaseSchema<boolean> {
    type: 'boolean';
}

/**
 * 对象类型字段的 Schema 配置
 */
export interface ObjectSchema extends BaseSchema<Record<string, unknown>> {
    type: 'object';
    /** 对象的属性定义，键为属性名，值为对应的 Schema */
    properties: Record<string, JSONSchema>;
    /** 是否默认折叠显示，'disabled' 表示不可折叠 */
    collapsed?: boolean | 'disabled';
    /** 必填字段 */
    required?: string[];
}

/**
 * 映射类型字段的 Schema 配置（键值对）
 */
export interface MapSchema extends BaseSchema<Record<string, unknown>> {
    type: 'map';
    /** 键的验证模式 */
    keyPattern?: string;
    /** 值的验证模式 */
    valuePattern?: string;
}

/**
 * 数组类型字段的 Schema 配置
 */
export interface ArraySchema extends BaseSchema<unknown[]> {
    type: 'array';
    /** 数组元素的 Schema 定义 */
    items?: JSONSchema;
    /** 数组最大长度 */
    max?: number;
    /** 数组最小长度 */
    min?: number;
    /** 是否默认折叠显示，'disabled' 表示不可折叠 */
    collapsed?: boolean | 'disabled';
}

/**
 * 联合类型，包含所有支持的 Schema 类型
 */
export type JSONSchema = StringSchema | NumberSchema | IntegerSchema | BooleanSchema | ObjectSchema | MapSchema | ArraySchema;

export type JSONSchemaTypes = {
    string: StringSchema;
    number: NumberSchema;
    integer: IntegerSchema;
    boolean: BooleanSchema;
    object: ObjectSchema;
    map: MapSchema;
    array: ArraySchema;
};

export type JSONSchemaDataType<T extends JSONSchema> = T extends BaseSchema<infer U> ? U : never;
