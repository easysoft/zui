import type {Component, CustomContentType, HElementProps} from '@zui/core';
import type {ComponentType} from 'preact';
import type {ToolbarSetting} from '@zui/toolbar';
import type {FieldSchemaInfo, FormSchema} from './form-schema';
import type {FormBuilder} from '../components';

/**
 * 表单组件类型，支持多种组件定义方式
 * - Component: ZUI 组件类
 * - ComponentType: Preact 组件类型
 * - string: 字符串形式的组件名称
 */
export type FormWidgetType = typeof Component | ComponentType | string;

export type FormWidgetValueChangeHandler = (value: unknown) => unknown;

export type FormWidgetSetting = [component: FormWidgetType, props?: Record<string, unknown>, onChange?: FormWidgetValueChangeHandler];

export type FormWidgetSettingDefinition = string | FormWidgetSetting | (((schemaInfo: Omit<FieldSchemaInfo, 'widget'>, formBuilder: FormBuilder) => string | FormWidgetSetting));

/**
 * 表单组件映射表
 * 键为组件名称，值可以是：
 * - 组件类型
 * - [组件类型, 属性配置] 元组
 */
export type FormWidgetMap = Record<string, FormWidgetSettingDefinition>;

/**
 * 表单构建器选项配置接口
 * 继承自 HElementProps，包含表单构建器的所有配置选项
 */
export interface FormBuilderOptions extends HElementProps {
    /** 表单的 Schema 定义 */
    schema: FormSchema;

    /** 自定义组件映射表 */
    widgets?: FormWidgetMap;

    /** 是否为只读模式 */
    readonly?: boolean;

    /** 表单的默认数据 */
    defaultData?: Record<string, unknown>;

    /** 操作栏配置 */
    actions?: ToolbarSetting;

    /** 表单头部内容 */
    header?: CustomContentType;

    /** 表单底部内容 */
    footer?: CustomContentType;

    /** 表单数据作为表单项提交的名称 */
    formName?: string;

    /** 数据变化时的回调函数 */
    onDataChange?: (newData: Record<string, unknown>, oldData: Record<string, unknown>) => void;

    /** 表单项数据变化时的回调函数 */
    onFieldChange?: (path: string, value: unknown, oldValue: unknown) => void | Record<string, unknown> | boolean;

    /** Schema 变化时的回调函数 */
    onSchemaChange?: (newSchema: FormSchema, oldSchema: FormSchema) => void;

    /** 渲染完成后的回调函数 */
    afterRender?: (firstRender?: boolean) => void;
}
