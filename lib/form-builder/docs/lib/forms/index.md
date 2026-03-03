# 表单生成器

表单生成器 (FormBuilder) 是一个基于 JSON Schema 的动态表单组件，支持复杂的表单结构和路径操作。

## 用法

### 简单实用

::: tabs
== 示例

<Example class="relative">
  <ZUI create="FormBuilder" :options="formBuilderOptions" />
</Example>

== HTML

```html
<div id="formBuilderExample"></div>
```

== JS

```js
import schemaData from './form-schema.json';

const formBuilder = new FormBuilder('#formBuilderExample', {
    schema: schemaData,
});
```

== form-schema.json

```json-vue
{{ JSON.stringify(schemaData, null, 2) }}
```

:::

### 组件渲染

内容待定。

### 表单联动

内容待定。

### 表单验证

内容待定。

### 提交表单

* 确保在 `<form>` 上初始化 FormBuilder
* 通过 `actions` 选项设置表单底部的提交按钮，例如 `[{btnType: 'submit', text: '提交', type: 'primary'}]`
* 通过 `formName` 设置最终表单生成的 JSON 数据作为表单项提交到服务器的名称，例如 `json`
* 如果要使用 ZUI Ajax 表单，可以通过 `ajax` 选项设置 AjaxForm 选项进行启用

## 选项

| 选项           | 类型                                              | 说明 |
|----------------|--------------------------------------------------|------|
| `schema`       | `FormSchema`                                     | 表单的 Schema 定义，描述表单结构和字段 |
| `ajax`         | `AjaxFormOptions`                                | Ajax 表单提交配置，支持异步提交等功能 |
| `widgets`      | `FormWidgetMap`                                  | 自定义组件映射表，键为组件名，值为组件类型或 [组件, 属性] 元组 |
| `readonly`     | `boolean`                                        | 是否为只读模式，启用后表单不可编辑 |
| `defaultData`  | `Record<string, unknown>`                        | 表单的默认数据，初始化时填充表单 |
| `actions`      | `ToolbarSetting`                                 | 操作栏配置，支持自定义表单底部按钮等 |
| `header`       | `CustomContentType`                              | 表单头部内容，可为字符串、VNode、函数等 |
| `footer`       | `CustomContentType`                              | 表单底部内容，可为字符串、VNode、函数等 |
| `onDataChange` | `(newData: Record<string, unknown>, oldData: Record<string, unknown>) => void` | 数据变化时的回调函数 |
| `onSchemaChange` | `(newSchema: FormSchema, oldSchema: FormSchema) => void` | Schema 变化时的回调函数 |
| `afterRender`  | `(firstRender?: boolean) => void`                | 渲染完成后的回调函数，`firstRender` 表示是否首次渲染 |

## 属性

### schema

获取表单的 JSON Schema 定义。

### data

获取表单的默认数据。

## 方法

### 获取 Schema

方法定义：

```ts
getSchemaByPath(path: string): JSONSchema | undefined;
```

参数：

* `path`：字段的路径，格式为 `object.property`

返回值：

* 如果路径存在，返回对应的 JSONSchema 对象
* 如果路径不存在，返回 `undefined`

示例：

```ts
const schema = formBuilder.getSchemaByPath('object.property');
```

### 设置 Schema

方法定义：

```ts
setSchemaByPath(path: string, schema: JSONSchema): void;
```

参数：

* `path`：字段的路径，格式为 `object.property`
* `schema`：要设置的 JSONSchema 对象

返回值：

* 无返回值

示例：

```ts
formBuilder.setSchemaByPath('object.property', {
    type: 'string',
    title: '新标题',
});
```

## API

### `FormBuilderOptions`

表单构建器选项配置接口，继承自 HElementProps，包含表单构建器的所有配置选项。

```ts
export interface FormBuilderOptions extends HElementProps {
    /** 表单的 Schema 定义 */
    schema: FormSchema;

    /** Ajax 表单提交配置 */
    ajax?: AjaxFormOptions;

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

    /** 数据变化时的回调函数 */
    onDataChange?: (newData: Record<string, unknown>, oldData: Record<string, unknown>) => void;

    /** Schema 变化时的回调函数 */
    onSchemaChange?: (newSchema: FormSchema, oldSchema: FormSchema) => void;

    /** 渲染完成后的回调函数 */
    afterRender?: (firstRender?: boolean) => void;
}
```

### `FormSchema`

表单 Schema 定义接口，继承自 ObjectSchema，添加了表单特有的布局和显示配置。

```ts
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
```

#### `FormDisplayType`

表单显示类型，用于控制表单字段的布局方式。

```ts
export type FormDisplayType = 'row' | 'column' | 'inline';
```

* `row`: 行布局（标签在上，控件在下）
* `column`: 列布局（标签在左，控件在右）
* `inline`: 内联布局（标签和控件在同一行）

#### `FormLayout`

表单布局配置，用于定义表单字段的分组和布局。

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

### `JSONSchema`

JSON Schema 联合类型，包含所有支持的字段类型。

```ts
export type JSONSchema = StringSchema | NumberSchema | IntegerSchema | BooleanSchema | ObjectSchema | MapSchema | ArraySchema;
```

#### 支持的数据类型

##### `JSONSchemaType`

```ts
export type JSONSchemaType = 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object' | 'map';
```

##### `BaseSchema<T>`

所有字段类型的基础配置接口。

```ts
export interface BaseSchema<T = unknown> {
    /** 字段的数据类型 */
    type: JSONSchemaType;

    /** 字段标题/标签 */
    title?: string;

    /** 字段描述文本，支持 JavaScript 表达式 */
    description?: ExpressionOrValue<string>;

    /** 额外的内容或 HTML */
    extra?: FormExtra;

    /** 字段的默认值 */
    default?: T;

    /** 字段的宽度配置 */
    width?: FormGridWidth;

    /** 用于渲染字段的组件名称 */
    widget?: string;

    /** 只读模式下使用的组件名称 */
    readonlyWidget?: string;

    /** 输入框占位符文本，支持 JavaScript 表达式 */
    placeholder?: ExpressionOrValue<string>;

    /** 传递给组件的额外属性，支持 JavaScript 表达式 */
    props?: ExpressionOrValue<Record<string, unknown>>;

    /** 是否为必填字段，支持 JavaScript 表达式 */
    required?: ExpressionOrValue<boolean>;

    /** 工具提示文本，支持 JavaScript 表达式 */
    tooltip?: ExpressionOrValue<string>;

    /** 提示信息文本，支持 JavaScript 表达式 */
    hint?: ExpressionOrValue<string>;

    /** 是否禁用字段，支持 JavaScript 表达式 */
    disabled?: ExpressionOrValue<boolean>;

    /** 是否隐藏字段，支持 JavaScript 表达式 */
    hidden?: ExpressionOrValue<boolean>;

    /** 是否为只读模式，支持 JavaScript 表达式 */
    readonly?: ExpressionOrValue<boolean>;

    /** 验证规则列表 */
    rules?: FormValidateRule[];
}
```

##### 字符串类型 `StringSchema`

```ts
export interface StringSchema extends BaseSchema<string> {
    type: 'string';
    /** 字符串格式，如 'email', 'url', 'date' 等 */
    format?: ExpressionOrValue<string>;
    /** 字符串最大长度 */
    max?: number;
    /** 字符串最小长度 */
    min?: number;
    /** 字符串验证的正则表达式模式 */
    pattern?: string;
}
```

##### 数字类型 `NumberSchema`

```ts
export interface NumberSchema extends BaseSchema<number> {
    type: 'number';
    /** 数字最大值 */
    max?: number;
    /** 数字最小值 */
    min?: number;
}
```

##### 整数类型 `IntegerSchema`

```ts
export interface IntegerSchema extends BaseSchema<number> {
    type: 'integer';
    /** 整数最大值 */
    max?: number;
    /** 整数最小值 */
    min?: number;
}
```

##### 布尔类型 `BooleanSchema`

```ts
export interface BooleanSchema extends BaseSchema<boolean> {
    type: 'boolean';
}
```

##### 对象类型 `ObjectSchema`

```ts
export interface ObjectSchema extends BaseSchema<Record<string, unknown>> {
    type: 'object';
    /** 对象的属性定义，键为属性名，值为对应的 Schema */
    properties: Record<string, JSONSchema>;
    /** 是否默认折叠显示，'disabled' 表示不可折叠 */
    collapsed?: boolean | 'disabled';
}
```

##### 映射类型 `MapSchema`

```ts
export interface MapSchema extends BaseSchema<Record<string, unknown>> {
    type: 'map';
    /** 键的验证模式 */
    keyPattern?: string;
    /** 值的验证模式 */
    valuePattern?: string;
}
```

##### 数组类型 `ArraySchema`

```ts
export interface ArraySchema extends BaseSchema<unknown[]> {
    type: 'array';
    /** 数组元素的 Schema 定义 */
    items?: JSONSchema;
    /** 数组最大长度 */
    max?: number;
    /** 数组最小长度 */
    min?: number;
}
```

### `FormBuilderState`

表单构建器状态接口，包含表单构建器运行时的状态信息。

```ts
export interface FormBuilderState {
    /** 当前的表单 Schema 配置 */
    schema: FormSchema;
    /** 当前的表单数据 */
    data: Record<string, unknown>;
}
```

### 工具类型

#### `ExpressionOrValue<T>`

支持 JavaScript 表达式的模板类型，可以是纯值或者包含在 `{{}}` 中的 JavaScript 表达式字符串。

```ts
export type ExpressionOrValue<T> = `{{${string}}}` | T;
```

示例：

```ts
// 纯值
"Hello World"
// JavaScript 表达式
"{{user.name}}"
```

#### `FormValidateRule`

表单验证规则配置。

```ts
export type FormValidateRule = {
    /** 验证的正则表达式模式 */
    pattern?: string;
    /** 验证失败时显示的错误消息 */
    message?: string;
};
```

#### `FormExtra`

表单额外内容配置，可以是纯文本或包含 HTML 的对象。

```ts
export type FormExtra = string | {html: string};
```

#### `FormGridWidth`

表单网格宽度配置，支持多种宽度表示方式。

```ts
export type FormGridWidth = 'full' | `${number}/${number}` | `${number}px` | `${number}%` | number;
```

* `'full'`: 全宽
* `'1/2'`, `'2/3'` 等: 分数表示
* `'100px'`: 像素值
* `'50%'`: 百分比
* 数字: 栅格列数

### 组件相关类型

#### `FormWidgetMap`

表单组件映射表，键为组件名称，值可以是组件类型或 [组件类型, 属性配置] 元组。

```ts
export type FormWidgetMap = Record<string, FormWidgetType | [component: FormWidgetType, props: FormWidgetProps]>;
```

#### `FormWidgetType`

表单组件类型，支持多种组件定义方式。

```ts
export type FormWidgetType = typeof Component | ComponentType | string;
```

* `Component`: ZUI 组件类
* `ComponentType`: Preact 组件类型
* `string`: 字符串形式的组件名称

#### `FormWidgetProps`

表单组件属性配置，可以是静态属性对象或基于 Schema 动态生成属性的函数。

```ts
export type FormWidgetProps = Record<string, unknown> | ((schema: JSONSchema) => Record<string, unknown>);
```

### 使用示例

#### 基本表单配置

```ts
import { FormBuilder, type FormBuilderOptions, type FormSchema } from '@zui/form-builder';

// 定义表单 Schema
const schema: FormSchema = {
    type: 'object',
    title: '用户信息表单',
    displayType: 'column',
    column: 2,
    labelWidth: 120,
    labelAlign: 'right',
    properties: {
        name: {
            type: 'string',
            title: '姓名',
            required: true,
            widget: 'input',
            placeholder: '请输入姓名',
            max: 50
        },
        email: {
            type: 'string',
            title: '邮箱',
            format: 'email',
            widget: 'input',
            placeholder: '请输入邮箱地址'
        },
        age: {
            type: 'integer',
            title: '年龄',
            min: 0,
            max: 150,
            widget: 'number'
        },
        isActive: {
            type: 'boolean',
            title: '是否激活',
            widget: 'checkbox',
            default: true
        }
    }
};

// 配置表单构建器选项
const options: FormBuilderOptions = {
    schema,
    defaultData: {
        name: '',
        email: '',
        age: 18,
        isActive: true
    },
    readonly: false,
    onDataChange: (newData, oldData) => {
        console.log('数据变化:', { newData, oldData });
    },
    onSchemaChange: (newSchema, oldSchema) => {
        console.log('Schema变化:', { newSchema, oldSchema });
    },
    afterRender: (firstRender) => {
        if (firstRender) {
            console.log('首次渲染完成');
        }
    }
};

// 创建表单构建器实例
const formBuilder = new FormBuilder('#form-container', options);
```

#### 动态表单配置

```ts
// 使用 JavaScript 表达式的动态配置
const dynamicSchema: FormSchema = {
    type: 'object',
    title: '动态表单',
    properties: {
        userType: {
            type: 'string',
            title: '用户类型',
            widget: 'select',
            props: {
                items: [
                    { text: '普通用户', value: 'normal' },
                    { text: '管理员', value: 'admin' }
                ]
            }
        },
        adminCode: {
            type: 'string',
            title: '管理员代码',
            widget: 'input',
            // 只有当用户类型为管理员时才显示
            hidden: '{{formData.userType !== "admin"}}',
            // 当用户类型为管理员时才必填
            required: '{{formData.userType === "admin"}}',
            description: '{{formData.userType === "admin" ? "请输入管理员代码" : ""}}'
        }
    }
};
```

#### 自定义组件映射

```ts
import { CustomInput, CustomDatePicker } from './custom-components';

const options: FormBuilderOptions = {
    schema,
    widgets: {
        // 简单映射：组件名 -> 组件
        'custom-input': CustomInput,

        // 复杂映射：组件名 -> [组件, 属性配置]
        'custom-date': [CustomDatePicker, {
            format: 'YYYY-MM-DD',
            showTime: false
        }],

        // 动态属性配置
        'dynamic-select': [CustomSelect, (schema: JSONSchema) => ({
            multiple: schema.type === 'array',
            placeholder: schema.placeholder || '请选择',
            clearable: !schema.required
        })]
    }
};
```

#### 复杂对象和数组配置

```ts
const complexSchema: FormSchema = {
    type: 'object',
    title: '项目配置',
    properties: {
        project: {
            type: 'object',
            title: '项目信息',
            widget: 'collapse',
            collapsed: false,
            properties: {
                name: {
                    type: 'string',
                    title: '项目名称',
                    required: true
                },
                description: {
                    type: 'string',
                    title: '项目描述',
                    widget: 'textarea'
                }
            }
        },
        members: {
            type: 'array',
            title: '团队成员',
            min: 1,
            max: 10,
            items: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        title: '成员姓名',
                        required: true
                    },
                    role: {
                        type: 'string',
                        title: '角色',
                        widget: 'select',
                        props: {
                            items: [
                                { text: '开发者', value: 'developer' },
                                { text: '设计师', value: 'designer' },
                                { text: '产品经理', value: 'pm' }
                            ]
                        }
                    }
                }
            }
        }
    }
};
```

#### 表单验证配置

```ts
const validationSchema: FormSchema = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            title: '用户名',
            required: true,
            min: 3,
            max: 20,
            pattern: '^[a-zA-Z0-9_]+$',
            rules: [
                {
                    pattern: '^[a-zA-Z]',
                    message: '用户名必须以字母开头'
                }
            ]
        },
        password: {
            type: 'string',
            title: '密码',
            widget: 'password',
            required: true,
            min: 8,
            rules: [
                {
                    pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)',
                    message: '密码必须包含大小写字母和数字'
                }
            ]
        }
    }
};
```

#### 表单布局配置

```ts
const layoutSchema: FormSchema = {
    type: 'object',
    title: '用户配置',
    displayType: 'row',
    layout: [
        {
            title: '基本信息',
            widget: 'fieldset',
            fields: ['name', 'email', 'phone']
        },
        {
            title: '高级设置',
            widget: 'collapse',
            fields: ['notifications', 'theme', 'language']
        }
    ],
    properties: {
        name: { type: 'string', title: '姓名' },
        email: { type: 'string', title: '邮箱' },
        phone: { type: 'string', title: '电话' },
        notifications: { type: 'boolean', title: '启用通知' },
        theme: { type: 'string', title: '主题' },
        language: { type: 'string', title: '语言' }
    }
};
```

<script setup>
const schemaData = {
    "type": "object",
    "title": "表单标题",
    "properties": {
        "z1": {
            "title": "必填项",
            "description": "这是必填项对象",
            "column": 1,
            "type": "object",
            "widget": "lineTitle",
            "maxWidth": "340px",
            "properties": {
                "repository": {
                    "title": "镜像",
                    "description": "",
                    "column": 1,
                    "type": "object",
                    "widget": "lineTitle",
                    "maxWidth": "340px",
                    "properties": {
                        "connectorRef": {
                            "title": "仓库源",
                            "type": "string",
                            "props": {
                                "items": [
                                    {
                                        "text": "默认",
                                        "value": ""
                                    }
                                ],
                                "emptyValue": false
                            },
                            "description": "",
                            "tooltip": "默认当前gitfox服务",
                            "widget": "select"
                        },
                        "name": {
                            "title": "名称",
                            "type": "string",
                            "props": {
                                "placeholder": "项目名称/镜像名称"
                            },
                            "description": "",
                            "tooltip": {
                                "title": "比如 demo/alpine"
                            },
                            "widget": "input"
                        },
                        "tags": {
                            "title": "标签",
                            "description": "",
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    }
                },
                "extraRepositories": {
                    "title": "更多镜像",
                    "description": "同时推送到其它仓库",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "connectorRef": {
                                "title": "仓库源",
                                "type": "string",
                                "description": "",
                                "tooltip": {
                                    "title": "默认当前gitfox服务"
                                },
                                "placeholder": "搜索",
                                "widget": "picker",
                                "props": {
                                    "emptyValue": false,
                                    "items": [
                                        {
                                            "text": "默认",
                                            "value": ""
                                        }
                                    ]
                                }
                            },
                            "name": {
                                "title": "名称",
                                "type": "string",
                                "props": {
                                    "placeholder": "项目名称/镜像名称"
                                },
                                "description": "",
                                "tooltip": {
                                    "title": "比如 demo/alpine"
                                },
                                "widget": "input"
                            }
                        }
                    }
                }
            }
        },
        "fr-jax5": {
            "title": "选填项",
            "description": "",
            "column": 1,
            "type": "object",
            "widget": "collapse",
            "properties": {
                "mode": {
                    "title": "模式",
                    "type": "string",
                    "props": {
                        "items": [
                            {
                                "text": "DockerInDocker",
                                "value": "dind"
                            },
                            {
                                "text": "Kubernetes",
                                "value": "kubernetes"
                            }
                        ]
                    },
                    "maxWidth": "340px",
                    "widget": "picker"
                },
                "platforms": {
                    "title": "架构",
                    "type": "array",
                    "widget": "picker",
                    "props": {
                        "multiple": true,
                        "items": [
                            {
                                "text": "linux/amd64",
                                "value": "linux/amd64"
                            },
                            {
                                "text": "linux/arm64",
                                "value": "linux/arm64"
                            }
                        ]
                    },
                    "maxWidth": "340px"
                },
                "dockerfile": {
                    "title": "Dockerfile",
                    "type": "string",
                    "defaultValue": "",
                    "props": {
                        "placeholder": "默认为Dockerfile"
                    },
                    "maxWidth": "340px",
                    "widget": "input"
                },
                "checkboxProperty": {
                    "title": "复选框",
                    "type": "boolean",
                    "widget": "checkbox",
                    "default": true
                },
                "radioProperty": {
                    "title": "单选框",
                    "type": "string",
                    "default": "option1",
                    "widget": "radio",
                    "props": {
                        "items": [
                            {
                                "text": "选项1",
                                "value": "option1"
                            },
                            {
                                "text": "选项2",
                                "value": "option2"
                            }
                        ]
                    }
                }
            }
        }
    },
    "displayType": "row",
    "column": 1,
    "maxWidth": "340px"
};
const formBuilderOptions = {
    schema: schemaData,
};
</script>
