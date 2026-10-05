# 表单生成器

表单生成器（FormBuilder）根据 Schema 渲染字段，支持嵌套对象、控件映射、字段联动和表单验证。Schema 使用 `type`、`properties` 等 JSON Schema 风格的字段，并扩展了 `widget`、`props` 等配置；支持范围以本页说明为准。

## 用法

### 简单使用

根 Schema 使用 `type: 'object'`，在 `properties` 中定义字段。`title` 显示为标签，`defaultValue` 指定字段默认值；`defaultData` 用于填入已有数据，优先于字段默认值。

::: tabs

== 示例

<Example>
  <ZUI id="formBuilderBasic" use="formBuilder" :options="basicOptions" />
</Example>

== HTML

```html
<div id="formBuilderBasic"></div>
```

== JS

```js-vue
const formBuilder = new zui.FormBuilder('#formBuilderBasic', {{ JSON.stringify(basicOptions, null, 4) }});
```

:::

未指定 `widget` 时，布尔字段使用复选框，其他字段使用输入框；`number`、`integer` 字段应显式设置 `widget: 'input'`，以启用数字输入框。未提供初始值时，字符串为 `''`，数字为 `0`，布尔值为 `false`，数组为 `[]`，映射为 `{}`。

### 组件渲染

使用 `widget` 选择控件，使用 `props` 传递该控件的选项。同页多个表单包含同名字段时，通过 `props.id` 指定不同的控件 ID，避免标签关联到其他表单。下面演示下拉选择、多行输入、多选 Picker、开关，以及自定义数字输入映射。

::: tabs

== 示例

<Example>
  <ZUI id="formBuilderWidgets" use="formBuilder" :options="widgetOptions" />
</Example>

== HTML

```html
<div id="formBuilderWidgets"></div>
```

== JS

```js
// schema 为下方 Schema 标签中的对象。
const formBuilder = new zui.FormBuilder('#formBuilderWidgets', {
    schema,
    widgets: {
        quantity: ['input', {type: 'number', min: 1, max: 10}],
    },
});
```

== Schema

```json-vue
{{ JSON.stringify(widgetSchema, null, 4) }}
```

:::

常用控件如下：

| `widget` | 用途 | 常用 `props` |
| --- | --- | --- |
| `input` | 单行输入；密码输入可设置 `type: 'password'` | `type`、`placeholder` |
| `textarea` | 多行输入 | `rows`、`autoHeight` |
| `select`、`multiSelect` | 原生单选、多选 | `items: [{text, value}]` |
| `picker`、`multiPicker` | 选择器；数组类型默认多选 | `items`、`multiple` |
| `checkbox`、`switch` | 布尔值 | `label` |
| `radio` | 单选列表 | `items` |
| `text` | 展示当前值 | — |
| `stringList` | 编辑字符串数组 | — |
| `map` | 编辑键值对 | — |

数组交给 Picker 或 `stringList` 编辑时，省略 `items`。Schema 的 `items` 表示数组项结构，会进入数组结构渲染流程；它与 `props.items` 中的控件候选项不同。

`widgets` 可以定义别名、组件元组或根据字段信息返回配置的函数。元组第二项设置控件属性，上例为数字输入框设置了原生最小值和最大值。可选的第三项接收控件 `onChange` 的第一个参数，并返回要保存的值。

```js
const widgets = {
    shortText: 'input',
    password: ['input', {type: 'password'}],
    description: ({schema}) => ['textarea', {rows: schema.required ? 4 : 2}],
};
```

自定义 Preact 组件或 ZUI 组件类放在元组第一项，如 `[CustomInput, {placeholder: '请输入'}]`，并通过 `value` 和 `onChange` 读写字段值。直接放入函数会被当作配置工厂调用。

### 对象与布局

嵌套 `object` 会显示为可折叠分组，数据仍保持嵌套结构。`displayType` 控制标签布局，`displayMode: 'grid'` 配合字段 `width` 控制每行宽度；下面两个半宽字段共用一行。

::: tabs

== 示例

<Example>
  <ZUI id="formBuilderLayout" use="formBuilder" :options="layoutOptions" />
</Example>

== HTML

```html
<div id="formBuilderLayout"></div>
```

== JS

```js-vue
const formBuilder = new zui.FormBuilder('#formBuilderLayout', {{ JSON.stringify(layoutOptions, null, 4) }});
```

:::

字段路径使用点号，例如 `contact.email`。`width` 支持 `'full'`、`'1/2'`、`'200px'`、`'50%'`，数字表示占用 12 栅格中的列数；`wrapBefore`、`wrapAfter` 可在字段前后换行。

### 表单联动

字段属性可以使用 <code v-pre>{{...}}</code> 表达式，`dependencies` 必须列出依赖字段的路径。切换下面的用户类型，可观察授权说明的显隐和必填状态，同时通过 `onFieldChange` 更新审核人。

::: tabs

== 示例

<Example>
  <ZUI id="formBuilderLinkage" use="formBuilder" :options="linkageOptions" />
</Example>

== HTML

```html
<div id="formBuilderLinkage"></div>
```

== JS

```js
// schema 为下方 Schema 标签中的对象。
const formBuilder = new zui.FormBuilder('#formBuilderLinkage', {
    schema,
    onFieldChange(path, value) {
        if (path === 'userType') {
            return {reviewer: value === 'admin' ? '系统管理员' : '部门负责人'};
        }
    },
});
```

== Schema

```json-vue
{{ JSON.stringify(linkageSchema, null, 4) }}
```

:::

表达式上下文包括 `formData`（当前数据）、`value`（当前字段值）、`path`（当前路径）、`schema`（当前字段定义）和 `formBuilder`（表单组件实例）。表达式只在字段属性的顶层求值；需要动态设置控件选项时，令整个 `props` 返回对象，例如 <code v-pre>props: '{{({placeholder: formData.userType === "admin" ? "说明权限范围" : "选填"})}}'</code>。

`onFieldChange` 返回“字段路径 → 值”的映射可同时更新其他字段，返回 `false` 可取消本次变更。隐藏字段的数据会保留，而且仍参与校验，因此示例同时联动 `hidden` 和 `required`。

### 表单验证

使用 `required`、`min`、`max` 和 `pattern` 定义校验。下面先输入不合规则的用户名，再点击“验证表单”；用户名必须为 3～20 位字母、数字或下划线，并以字母开头。

::: tabs

== 示例

<Example>
  <ZUI id="formBuilderValidation" use="formBuilder" :options="validationOptions" />
  <p role="status" aria-live="polite">{{ validationResult }}</p>
</Example>

== HTML

```html
<div id="formBuilderValidation"></div>
<p id="formBuilderValidationResult" role="status" aria-live="polite"></p>
```

== JS

```js
// schema 为下方 Schema 标签中的对象。
const formBuilder = new zui.FormBuilder('#formBuilderValidation', {
    component: 'form',
    attrs: {novalidate: true},
    schema,
    autoValidate: {onSubmit: true},
    actions: [{btnType: 'submit', text: '验证表单', type: 'primary'}],
    onDataChange() {
        document.querySelector('#formBuilderValidationResult').textContent = '';
    },
    onSubmit() {
        document.querySelector('#formBuilderValidationResult').textContent = '验证通过';
        return false;
    },
});
```

== Schema

```json-vue
{{ JSON.stringify(validationSchema, null, 4) }}
```

:::

此例仅在提交时校验。`novalidate` 关闭浏览器原生提交校验，以便统一展示 FormBuilder 的错误信息。校验失败时不会调用 `onSubmit`；成功后返回 `false` 阻止页面提交。

| 配置 | 行为 |
| --- | --- |
| `required: true` | 字段不能为空；对象也可通过 `required: ['name']` 指定必填子字段 |
| 字符串 `min` / `max` | 限制字符长度 |
| 数字 `min` / `max` | 限制数值；当前实现仅处理大于 `0` 的边界 |
| `type: 'integer'` | 检查数值是否为整数 |
| 数组 `min` / `max` | 限制元素数量 |
| `pattern` | 正则字符串，或 `{pattern, message}` 自定义错误消息 |
| 映射 `keyPattern` / `valuePattern` | 校验键名和键值，格式同 `pattern` |

默认 `autoValidate` 为 `{onChange: 'removeErrors', onSubmit: true}`：修改字段时清除相关错误，提交时校验。设置 `onChange: true` 会在字段变更时重新校验；设置 `onSubmit: false` 可关闭提交校验。传入该对象时应明确写出需要保留的行为。

`format` 和 `rules` 当前未参与内置验证；正则校验请使用 `pattern`。服务端错误可以通过 `setValidationErrors()` 回填，见下方方法示例。

### 提交表单

在普通容器上初始化，并设置 `component: 'form'` 生成原生表单。通过 `actions` 中的 `btnType: 'submit'` 添加提交按钮；`onSubmit(event, data)` 接收当前嵌套数据。下面只展示提交结果，不发送请求。

::: tabs

== 示例

<Example>
  <ZUI id="formBuilderSubmit" use="formBuilder" :options="submitOptions" />
  <pre role="status" aria-live="polite">{{ submitResult }}</pre>
</Example>

== HTML

```html
<div id="formBuilderSubmit"></div>
<pre id="formBuilderSubmitResult" role="status" aria-live="polite"></pre>
```

== JS

```js
const formBuilder = new zui.FormBuilder('#formBuilderSubmit', {
    component: 'form',
    formName: 'json',
    schema: {
        type: 'object',
        properties: {
            title: {type: 'string', title: '项目名称', required: true, defaultValue: '客户服务门户'},
            notifications: {type: 'boolean', title: '接收通知', defaultValue: true, props: {id: 'formBuilderSubmitNotifications'}},
        },
    },
    actions: [{btnType: 'submit', text: '提交表单', type: 'primary'}],
    onSubmit(event, data) {
        document.querySelector('#formBuilderSubmitResult').textContent = JSON.stringify(data, null, 2);
        return false;
    },
});
```

:::

使用原生提交时，设置 `formAction` 和 `attrs: {method: 'post'}`，并移除示例中阻止提交的回调。`formName: 'json'` 会额外生成名为 `json` 的隐藏字段，其值为完整数据的 JSON 字符串；普通控件也可能提交各自的具名字段。

使用异步请求时，应在 `onSubmit` 中立即调用 `event.preventDefault()`，再发送 `data`。异步函数返回的 `Promise<false>` 不能代替同步阻止提交。

## 选项

| 选项 | 类型 | 说明 |
| --- | --- | --- |
| `schema` | `FormSchema` | 必填，定义字段结构与显示方式 |
| `widgets` | `FormWidgetMap` | 自定义控件映射，见“组件渲染” |
| `readonly` | `boolean` | 向全部字段传入只读选项，并优先使用 `readonlyWidget`；具体行为由控件决定 |
| `defaultData` | `Record<string, unknown>` | 初始化数据，使用嵌套对象结构 |
| `actions` | `ToolbarSetting` | 底部操作栏 |
| `header` / `footer` | `CustomContentType` | 表单头部、底部内容 |
| `component` | `HElementProps['component']` | 根元素类型；提交表单时设为 `'form'` |
| `attrs` | `HElementProps['attrs']` | 根元素属性，如 `method`、`novalidate` |
| `formName` | `string` | 保存完整 JSON 数据的隐藏字段名 |
| `formAction` | `string` | 原生表单 `action` |
| `autoValidate` | `{onChange?: true \| 'removeErrors'; onSubmit?: boolean}` | 自动校验配置 |
| `onDataChange` | `(newData, oldData) => void` | 初始化及数据变化时调用 |
| `onFieldChange` | `(path, value, oldValue) => void \| Record<string, unknown> \| boolean` | 字段变化时调用，可返回联动值或 `false` |
| `onSchemaChange` | `(newSchema, oldSchema) => void` | 通过 `render({schema})` 替换 Schema 时调用 |
| `onSubmit` | `(event, data) => boolean \| void` | 校验通过后调用；同步返回 `false` 阻止提交 |
| `afterRender` | `(firstRender?: boolean) => void` | 渲染完成后调用 |

## 属性与方法

`new zui.FormBuilder()` 返回原生包装实例，通过它的 `$` 属性访问表单组件。以下示例接续“简单使用”中的 `formBuilder`；请在实例完成渲染后调用。

### 读取数据

```js
const form = formBuilder.$;
console.log(form.schema);           // 原始 Schema 定义
console.log(form.formData);         // 当前嵌套表单数据
console.log(form.validationErrors); // 字段路径到 [错误代码, 错误消息][] 的映射
```

这些属性用于读取；更新字段请调用方法，不要直接修改返回对象。

### 修改字段和 Schema

```js
formBuilder.$.setFieldValue('name', '陈曦');

const nameSchema = formBuilder.$.getSchemaByPath('name');
formBuilder.$.setSchemaByPath('name', {
    title: '联系人姓名',
    placeholder: '请输入联系人姓名',
});
```

- `setFieldValue(path, value)`：设置字段值，并触发字段联动和对应的自动校验。
- `getSchemaByPath(path)`：读取包含覆盖的字段定义；路径不存在时返回 `undefined`。对象字段用点号路径，如 `contact.email`。
- `setSchemaByPath(path, patch, deepMerge = true)`：合并指定字段的 Schema，不修改传入的原始对象；第三个参数为 `false` 时浅合并。不存在的路径会被忽略。

替换整份 Schema 使用 `formBuilder.render({schema: nextSchema})`；移除组件时调用 `formBuilder.destroy()` 清理实例。

### 手动校验与服务端错误

```js
const form = formBuilder.$;
if (form.validate()) {
    console.log('表单数据', form.formData);
}

const errors = form.validateField('name');
console.log(errors); // [错误代码, 错误消息][]，空数组表示无错误

form.setValidationErrors({name: '该姓名已被使用'});
console.log(form.getFieldValidationErrors('name'));
form.setValidationErrors({}, true); // 清除全部错误
```

`validate()` 返回布尔值，失败时滚动到第一个出错字段。`setValidationErrors(errors, reset?)` 默认合并已有错误；`reset: true` 替换全部错误。单个字段的错误可为字符串、`{code, message}` 对象或该对象的数组。

## Schema 参考

### 字段通用配置

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `type` | `'string' \| 'number' \| 'integer' \| 'boolean' \| 'object' \| 'array' \| 'map'` | 数据类型 |
| `title` / `description` | `string` | 标签和说明 |
| `defaultValue` | 对应字段类型 | 初始值 |
| `widget` / `readonlyWidget` | `string` | 正常、只读时的控件名 |
| `props` | `Record<string, unknown>` | 控件选项 |
| `placeholder` | `string` | 输入提示 |
| `required` | `boolean \| string[]` | 当前字段必填，或对象的必填子字段列表 |
| `hidden` / `disabled` / `readonly` | `boolean` | 隐藏、禁用、只读 |
| `dependencies` | `string[]` | 联动依赖的字段路径 |
| `width` | `FormGridWidth` | 字段宽度 |
| `wrapBefore` / `wrapAfter` | `boolean` | 字段前、后换行 |
| `tooltip` | `string \| TooltipOptions` | 标签提示 |
| `hint` / `extra` | `string` / `FormExtra` | 字段下方提示与额外内容 |
| `order` | `number` | 同级字段全部指定时按数值排序 |

表达式是运行时扩展，使用 <code v-pre>{{...}}</code> 字符串传入。当前部分 TypeScript 属性仍只声明静态类型（例如 `hidden?: boolean`）；涉及这些属性的动态 Schema 可像联动示例一样维护为 JSON / JavaScript 配置。

### 对象与显示方式

对象使用 `properties: Record<string, JSONSchema>` 定义子字段。

| 字段 | 值 | 说明 |
| --- | --- | --- |
| `displayType` | `'vert'`（默认） | 标签在控件上方 |
| `displayType` | `'horz'` | 标签在控件左侧 |
| `displayType` | `'inline'` | 内联布局 |
| `displayMode` | `'grid'`（当前渲染默认） | 字段按宽度横向排列并换行 |
| `displayMode` | `'column'` | 字段纵向排列 |

`column`、`labelWidth`、`labelAlign`、`layout` 虽有类型声明，当前渲染未使用；多列布局请使用 `width`。对象分组目前固定使用可折叠容器，不根据对象的 `widget` 或 `collapsed` 配置切换外观、初始折叠状态。

### 类型与支持边界

- 字符串支持 `min`、`max`、`pattern`，以及 `autoTrim: true | 'start' | 'end'`。
- 数字、整数支持 `min`、`max`；内置数字输入会将输入值转换为数字（清空时为 `0`）。自定义控件的值类型由其回调和映射中的转换函数决定。
- 数组支持 `min`、`max`；需要可编辑列表时优先使用本页演示的 Picker 或 `stringList`。带 `items` 的结构数组目前不能作为完整的对象数组编辑器使用。
- 映射支持 `keyPattern`、`valuePattern`。
- `anyOf` 当前仅有类型声明，不解析或验证分支。

标准 npm 项目从 `zui` 导入公开类型，例如：

```ts
import type {FormBuilderOptions, FormSchema, FormWidgetMap, JSONSchema} from 'zui';
```

在 ZUI 源码工作区中，上述类型也可从 `@zui/form-builder` 导入。以下控件映射类型说明使用工作区入口，需要解析 `@zui/*` 并编译 TypeScript；`/react` 入口导出的类型对应内部 Preact 组件：

```ts
import type {FieldSchemaInfo, FormWidgetType} from '@zui/form-builder';
import type {FormBuilder as FormBuilderComponent} from '@zui/form-builder/react';

// FormWidgetType 为 ZUI 组件类、Preact 组件或字符串名称。
type FormWidgetSetting = [
    component: FormWidgetType,
    props?: Record<string, unknown>,
    onChange?: (value: unknown) => unknown,
];

type FormWidgetSettingDefinition = string | FormWidgetSetting | ((
    schemaInfo: Omit<FieldSchemaInfo, 'widget'>,
    formBuilder: FormBuilderComponent,
) => string | FormWidgetSetting);

type FormWidgetMap = Record<string, FormWidgetSettingDefinition>;
```

这里工厂函数的 `formBuilder` 参数是表单组件实例，可直接调用 `validate()` 等方法；与 `new zui.FormBuilder()` 返回的包装实例不同。

<script setup>
import {ref} from 'vue';

const basicOptions = {
    schema: {
        type: 'object',
        properties: {
            name: {type: 'string', title: '姓名', required: true, placeholder: '请输入姓名'},
            email: {type: 'string', title: '邮箱', placeholder: 'name@example.com'},
            notifications: {type: 'boolean', title: '接收通知', defaultValue: true},
        },
    },
    defaultData: {name: '林悦', email: 'linyue@example.com'},
};

const widgetSchema = {
    type: 'object',
    properties: {
        priority: {
            type: 'string', title: '优先级', widget: 'select', defaultValue: 'normal',
            props: {items: [{text: '普通', value: 'normal'}, {text: '紧急', value: 'urgent'}]},
        },
        description: {type: 'string', title: '说明', widget: 'textarea', props: {rows: 3}},
        channels: {
            type: 'array', title: '通知渠道', widget: 'picker', defaultValue: ['email'],
            props: {items: [{text: '邮件', value: 'email'}, {text: '站内消息', value: 'message'}, {text: '短信', value: 'sms'}]},
        },
        enabled: {type: 'boolean', title: '启用通知', widget: 'switch', defaultValue: true},
        quantity: {type: 'integer', title: '数量', widget: 'quantity', defaultValue: 1, min: 1, max: 10},
    },
};
const widgetOptions = {
    schema: widgetSchema,
    widgets: {
        quantity: ['input', {type: 'number', min: 1, max: 10}],
    },
};

const layoutOptions = {
    schema: {
        type: 'object',
        displayMode: 'grid',
        displayType: 'vert',
        properties: {
            firstName: {type: 'string', title: '姓', width: '1/2'},
            lastName: {type: 'string', title: '名', width: '1/2'},
            contact: {
                type: 'object', title: '联系信息',
                properties: {
                    email: {type: 'string', title: '邮箱'},
                    phone: {type: 'string', title: '电话'},
                },
            },
        },
    },
    defaultData: {firstName: '林', lastName: '悦', contact: {email: 'linyue@example.com', phone: ''}},
};

const linkageSchema = {
    type: 'object',
    properties: {
        userType: {
            type: 'string', title: '用户类型', widget: 'select', defaultValue: 'normal',
            props: {items: [{text: '普通用户', value: 'normal'}, {text: '管理员', value: 'admin'}]},
        },
        adminCode: {
            type: 'string', title: '管理员授权说明',
            dependencies: ['userType'],
            hidden: '{{formData.userType !== "admin"}}',
            required: '{{formData.userType === "admin"}}',
            description: '{{formData.userType === "admin" ? "请说明管理员权限的使用范围" : ""}}',
        },
        reviewer: {type: 'string', title: '审核人', readonly: true, defaultValue: '部门负责人'},
    },
};
const linkageOptions = {
    schema: linkageSchema,
    onFieldChange(path, value) {
        if (path === 'userType') {
            return {reviewer: value === 'admin' ? '系统管理员' : '部门负责人'};
        }
    },
};

const validationResult = ref('');
const validationSchema = {
    type: 'object',
    properties: {
        username: {
            type: 'string', title: '用户名', required: true, min: 3, max: 20,
            pattern: {pattern: '^[a-zA-Z][a-zA-Z0-9_]*$', message: '请以字母开头，仅使用字母、数字或下划线'},
        },
        email: {
            type: 'string', title: '邮箱', required: true, props: {id: 'formBuilderValidationEmail'},
            pattern: {pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$', message: '请输入有效的邮箱地址'},
        },
    },
};
const validationOptions = {
    component: 'form',
    attrs: {novalidate: true},
    schema: validationSchema,
    autoValidate: {onSubmit: true},
    actions: [{btnType: 'submit', text: '验证表单', type: 'primary'}],
    onDataChange() {
        validationResult.value = '';
    },
    onSubmit() {
        validationResult.value = '验证通过';
        return false;
    },
};

const submitResult = ref('点击“提交表单”查看数据');
const submitOptions = {
    component: 'form',
    formName: 'json',
    schema: {
        type: 'object',
        properties: {
            title: {type: 'string', title: '项目名称', required: true, defaultValue: '客户服务门户'},
            notifications: {type: 'boolean', title: '接收通知', defaultValue: true, props: {id: 'formBuilderSubmitNotifications'}},
        },
    },
    actions: [{btnType: 'submit', text: '提交表单', type: 'primary'}],
    onSubmit(event, data) {
        submitResult.value = JSON.stringify(data, null, 2);
        return false;
    },
};
</script>
