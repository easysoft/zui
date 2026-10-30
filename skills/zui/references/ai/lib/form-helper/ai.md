# 表单助手

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "form-helper",
  "summary": "统一读取和设置原生表单字段及 ZUI 控件值。",
  "keywords": [
    "表单",
    "字段",
    "取值",
    "赋值",
    "FormHelper"
  ]
}
```

## overview

读取和设置现有表单中的原生字段与 ZUI 控件值。它不渲染表单、不负责校验或提交；动态生成表单可用 [FormBuilder](../form-builder/ai.md)。

## setup

workspace：`import {FormHelper, formHelper} from '@zui/form-helper';`，需要浏览器 DOM 和 core。主入口不提供独立外观，字段样式来自 form-control/checkbox/picker 等所属库。实例是工具类，不继承 Component。

## vanilla

无。

## preact

无。

## web-components

无。

## css

无。

## css-variables

无。

## javascript

### javascript-form-helper

```json
{"name": "FormHelper / formHelper", "summary": "在一个表单作用域中定位和更新字段。"}
```

`new FormHelper(selector,options?)` 或 `formHelper(selector,options?)` 返回新实例。selector 为 Cash 可解析的容器。

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| matchID | boolean | 否 | true | name 未匹配时查 id |
| matchBrackets | boolean | 否 | true | name 未匹配时查 name[] 或 name[ 前缀 |
| cacheQuery | boolean | 否 | 无（关闭） | 缓存字段 DOM 查询 |
| allowSameName | boolean | 否 | 无（关闭） | 允许匹配多个字段；否则抛错 |
| throwError | boolean | 否 | true | setFieldVal 找不到字段时抛错 |
| controls | Record<string,FormControlFinder> | 否 | 内置 picker | 自定义控件适配，覆盖同名全局适配 |
| fields | 查找器或映射 | 否 | 无 | 按 query 优先自定义查找 |

query 以 `#`、`.`、`[` 开头时作为 CSS 选择器；其他按 zui-form-field → name → id → 方括号名称查找，不将普通字段名直接拼进选择器。

| 方法/属性 | 语义 |
| --- | --- |
| element / $element / options | 容器与最终选项 |
| getFieldInfo(query):FormField或undefined | 字段位置、名称、原始值与可选控件 |
| getFieldVal(query):unknown | 控件优先走 getVal，否则读取原生 val |
| setFieldVal(query,value):boolean或undefined | 控件优先走 setVal；普通字段 val；pick-value 触发 syncValue |
| setFormData(data):void | 逐字段调用 setFieldVal，错误不会回滚已设置字段 |
| clearCache(query?):this | 清一个查询或全部缓存；替换字段 DOM 后调用 |
| FormHelper.registerControl(type,finder):void | 为后续实例注册全局控件适配 |

无 destroy/订阅 API，丢弃实例释放持有的 DOM 引用；启用缓存时不要无限保留已移除字段。fields 返回 false 可阻止查找；返回 Cash 继续适配，返回 FormField 直接使用。内置 picker 要求已有可用原生实例和 `$` 视图，不会自动初始化控件。

workspace：

```ts
import {formHelper} from '@zui/form-helper';
const form = document.createElement('form');
form.innerHTML = '<input name="title" value="old">';
const helper = formHelper(form);
helper.setFieldVal('title', 'new');
console.log(helper.getFieldVal('title'));
helper.clearCache();
```

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/form-helper/src/vanilla/form-helper.ts>)。

## types

### types-form-helper

```json
{"name": "FormHelperOptions / FormField / FormControlInfo / 查找器", "summary": "定义字段、控件值适配和查询行为。"}
```

```ts
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
    matchID?: boolean;
    matchBrackets?: boolean;
    cacheQuery?: boolean;
    allowSameName?: boolean;
    controls?: Record<string, FormControlFinder>;
    fields?: Record<string, FormFieldFinder> | FormFieldFinder;
    throwError?: boolean;
}
```

来源：[src/types/form-helper-options.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/form-helper/src/types/form-helper-options.ts>)。

## recipes

对同名复选框等多字段查询显式配置 allowSameName，并自行确认原生 Cash.val 的返回语义；对于有专有取值逻辑的控件，用 controls 注册 getVal/setVal，不直接修改内部输入节点。

## constraints

getFieldVal 查不到字段返回 undefined；throwError 只影响 setFieldVal 的缺失分支，多个匹配项错误仍会抛出。设置原生 input 的 val 不自动触发 change；需要时使用方显式派发。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/form-helper/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/form-helper/src/main.ts>)
- [实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/form-helper/src/vanilla/form-helper.ts>)
- [类型](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/form-helper/src/types/form-helper-options.ts>)
