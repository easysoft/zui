# 表单控件

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "form-control",
  "summary": "提供基础输入外观及输入、选择、动态控件和键值编辑的 Preact 组件。",
  "keywords": [
    "输入框",
    "下拉选择",
    "表单控件",
    "MapEdit",
    "StringListEdit"
  ]
}
```

## overview

原生 HTML 用 form-control 样式；源码工作区可用 Preact Input、TextArea、Select、FormControl、FormGroup、MapEdit、StringListEdit。布局与标签外观由 [form](../form/ai.md) 提供。本库没有公开原生构造器。

## setup

workspace：主入口 `import '@zui/form-control';` 仅加载样式及 button/checkbox 依赖，没有运行时导出；Preact 组件和类型从 `@zui/form-control/react` 导入。JSX 需 Preact/TypeScript 配置，并加载 @zui/base。FormGroup 还需 @zui/form 的布局样式，tooltip 按需接入 tooltip/toggle。browser：可直接使用已加载 CSS 的原生 HTML 控件，不能假定 zui.FormControl 等构造器。npm：依据目标 zui/zui/css 的真实导出，不提供假定的 /react 子路径。

## vanilla

无。

## preact

### preact-form-control

```json
{"name": "FormControl", "summary": "根据 widget 动态选择输入控件。"}
```

内置 widget 字符串为 `input`、`file`（强制 type=file）、`textarea`、`select`、`multiSelect`、`checkbox`、`switch`、`checkboxList`、`switchList`、`radioList`、`radio`（单选列表）、`text`、`map`、`stringList`。其他字符串先查 Preact 注册表，再交给 ZUI 桥接组件；须预先加载相应库。传入带静态 ZUI 标志的原生类时使用 ZUI 包装，普通组件函数/类直接作为 Preact 渲染。

完整参数见 [FormControlProps](#types-form-control)。公共参数先合并，props 后合并。组件只转发回调，不统一转换：Input/TextArea/Select 回调首参为值；checkbox/switch 仍是 `(event, checked)`，应在 props.onChange 按原签名处理；列表为 `(checked,event)`；MapEdit 为 `(record,pairs)`。map/stringList 的初值须放 props.defaultValue，value 并非通用受控保证。没有额外公开实例方法。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import '@zui/form-control';
import {render} from 'preact';
import {FormControl} from '@zui/form-control/react';
const host = document.createElement('div');
document.body.append(host);
render(<FormControl widget="select" name="scope" props={{items: [{text: '团队', value: 'team'}], defaultValue: 'team'}} onChange={value => console.log(value)} />, host);
// 离开页面时：render(null, host); host.remove();
```

### preact-inputs

```json
{"name": "Input / TextArea / Select", "summary": "渲染基础输入、文本域和原生选择框。"}
```

分别使用 [InputProps](#types-input)、[TextAreaProps](#types-textarea)、[SelectProps](#types-select)。Input/TextArea 的 ref.value 从实际 DOM 读取；TextArea 另有 autoHeight():void。autoHeight 的监听只在挂载时决定，应保持该选项稳定，卸载时清理监听。Select.ref.value 从受控 props 或内部 state 读取；受控 value 未更新时会恢复选择。均监听原生 change，不是每次按键的 input 事件。Select 多选使用 selectedOptions 获取 string[]；单选空状态有 placeholder option。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import '@zui/form-control';
import {render} from 'preact';
import {Input, TextArea, Select} from '@zui/form-control/react';
const host = document.createElement('div');
document.body.append(host);
render(<div><Input placeholder="名称" onChange={value => console.log(value)} /><TextArea defaultValue="说明" rows={3} /><Select items={[{text: '公开', value: 'public'}]} defaultValue="public" /></div>, host);
// 离开页面时：render(null, host); host.remove();
```

### preact-map-edit

```json
{"name": "MapEdit", "summary": "编辑可增删的字符串键值列表。"}
```

完整参数见 [MapEditProps](#types-map-edit)。忽略空键，保留空值；有效键值按 key.localeCompare 排序，回调提供对象与有序 pairs；重复键在对象中由后者覆盖，但 pairs 保留重复项。默认至少一空行。effect 在卸载时释放，已排队的 requestAnimationFrame 回调没有单独取消。

ref.value 返回 Record<string,string>；静态 `formatPairs(pairs: MapPair[]): MapValuePair[]` 过滤空键并排序。实例 `add(afterGid?:number):void` 在指定行后插空行（省略放末尾）；`remove(gid:number):void` 删除指定行、必要时补空行；`setKey(gid:number,key:string):void`、`setValue(gid:number,value:string):void` 修改行。gid 为渲染节点 z-key 中的内部标识，必须是当前有效行；方法不验证无效 gid，不是数组索引。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import '@zui/form-control';
import {render} from 'preact';
import {MapEdit} from '@zui/form-control/react';
const host = document.createElement('div');
document.body.append(host);
render(<MapEdit defaultValue={{Accept: 'application/json'}} onChange={(value, pairs) => console.log(value, pairs)} />, host);
// 离开页面时：render(null, host); host.remove();
```

### preact-string-list-edit

```json
{"name": "StringListEdit", "summary": "编辑可增删的字符串列表。"}
```

完整参数见 [StringListEditProps](#types-string-list-edit)。过滤空字符串但不 trim；保留原顺序和重复项，至少保留一空行；无 value 受控接口。ref.value 返回有效 string[]。`add(afterGid?)`、`remove(gid)`、`setValue(gid,value)` 返回 void，gid 约束与 MapEdit 相同。内部 signal effect 在卸载释放，变化回调在下一动画帧执行。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import '@zui/form-control';
import {render} from 'preact';
import {StringListEdit} from '@zui/form-control/react';
const host = document.createElement('div');
document.body.append(host);
render(<StringListEdit defaultValue={['frontend', 'api']} onChange={value => console.log(value)} />, host);
// 离开页面时：render(null, host); host.remove();
```

### preact-form-group

```json
{"name": "FormGroup", "summary": "组织字段标签、控件、提示和可选帮助。"}
```

完整参数见 [FormGroupProps](#types-form-group)。函数组件没有实例方法/ref。control.name 优先于 name；control.props.id 优先于控件 name，并用于 label.for。widget=text 时加 is-static-text；无标签加 no-label。tooltip 只生成声明式属性，需要相关交互环境。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import '@zui/form';
import {render} from 'preact';
import {FormGroup} from '@zui/form-control/react';
const host = document.createElement('div');
document.body.append(host);
render(<div className="form"><FormGroup name="title" label="名称" required hint="用于项目识别" control={{widget: 'input', placeholder: '输入名称'}} /></div>, host);
// 离开页面时：render(null, host); host.remove();
```

## web-components

无。

## css

### css-form-control

```json
{"name": ".form-control / .form-static-text", "summary": "为原生 input、textarea、select 提供统一外观。", "role": "component"}
```

form-control 默认宽100%、高2rem，带背景、外圈、圆角和焦点效果；textarea 高度自动且最小32px，select[multiple] 自动高且无下拉图，file input 有专门按钮样式。form-static-text 提供静态字段上下 padding。

导入还对全局 input/textarea 设置 placeholder 颜色，对全局 select 设置背景下拉图和 appearance:none，不局限于 form-control 类。

browser（已加载本库 CSS）：

```html
<label for="plain-name">名称</label><input id="plain-name" class="form-control" placeholder="请输入名称">
```

### css-form-control-state

```json
{"name": ".size-sm / .size-md / .size-lg / .focus / .disabled / .readonly / .has-*", "summary": "设置控件尺寸及校验外观。", "role": "helper"}
```

尺寸类可在 form-control 自身或直接父级，sm/md/lg 高度1.5/1.75/2.5rem；默认2rem。focus/disabled/readonly 与对应原生状态类似但只控制视觉；真实禁用/只读应使用属性。has-error/has-warning/has-success 可在控件或祖先，提供边框与焦点色，不执行数据校验。

### css-edit-lists

```json
{"name": ".map-edit* / .string-list-edit*", "summary": "描述动态编辑器生成的行与操作结构。", "role": "js-component"}
```

确切类：map-edit、map-edit-item、map-edit-item-key、map-edit-item-value、map-edit-item-actions；string-list-edit、string-list-edit-item、string-list-edit-item-value、string-list-edit-item-actions。由 Preact 组件生成；行之间 .75rem 间距，输入和操作横向排列。不要手工增删生成行或修改 z-key。

## css-variables

### vars-form-control

```json
{"name": "控件与编辑器变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--form-control-radius` | `var(--radius)` | 圆角 | `:root` | 控件或祖先 |
| `--form-control-border` | `var(--color-border)` | 普通边框；.dark 改为 border-strong | `:root` / `.dark` | 控件或对应主题根 |
| `--form-control-focus` | `var(--color-primary-500)` | 焦点 outline | `:root` | 控件或祖先 |
| `--form-control-disabled` | `var(--color-surface)` | 禁用背景 | `:root` | 控件或祖先 |
| `--form-control-readonly` | `var(--color-surface)` | 只读背景 | `:root` | 控件或祖先 |
| `--map-edit-key-width` | `8rem` | 键宽 | `.map-edit` | 目标 `.map-edit` |
| `--map-edit-value-width` | `auto` | 值宽 | `.map-edit` | 目标 `.map-edit` |
| `--string-list-edit-item-width` | `auto` | 列表输入宽 | `.string-list-edit` | 目标 `.string-list-edit` |

组件 keyWidth/valueWidth/itemWidth props 会在根内联覆盖相应变量。

## javascript

无。

## types

### types-form-control

```json
{"name": "FormControlProps", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `className` | `ClassNameLike` | 否 | 无 | 传给目标控件 |
| `style` | `JSX.CSSProperties` | 否 | 无 | 传给目标控件，需其支持 |
| `name` | `string` | 否 | 无 | 控件名称 |
| `placeholder` | `string` | 否 | 无 | 目标占位提示 |
| `readonly` | `boolean` | 否 | `false` | 具体行为由目标决定 |
| `disabled` | `boolean` | 否 | `false` | 具体行为由目标决定 |
| `required` | `boolean` | 否 | `false` | 传给目标控件 |
| `value` | `unknown` | 否 | 无 | 传给目标；不保证目标支持受控 |
| `props` | `Record<string, unknown>` | 否 | 无 | 目标专有参数，后合并可覆盖公共参数 |
| `widget` | `typeof Component \| ComponentType \| string` | 否 | `input` | 真实 ZUI 类、Preact 组件、内置字符串或已注册组件名 |
| `onChange` | `(value: unknown) => void` | 否 | 无 | 类型声明；实际回调完全由目标控件决定，见正文 |

### types-input

```json
{"name": "InputProps", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `type` | `string` | 否 | `text` | 原生 input 类型 |
| `className` | `ClassNameLike` | 否 | 无 | 附加类 |
| `defaultValue` | `string \| number` | 否 | 无 | 非受控初始值 |
| `value` | `string \| number` | 否 | 无 | 传给 input 的受控值 |
| `disabled` | `boolean` | 否 | `false` | 原生 disabled |
| `readonly` | `boolean` | 否 | `false` | 原生 readonly |
| `placeholder` | `string` | 否 | 无 | 占位符 |
| `autofocus` | `boolean` | 否 | `false` | 原生 autofocus |
| `onChange` | `(value: string \| number, event: Event) => void` | 否 | 无 | 原生 change 时触发；type=number 使用一元 + 转换（空串为0） |

### types-textarea

```json
{"name": "TextAreaProps", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `className` | `ClassNameLike` | 否 | 无 | 附加类 |
| `defaultValue` | `string` | 否 | 无 | 初值 |
| `value` | `string` | 否 | 无 | 受控值 |
| `disabled` | `boolean` | 否 | `false` | 原生 disabled |
| `readonly` | `boolean` | 否 | `false` | 原生 readonly |
| `autoHeight` | `boolean` | 否 | `false` | 挂载时按内容调整并绑定 input/paste/change |
| `placeholder` | `string` | 否 | 无 | 占位符 |
| `rows` | `number` | 否 | 浏览器默认 | 原生 rows |
| `onChange` | `(value: string, event: Event) => void` | 否 | 无 | 原生 change 后通知 |

### types-select

```json
{"name": "SelectProps / SelectState", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `multiple` | `boolean` | 否 | `false` | 多选，值使用 string[] |
| `className` | `ClassNameLike` | 否 | 无 | 附加类 |
| `defaultValue` | `string \| string[]` | 否 | 单选空串，多选空数组 | 非受控初值 |
| `value` | `string \| string[]` | 否 | 无 | 受控值；选项匹配转字符串 |
| `disabled` | `boolean` | 否 | `false` | 原生禁用 |
| `readonly` | `boolean` | 否 | `false` | 转为 disabled 并设置 aria-readonly，原生表单不会提交 |
| `items` | `{text: string; value: string}[]` | 否 | `[]` | 完整选项列表 |
| `placeholder` | `string` | 否 | 无 | 无选中值时的空值 option 文本 |
| `onChange` | `(value: string \| string[], event: Event) => void` | 否 | 无 | 原生 change 后通知 |

`SelectState={value:string|string[]}`。

### types-map-edit

```json
{"name": "MapEditProps / MapValue / MapPair / MapValuePair", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `defaultValue` | `MapValue \| MapValuePair[]` | 否 | `[]`，保留一个空行 | 初始化值，构造时读取 |
| `value` | `MapValue \| MapValuePair[]` | 否 | 无 | 当前仅类型声明，运行时未消费；不可作为受控值 |
| `readonly` | `boolean` | 否 | `false` | 输入 readonly、增删按钮 disabled |
| `onChange` | `(value: MapValue, pairs: MapValuePair[]) => void` | 否 | 无 | 有效条目变化后下一动画帧通知 |
| `keyPlaceholder` | `string` | 否 | 无 | 键输入提示 |
| `valuePlaceholder` | `string` | 否 | 无 | 值输入提示 |
| `keyWidth` | `SizeSetting \| 'auto'` | 否 | CSS `8rem` | 键宽；数值由 toCssSize 转 px，auto 不覆盖默认变量 |
| `valueWidth` | `SizeSetting \| 'auto'` | 否 | CSS `auto` | 值宽 |
| `maxWidth` | `SizeSetting \| 'auto'` | 否 | `400` | 根最大宽度，auto 或100% 不设置 max-width |

`MapValue=Record<string,string>`；`MapPair=[gid:number,key:string,value:string]`；`MapValuePair=[key:string,value:string]`。SizeSetting 见 [core 尺寸工具](../core/ai.md#javascript-size)。

### types-string-list-edit

```json
{"name": "StringListEditProps / StringListValue", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `defaultValue` | `string[]` | 否 | `[]`，保留一个空行 | 只在构造读取 |
| `readonly` | `boolean` | 否 | `false` | 输入只读、按钮禁用 |
| `onChange` | `(value: string[]) => void` | 否 | 无 | 非空字符串列表变化后下一动画帧通知 |
| `itemWidth` | `SizeSetting \| 'auto'` | 否 | CSS `auto` | 输入宽 |
| `maxWidth` | `SizeSetting \| 'auto'` | 否 | `400` | 根最大宽度；auto/100% 不设置 |
| `placeholder` | `string` | 否 | 无 | 输入提示 |

`StringListValue=string[]`；SizeSetting 见 core。

### types-form-group

```json
{"name": "FormGroupProps", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `name` | `string` | 否 | 无 | 字段标识和默认控件 name/id |
| `label` | `CustomContentType` | 否 | 无 | 空/false/全空格字符串视为无标签 |
| `style` | `JSX.CSSProperties` | 否 | 无 | 字段根样式 |
| `hint` | `CustomContentType` | 否 | 无 | 字段提示 |
| `className` | `ClassNameLike` | 否 | 无 | 字段根类 |
| `tooltip` | `string \| TooltipOptions` | 否 | 无 | 生成 tooltip 的声明式属性；需 tooltip/toggle 环境 |
| `required` | `boolean` | 否 | `false` | 标签星号并传给控件 |
| `disabled` | `boolean` | 否 | `false` | 传给控件 |
| `labelClass` | `ClassNameLike` | 否 | 无 | 标签额外类 |
| `children` | `ComponentChildren` | 否 | 无 | 追加在控件之后 |
| `control` | `FormControlProps` | 否 | 无 | 生成的控件设置 |

这些类型由 /react 导出的 components 文件提供；主入口不导出这些类型，src/types/index.ts 为空。CustomContentType、ClassNameLike 见 [core](../core/ai.md#types-content)；TooltipOptions 见 [tooltip](../tooltip/ai.md)。

## recipes

统一表单渲染可用 FormGroup+FormControl；对于 checkbox/switch 的值回调，使用 props.onChange 接收原签名再转换为业务值。多键值编辑器初始化使用 defaultValue，不将 MapEdit.value 当受控属性。

## constraints

Input/TextArea 类型没有声明全部原生 HTML 属性；扩展属性可通过 FormControl.props 传递，但语义仍取决于目标。readonly Select 使用 disabled，原生 FormData 会跳过。MapEdit/StringListEdit 的 gid 是行标识，不是下标；调用者不可传已移除 gid。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/form-control/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/form-control/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/form-control/docs/lib/forms/index.md>)
- [源码 src/main-react.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/form-control/src/main-react.ts>)
- [源码 src/types/index.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/form-control/src/types/index.ts>)
- [源码 src/style/index.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/form-control/src/style/index.ts>)
- [源码 src/style/vars.css](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/form-control/src/style/vars.css>)
