# 表单生成器

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"form-builder","summary":"依据表单 Schema 生成控件、维护数据、动态字段与校验结果。","keywords":["表单生成器","form-builder","FormBuilder"]}
```

## overview

依据表单 Schema 生成控件、维护数据、动态字段与校验结果。

Schema 是该库定义的 FormSchema/JSONSchema 扩展，不承诺完整兼容所有 JSON Schema 标准。`schema` 必填；defaultData 只用于初始数据映射。字段路径使用点分隔，schema 中数组项用 [] 路径。`setFieldValue(path,value)` 处理 autoTrim，onFieldChange 返回 false 取消或返回其他路径的值映射以联动；onDataChange 接收新旧完整数据。

`validate()` 返回是否通过并更新 validationErrors；`validateField` 返回 [code,error][]，skipUpdate=true 可只取结果。`setValidationErrors(errors,reset?)` 接收文本或带 code/message 的单个/数组错误。默认输入变化只移除旧错误，提交时校验；onSubmit(event,data) 返回 false 可取消浏览器提交。formName 可将数据以字段提交，业务异步请求由使用方实现。

schema 更新会重新协调字段而保留可用数据；setSchemaByPath 默认 deepMerge=true。widgets 可覆盖默认控件映射，复用 [HElement](../core/ai.md#preact-helement) 的资源清理；卸载释放 schema/data effects。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/form-builder`](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/main.ts>) 公开原生组件和相应类型。

Preact 入口 [`@zui/form-builder/react`](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/form-builder` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-form-builder

```json
{"name":"FormBuilder","summary":"创建和管理 FormBuilder 原生实例。"}
```

入口：`import {FormBuilder} from '@zui/form-builder';`。

构造 `new FormBuilder(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {FormBuilder} from '@zui/form-builder';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new FormBuilder(host, {schema: {type: 'object', properties: {title: {type: 'string', title: '标题'}}}, defaultData: {title: '示例'}});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[FormBuilder](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/vanilla/form-builder.ts>)。

## preact

### preact-form-builder

```json
{"name":"FormBuilder","summary":"渲染 FormBuilder Preact 视图。"}
```

入口：`import {FormBuilder} from '@zui/form-builder/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

继承 [HElement](../core/ai.md#preact-helement)；通用 HTML 属性与自定义渲染能力见 [HElementProps](../core/ai.md#types-helement-props)。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps: Partial<FormBuilderOptions> = {
        autoValidate: {
            onChange: 'removeErrors',
            onSubmit: true,
        },
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `schema$` | `(): Signal<FormSchema>` |
| `schema` | `(): FormSchema` |
| `formData` | `(): Record<string, unknown>` |
| `schemaMap` | `(): Record<string, JSONSchema>` |
| `validationErrors` | `(): Record<string, [code: string, error: string][]>` |
| `getSchemaByPath` | `(path: string): JSONSchema \| undefined` |
| `setSchemaByPath` | `(path: string, fieldSchema: Partial<JSONSchema>, deepMerge?: boolean): void` |
| `setFieldValue` | `(path: string, value: unknown): void` |
| `validateField` | `(pathOrSchemaInfo: string \| FieldSchemaInfo, options?: { skipUpdate?: boolean \| undefined; value?: unknown; } \| undefined): [code: string, error: string][]` |
| `validate` | `(): boolean` |
| `setValidationErrors` | `(errors: Record<string, string \| { code: string; message: string; } \| { code: string; message: string; }[]>, reset?: boolean \| undefined): void` |
| `getFieldValidationErrors` | `(path: string): [code: string, error: string][]` |
| `FormBuilder.loopSchema` | `(schema: JSONSchema, callback: (schema: JSONSchema, path: string) => void, currentPath?: string): void` |
| `FormBuilder.buildDataMap` | `(schema: JSONSchema, data?: unknown, path?: string, map?: Record<string, unknown>): Record<string, unknown>` |
| `FormBuilder.buildFormData` | `(dataMap: Record<string, unknown>): Record<string, unknown>` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/form-builder';
import {FormBuilder} from '@zui/form-builder/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<FormBuilder schema={{type: 'object', properties: {title: {type: 'string', title: '标题'}}}} defaultData={{title: '示例'}} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[FormBuilder](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/components/form-builder.tsx>)。

## web-components

无。公开入口未提供本库的自定义元素标签；Preact 注册或 `z-use-*` 自动初始化不等于 Web Components。

## css

### css-structure

```json
{"name": "结构与部件", "summary": "定义根节点和内部部件的样式。", "role": "js-component"}
```

选择器保留父子和同节点条件；生成部件由组件维护，不能仅添加类获得 JavaScript 行为。下表中标记“内部样式”的 token 仅说明 CSS 实现，不是额外公开类。

| 选择器或部件 | 功能/样式契约 |
| --- | --- |
| `.form-builder-title` | 加粗；大字号；`mb-3`（内部样式）；`px-1`（内部样式） |
| `.form-builder-item` | `basis-[var(--form-item-width,100%)]`（内部样式） |
| `.form-builder-item .form-hint` | `text-gray-500`（内部样式）；`px-2`（内部样式） |
| `.form-builder-extra` | `px-2`（内部样式） |
| `.form-builder-collapsible` | 1px 边框；`m-2`（内部样式） |
| `.form-builder-collapsible .collapsible-header` | 指针光标 |
| `.form-builder-collapsible .collapsible-body` | `pt-0`（内部样式） |
| `.form-builder-collapsible:hover` | `border-border`（内部样式） |
| `.form-builder-items` | Flex 布局；`flex-row`（内部样式）；允许换行 |
| `.form-horz .form-builder-items` | `gap-y-1`（内部样式） |
| `.form-horz .form-builder-item > .form-hint, .form-horz.form-builder-body > .form-actions, .form-horz .form-builder-item > .form-item-errors, .form-horz .form-builder-item > .form-builder-extra` | `pl-[--form-horz-label-width]`（内部样式） |
| `.form-item-error` | `text-danger-500`（内部样式） |
| `.form-builder-items.form-horz .form-label` | `top-[--form-grid-gap-y-half]`（内部样式） |
| `.form-builder-items.form-column` | 纵向布局 |
| `.form-builder-items.form-column > .form-builder-item` | `w-[var(--form-item-width,100%)]`（内部样式） |

来源：[src/style/vars.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/style/vars.css>), [src/style/form-builder.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/style/form-builder.css>)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.form-builder-item.is-root > .form-builder-items > .form-builder-item > .collapsible` | `mb-4`（内部样式）；`hover:-shadow`（内部样式） |
| `.form-builder-item.is-root > .form-builder-items > .form-builder-item > .collapsible > .collapsible-header` | `border-b`（内部样式）；`bg-gray-100`（内部样式）；`p-0`（内部样式）；`rounded-t-md`（内部样式） |
| `.form-builder-item.is-root > .form-builder-items > .form-builder-item > .collapsible > .collapsible-body` | `px-0`（内部样式） |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
## css-variables

本库没有新增可配置的 CSS 变量声明。依赖组件的变量按其 [AI 索引](../../ai.md) 查找；外部主题变量的使用不等于由本库定义。

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-form-widget-type

```json
{"name":"FormWidgetType","summary":"定义 FormWidgetType 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FormWidgetType = typeof Component | ComponentType | string;
```

来源：[FormWidgetType](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/form-builder-options.ts>)。

### types-form-widget-value-change-handler

```json
{"name":"FormWidgetValueChangeHandler","summary":"定义 FormWidgetValueChangeHandler 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FormWidgetValueChangeHandler = (value: unknown) => unknown;
```

来源：[FormWidgetValueChangeHandler](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/form-builder-options.ts>)。

### types-form-widget-setting

```json
{"name":"FormWidgetSetting","summary":"定义 FormWidgetSetting 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FormWidgetSetting = [component: FormWidgetType, props?: Record<string, unknown>, onChange?: FormWidgetValueChangeHandler];
```

来源：[FormWidgetSetting](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/form-builder-options.ts>)。

### types-form-widget-setting-definition

```json
{"name":"FormWidgetSettingDefinition","summary":"定义 FormWidgetSettingDefinition 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FormWidgetSettingDefinition = string | FormWidgetSetting | (((schemaInfo: Omit<FieldSchemaInfo, 'widget'>, formBuilder: FormBuilder) => string | FormWidgetSetting));
```

来源：[FormWidgetSettingDefinition](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/form-builder-options.ts>)。

### types-form-widget-map

```json
{"name":"FormWidgetMap","summary":"定义 FormWidgetMap 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FormWidgetMap = Record<string, FormWidgetSettingDefinition>;
```

来源：[FormWidgetMap](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/form-builder-options.ts>)。

### types-form-builder-options

```json
{"name":"FormBuilderOptions","summary":"定义 FormBuilderOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
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

    /** 表单的 action 属性 */
    formAction?: string;

    /** 是否自动验证表单 */
    autoValidate?: {onChange?: true | 'removeErrors'; onSubmit?: boolean};

    /** 数据变化时的回调函数 */
    onDataChange?: (newData: Record<string, unknown>, oldData: Record<string, unknown>) => void;

    /** 表单提交时的回调函数，返回 false 阻止表单提交 */
    onSubmit?: (event: Event, data: Record<string, unknown>) => boolean | void;

    /** 表单项数据变化时的回调函数 */
    onFieldChange?: (path: string, value: unknown, oldValue: unknown) => void | Record<string, unknown> | boolean;

    /** Schema 变化时的回调函数 */
    onSchemaChange?: (newSchema: FormSchema, oldSchema: FormSchema) => void;

    /** 渲染完成后的回调函数 */
    afterRender?: (firstRender?: boolean) => void;
}
```

来源：[FormBuilderOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/form-builder-options.ts>)。

### types-jsonschema-type

```json
{"name":"JSONSchemaType","summary":"定义 JSONSchemaType 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type JSONSchemaType = 'string'
    | 'number'
    | 'integer'
    | 'boolean'
    | 'array'
    | 'object'
    | 'map';
```

来源：[JSONSchemaType](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-form-validate-rule

```json
{"name":"FormValidateRule","summary":"定义 FormValidateRule 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FormValidateRule = {
    /** 验证的正则表达式模式 */
    pattern?: string;
    /** 验证失败时显示的错误消息 */
    message?: string;
};
```

来源：[FormValidateRule](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-form-extra

```json
{"name":"FormExtra","summary":"定义 FormExtra 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FormExtra = string | CustomContentType;
```

来源：[FormExtra](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-form-grid-width

```json
{"name":"FormGridWidth","summary":"定义 FormGridWidth 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FormGridWidth = 'full' | `${number}/${number}` | `${number}px` | `${number}%` | number;
```

来源：[FormGridWidth](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-form-display-type

```json
{"name":"FormDisplayType","summary":"定义 FormDisplayType 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FormDisplayType = 'vert' | 'horz' | 'inline';
```

来源：[FormDisplayType](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-form-display-mode

```json
{"name":"FormDisplayMode","summary":"定义 FormDisplayMode 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FormDisplayMode = 'column' | 'grid';
```

来源：[FormDisplayMode](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-form-validate-rule-pattern

```json
{"name":"FormValidateRulePattern","summary":"定义 FormValidateRulePattern 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FormValidateRulePattern = string | {pattern: string; message?: string};
```

来源：[FormValidateRulePattern](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-base-schema

```json
{"name":"BaseSchema","summary":"定义 BaseSchema 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface BaseSchema<T = unknown> {
    /** 字段的数据类型 */
    type: JSONSchemaType;
    /** 候选 Schema，仅提供类型声明，FormBuilder 不解析或验证这些分支 */
    anyOf?: JSONSchema[];
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
    /** 是否在字段前面添加换行 */
    wrapBefore?: boolean;
    /** 是否在字段后面添加换行 */
    wrapAfter?: boolean;
    /** 用于渲染字段的组件名称 */
    widget?: string;
    /** 只读模式下使用的组件名称 */
    readonlyWidget?: string;
    /** 输入框占位符文本，支持 JavaScript 表达式 */
    placeholder?: string;
    /** 字段的类名 */
    className?: ClassNameLike;
    /** 传递给组件的额外属性，支持 JavaScript 表达式 */
    props?: Record<string, unknown>;
    /** 是否为必填字段，支持 JavaScript 表达式 */
    required?: boolean | string[];
    /** 工具提示文本，支持 JavaScript 表达式 */
    tooltip?: string | TooltipOptions;
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
```

来源：[BaseSchema](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-string-schema

```json
{"name":"StringSchema","summary":"定义 StringSchema 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface StringSchema extends BaseSchema<string> {
    type: 'string';
    /** 字符串格式，如 'email', 'url', 'date' 等，支持 JavaScript 表达式 */
    format?: string;
    /** 字符串最大长度 */
    max?: number;
    /** 字符串最小长度 */
    min?: number;
    /** 字符串验证的正则表达式模式 */
    pattern?: FormValidateRulePattern;
    /** 是否自动修剪字符串 */
    autoTrim?: 'start' | 'end' | true;
}
```

来源：[StringSchema](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-number-schema

```json
{"name":"NumberSchema","summary":"定义 NumberSchema 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface NumberSchema extends BaseSchema<number> {
    type: 'number';
    /** 数字最大值 */
    max?: number;
    /** 数字最小值 */
    min?: number;
}
```

来源：[NumberSchema](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-integer-schema

```json
{"name":"IntegerSchema","summary":"定义 IntegerSchema 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface IntegerSchema extends BaseSchema<number> {
    type: 'integer';
    /** 整数最大值 */
    max?: number;
    /** 整数最小值 */
    min?: number;
}
```

来源：[IntegerSchema](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-boolean-schema

```json
{"name":"BooleanSchema","summary":"定义 BooleanSchema 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface BooleanSchema extends BaseSchema<boolean> {
    type: 'boolean';
}
```

来源：[BooleanSchema](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-object-schema

```json
{"name":"ObjectSchema","summary":"定义 ObjectSchema 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface ObjectSchema extends BaseSchema<Record<string, unknown>> {
    type: 'object';
    /** 对象的属性定义，键为属性名，值为对应的 Schema */
    properties: Record<string, JSONSchema>;
    /** 是否默认折叠显示，'disabled' 表示不可折叠 */
    collapsed?: boolean | 'disabled';
    /** 必填字段 */
    required?: string[];
    /** 表单的显示模式 */
    displayMode?: FormDisplayMode;
    /** 表单的显示类型 */
    displayType?: FormDisplayType;
}
```

来源：[ObjectSchema](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-map-schema

```json
{"name":"MapSchema","summary":"定义 MapSchema 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface MapSchema extends BaseSchema<Record<string, unknown>> {
    type: 'map';
    /** 键的验证模式 */
    keyPattern?: FormValidateRulePattern;
    /** 值的验证模式 */
    valuePattern?: FormValidateRulePattern;
}
```

来源：[MapSchema](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-array-schema

```json
{"name":"ArraySchema","summary":"定义 ArraySchema 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
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
```

来源：[ArraySchema](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-jsonschema

```json
{"name":"JSONSchema","summary":"定义 JSONSchema 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type JSONSchema = StringSchema | NumberSchema | IntegerSchema | BooleanSchema | ObjectSchema | MapSchema | ArraySchema;
```

来源：[JSONSchema](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-jsonschema-types

```json
{"name":"JSONSchemaTypes","summary":"定义 JSONSchemaTypes 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type JSONSchemaTypes = {
    string: StringSchema;
    number: NumberSchema;
    integer: IntegerSchema;
    boolean: BooleanSchema;
    object: ObjectSchema;
    map: MapSchema;
    array: ArraySchema;
};
```

来源：[JSONSchemaTypes](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-jsonschema-data-type

```json
{"name":"JSONSchemaDataType","summary":"定义 JSONSchemaDataType 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type JSONSchemaDataType<T extends JSONSchema> = T extends BaseSchema<infer U> ? U : never;
```

来源：[JSONSchemaDataType](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/json-schema.ts>)。

### types-expression-or-value

```json
{"name":"ExpressionOrValue","summary":"定义 ExpressionOrValue 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ExpressionOrValue<T> = `{{${string}}}` | T;
```

来源：[ExpressionOrValue](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/form-schema.ts>)。

### types-form-layout

```json
{"name":"FormLayout","summary":"定义 FormLayout 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FormLayout = {
    /** 布局组的标题 */
    title?: string;
    /** 布局组使用的组件 */
    widget?: string;
    /** 布局组包含的字段名称列表 */
    fields?: string[];
};
```

来源：[FormLayout](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/form-schema.ts>)。

### types-form-schema

```json
{"name":"FormSchema","summary":"定义 FormSchema 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface FormSchema extends ObjectSchema {
    /** 表单的列数，用于栅格布局 */
    column?: number;
    /** 标签的宽度（像素） */
    labelWidth?: number;
    /** 标签的对齐方式 */
    labelAlign?: 'left' | 'right' | 'center';
    /** 表单的布局配置，用于字段分组 */
    layout?: FormLayout[];
}
```

来源：[FormSchema](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/form-schema.ts>)。

### types-field-schema-info

```json
{"name":"FieldSchemaInfo","summary":"定义 FieldSchemaInfo 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FieldSchemaInfo = {
    path: string;
    schema: JSONSchema;
    properties?: string[];
    value: unknown;
    widget: FormWidgetSetting;
    dependenciesSet: Set<string>;
    required: boolean;
};
```

来源：[FieldSchemaInfo](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/types/form-schema.ts>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

Schema 是该库定义的 FormSchema/JSONSchema 扩展，不承诺完整兼容所有 JSON Schema 标准。`schema` 必填；defaultData 只用于初始数据映射。字段路径使用点分隔，schema 中数组项用 [] 路径。`setFieldValue(path,value)` 处理 autoTrim，onFieldChange 返回 false 取消或返回其他路径的值映射以联动；onDataChange 接收新旧完整数据。

`validate()` 返回是否通过并更新 validationErrors；`validateField` 返回 [code,error][]，skipUpdate=true 可只取结果。`setValidationErrors(errors,reset?)` 接收文本或带 code/message 的单个/数组错误。默认输入变化只移除旧错误，提交时校验；onSubmit(event,data) 返回 false 可取消浏览器提交。formName 可将数据以字段提交，业务异步请求由使用方实现。

schema 更新会重新协调字段而保留可用数据；setSchemaByPath 默认 deepMerge=true。widgets 可覆盖默认控件映射，复用 [HElement](../core/ai.md#preact-helement) 的资源清理；卸载释放 schema/data effects。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/form-builder/docs/lib/forms/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/.agents/skills/zui-standards/references/consumption.md>)
