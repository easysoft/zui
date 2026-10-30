# 选择和开关

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "checkbox",
  "summary": "提供原生选择框、主题选择框、开关和可控选项列表。",
  "keywords": [
    "复选框",
    "单选",
    "开关",
    "Checkbox",
    "CheckList"
  ]
}
```

## overview

可只用 CSS 包装真实 input，也可使用公开的原生 Checkbox 或 Preact Checkbox/Radio/Switch/CheckList。适合布尔状态、互斥选择和短选项列表。

## setup

workspace：主入口 `@zui/checkbox` 提供下述原生类和类型，`@zui/checkbox/react` 提供 Preact 组件（历史路径名不代表 React 支持）。JSX 需项目 Preact/TypeScript 配置；另加载 `@zui/base` 和 `@zui/checkbox` 的样式。browser：使用包含该库的 `zui` JS/CSS。npm：以目标发布包 `zui` / `zui/css` 的真实导出为准，不承诺独立子路径。主入口实际只从 vanilla/index.ts 导出 Checkbox；Radio、Switch、CheckList 的原生实现文件未接入公开 barrel，不应导入内部文件或使用 new zui.Radio 等推断 API。

## vanilla

### vanilla-checkbox

```json
{"name": "Checkbox", "summary": "以原生构造器创建和更新组件。"}
```

`new Checkbox(selector, options?)`；选项见下文类型条目。构造、初始化异步时序、实例关联、`render(options?)`、`destroy()`、事件与 `$` 视图 ref 继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；`$` 首次渲染前可能为 null。选项可结合 [ComponentOptions](../core/ai.md#types-component-options)。调用 destroy() 卸载 Preact 子树；宿主由调用者按需移除。

导入主入口会执行 Checkbox.register()；可用 `type: 'radio'` 或 `type: 'switch'` 复用同一个原生构造器。无新增实例方法；视图 `$` 可读取 checked/controlled。

workspace（包含所需 CSS）：

```ts
import '@zui/base';
import {Checkbox} from '@zui/checkbox';
const host = document.createElement('div');
document.body.append(host);
const view = new Checkbox(host, {label: '接收通知', defaultChecked: true});
// 离开页面时：view.destroy(); host.remove();
```

## preact

### preact-checkbox

```json
{"name": "Checkbox / Radio / Switch", "summary": "渲染受控或非受控的单项选择控件。"}
```

Props 见 [CheckboxProps](#types-checkbox)。Radio/Switch 继承 Checkbox，默认 type 分别 radio/switch，允许显式 type 覆盖。`ref` 为组件实例，可读 `checked`、`controlled`；没有独立 setChecked 方法，使用受控 props 或重新渲染。共同继承 [HElementProps](../core/ai.md#types-helement-props)。

受控模式中浏览器改变 checked 后，组件会恢复到 props；onChange 应由调用者决定是否更新。单选组的受控恢复按相同 name、form 和根节点同步。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import '@zui/checkbox';
import {render} from 'preact';
import {Checkbox} from '@zui/checkbox/react';
const host = document.createElement('div');
document.body.append(host);
render(<Checkbox label="接收通知" defaultChecked onChange={(event, checked) => console.log(checked, event.type)} />, host);
// 离开页面时：render(null, host); host.remove();
```

### preact-check-list

```json
{"name": "CheckList", "summary": "展示本地或异步加载的单选/多选列表。"}
```

Props 见 [CheckListProps](#types-check-list)。ref 可读 `isRadio`、`controlled`、`checked`，`load(): Promise<void>` 重载 items。异步结果仅在 items 引用仍相同时落地；没有公开取消 API。缺少 items 时挂载后使用空数组。items 更新调用 load；defaultChecked 不是持续受控值。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import '@zui/checkbox';
import {render} from 'preact';
import {CheckList} from '@zui/checkbox/react';
const host = document.createElement('div');
document.body.append(host);
render(<CheckList name="channels" items={[{value: 'email', text: '邮件'}, {value: 'sms', text: '短信'}]} defaultChecked={['email']} onChange={value => console.log(value)} />, host);
// 离开页面时：render(null, host); host.remove();
```

## web-components

无。

## css

### css-checkbox-native

```json
{"name": ".checkbox / .radio", "summary": "给真实原生输入与标签提供布局。", "role": "component"}
```

可把类加在 label，直接包含匹配 type 的 input；使用浏览器原生外观，默认最小高 20px。

browser（已加载本库 CSS）：

```html
<label class="checkbox"><input type="checkbox" name="notify">接收通知</label>
<label class="radio"><input type="radio" name="scope" value="team">团队</label>
```

### css-checkbox-primary

```json
{"name": ".checkbox-primary / .radio-primary / .switch", "summary": "使用自定义主题图形或开关外观。", "role": "component"}
```

必须是容器直接包含 `input + label`，label.for 与 input.id 一致；checked/disabled/focus/indeterminate 从原生 input 状态驱动。伪元素位于 label 上，不能改成 input 包在 label 内的另一种结构。switch 是 checkbox 类型 input。

browser（已加载本库 CSS）：

```html
<div class="switch"><input id="notify-switch" type="checkbox"><label for="notify-switch">通知</label></div>
```

### css-check-list

```json
{"name": ".check-list / .check-list-inline", "summary": "纵向或水平排列选择框。", "role": "component"}
```

check-list 为列向 flex、间距 .5rem；check-list-inline 水平换行，列间距 1rem、行间距 .5rem。内部放上述选择容器。Preact CheckList 也生成这些类。

### css-checkbox-state

```json
{"name": ".checked / .indeterminate / .focus / .disabled", "summary": "配合主题选择框呈现状态。", "role": "helper"}
```

checkbox-primary/radio-primary 的同节点 checked/focus/disabled 提供视觉备选；checkbox-primary.indeterminate 提供半选视觉。switch 只对 focus/disabled 定义类状态，开关选中位置仍依据 input:checked。类不设置真实 input 状态；JS 渲染时由组件维护，不应绕开 props 手改。

## css-variables

### vars-checkbox

```json
{"name": "选择框变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--checkbox-size` | `12px` | 主题 checkbox/radio 图形边长 | `:root` | 控件或列表根 |
| `--checkbox-color` | `var(--color-primary-500)` | 选中/聚焦主题色 | `:root` | 控件或列表根 |
| `--checkbox-radio-size` | `calc(var(--checkbox-size) * 2 / 3)` | radio 内圆派生尺寸 | `.radio-primary > label::after` | 优先改 checkbox-size |

## javascript

无。

## types

### types-checkbox

```json
{"name": "CheckboxProps / RadioProps / SwitchProps", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `type` | `'checkbox' \| 'radio' \| 'switch'` | 否 | `checkbox`（Radio/Switch 变体另见正文） | 选择形态 |
| `id` | `string` | 否 | 自动 `_checkbox-N` | 同时写入 input.id 与 label.for |
| `label` | `CustomContentType` | 否 | 无 | 标签内容，使用 core CustomContent |
| `defaultChecked` | `boolean \| 'indeterminate'` | 否 | `false` | 非受控初值，仅初始化读取 |
| `checked` | `boolean \| 'indeterminate'` | 否 | 无 | 提供后由调用者受控；优先于 defaultChecked |
| `disabled` | `boolean` | 否 | `false` | 禁用真实 input 并标记容器 |
| `name` | `string \| false` | 否 | 无 | input.name；false 时不渲染 input，仅视觉标签 |
| `value` | `string` | 否 | 无 | input 提交值 |
| `onChange` | `(event: Event, checked: boolean \| 'indeterminate') => void` | 否 | 无 | 原生 change 后通知，用户操作实际给出 boolean；this 为视图 |

上述类型从主入口和 /react 导出；RadioProps、SwitchProps 是 CheckboxProps 的别名。CheckedType=`boolean | 'indeterminate'`，CheckboxState=`{checked: CheckedType}`。CustomContentType 与 HElementProps 见 [core 类型](../core/ai.md#types-helement-props)。

### types-check-list

```json
{"name": "CheckListProps / CheckListItem / CheckListState", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `type` | `'checkbox' \| 'radio' \| 'switch'` | 否 | `checkbox` | radio 为单选，其余多选 |
| `id` | `string` | 否 | 自动 `_check-list-N` | 各输入 id 前缀 |
| `defaultChecked` | `string[] \| string` | 否 | 多选 `[]`；radio `''` | 非受控初值 |
| `checked` | `string[] \| string` | 否 | 无 | 受控值；radio 用 string，其余用 string[] |
| `inline` | `boolean` | 否 | `false` | 水平换行或竖向排列 |
| `disabled` | `boolean` | 否 | `false` | 传给全部项 |
| `name` | `string \| false` | 否 | 无 | 传给全部项 input |
| `items` | `CheckListItem[] \| FetcherSetting<CheckListItem[]>` | 否 | 无 | 数组或 fetchData 设置；异步加载前显示 loading 类 |
| `onChange` | `(checked: string[] \| string, event: Event) => void` | 否 | 无 | 第一个参数为值，与 Checkbox 顺序不同；停止原生 change 冒泡 |

继承 HElementProps。`CheckListItem = {value: string; label?: CustomContentType; text?: CustomContentType; className?: ClassNameLike}`，label 优先于 text；value 须唯一且适合生成 DOM id。`CheckListState = {checked: string[] | string; items?: CheckListItem[]}`。FetcherSetting 见 [core AJAX 类型](../core/ai.md#types-ajax)。

## recipes

半选通过 `checked: 'indeterminate'` 或真实 input.indeterminate 属性设置；HTML indeterminate 属性不能设置该 DOM property。单选列表给同组输入统一 name，受控应用始终同步全部项的 checked。

## constraints

`name:false` 会移除真实 input，因而没有原生输入提交/键盘语义。CheckList 不支持任意对象值，只使用字符串。标签内容通过 CustomContent 渲染，不可信 HTML 仍由调用者约束。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/checkbox/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/checkbox/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/checkbox/docs/lib/forms/index.md>)
- [源码 src/main-react.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/checkbox/src/main-react.ts>)
- [源码 src/types/index.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/checkbox/src/types/index.ts>)
- [源码 src/style/index.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/checkbox/src/style/index.ts>)
- [源码 src/style/vars.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/checkbox/src/style/vars.css>)
