# 按钮组

## meta

```json
{
  "schemaVersion": 1,
  "library": "btn-group",
  "summary": "提供相连和分段两种按钮组外观，支持数据驱动渲染、原生单选与自定义项目。",
  "keywords": [
    "按钮组",
    "操作组",
    "分段按钮",
    "原生单选",
    "radio",
    "BtnGroup",
    "BtnSegmented"
  ]
}
```

## overview

CSS 可连接已有按钮或显示分段外观；表单单选可组合原生 radio 与 label，也可用组件的 `radio: true` 生成。JS/Preact BtnGroup 基于 CommonList 渲染项目并共享按钮属性，Preact BtnSegmented 复用相同项目管线并使用分段外观。两者均可接入 FormControl/FormBuilder。普通工具条可选择 toolbar；按钮模式的组内菜单项需要额外 dropdown 接入。

## setup

workspace：主入口 `@zui/btn-group` 提供下述原生类和类型，`@zui/btn-group/react` 提供 Preact BtnGroup 和 BtnSegmented（历史路径名不代表 React 支持）。JSX 需项目 Preact/TypeScript 配置；另加载 `@zui/base`、`@zui/button` 和 `@zui/btn-group` 的样式，按钮 hover/pressed/键盘焦点状态还需 `@zui/utilities`。browser：使用包含这些库的 `zui` JS/CSS。npm：以目标发布包 `zui` / `zui/css` 的真实导出为准，不承诺独立子路径。本库 style 导入 btn-group.css、btn-segmented.css 与 radio.css。下拉项目还需加载与注册 dropdown，不能只提供 items 就假定已接入。

## vanilla

### vanilla-btn-group

```json
{"name": "BtnGroup", "summary": "以原生构造器创建和更新组件。"}
```

`new BtnGroup(selector, options?)`；选项见下文类型条目。构造、初始化异步时序、实例关联、`render(options?)`、`destroy()`、事件与 `$` 视图 ref 继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；`$` 首次渲染前可能为 null。选项可结合 [ComponentOptions](../core/ai.md#types-component-options)。调用 destroy() 卸载 Preact 子树；宿主由调用者按需移除。

主入口登记 Preact BtnGroup 和 BtnSegmented；原生类源码未主动 register。选项同 Preact，额外实例操作经 `$` 访问 CommonList。BtnSegmented 通过 Preact 入口使用，没有对应的原生构造器。

workspace（包含所需 CSS）：

```ts
import '@zui/base';
import '@zui/button';
import '@zui/utilities';
import {BtnGroup} from '@zui/btn-group';
const host = document.createElement('div');
document.body.append(host);
const view = new BtnGroup(host, {items: [{text: '保存'}, {text: '取消'}]});
// 离开页面时：view.destroy(); host.remove();
```

## preact

### preact-btn-group

```json
{"name": "BtnGroup", "summary": "使用 CommonList 项目管线生成相连按钮。"}
```

默认根 tag 为 nav，NAME=btn-group；`radio: true` 时默认根改为 `div`，角色为 `radiogroup`，`name` 作为字段名，根样式保持 `.btn-group`。项目未给 type 时，包含 dropdown/items 的项目标为 dropdown，其余为 item；默认项目组件是 Button。共享 btnProps、btnType、size 合并到 item/dropdown，具体项后合并。单选模式见 [表单单选接入](#preact-radio-form)。完整通用列表参数与行为见 [CommonList](../common-list/ai.md#types-common-list-props)。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import '@zui/button';
import '@zui/btn-group';
import '@zui/utilities';
import {render} from 'preact';
import {BtnGroup} from '@zui/btn-group/react';
const host = document.createElement('div');
document.body.append(host);
render(<BtnGroup items={[{text: '保存'}, {text: '取消'}]} onClickItem={({item}: {item: {text?: unknown}}) => console.log(item.text)} />, host);
// 离开页面时：render(null, host); host.remove();
```

### preact-btn-segmented

```json
{"name": "BtnSegmented", "summary": "使用 BtnGroup 的项目管线渲染分段按钮。"}
```

继承 [BtnGroup](#preact-btn-group)，Props 为 [BtnGroupOptions](#types-btn-group)，默认根 tag 为 nav，NAME=btn-segmented。根只生成 `.btn-segmented`，项目仍支持共享按钮属性、`onClickItem`、自定义渲染与 CommonList ref 方法；`children` 按 CommonList/HElement 的通用规则处理。用于视图切换等操作组时可设置 `tag="div"`，并通过 `attrs` 提供组名与语义。

普通按钮模式的选中状态由调用方控制：同时设置项目的 `active` 和 `attrs['aria-pressed']`，在 `onClickItem` 中更新数据并重新渲染。该模式沿用原生按钮的 Tab、Enter、Space 操作。设置 `radio: true` 后，使用下面的单选值接口与原生 radio 键盘行为。

workspace（JSX，已配置 Preact；点击后同步更新选中外观与辅助技术状态）：

```tsx
import '@zui/base';
import '@zui/button';
import '@zui/btn-group';
import '@zui/utilities';
import {render} from 'preact';
import {BtnSegmented} from '@zui/btn-group/react';
const host = document.createElement('div');
document.body.append(host);
function showView(selected: number) {
    render(<BtnSegmented
        tag="div"
        attrs={{role: 'group', 'aria-label': '视图'}}
        items={['列表', '卡片', '看板'].map((text, index) => ({
            text,
            active: index === selected,
            attrs: {'aria-pressed': index === selected},
        }))}
        onClickItem={({index}) => showView(index)}
    />, host);
}
showView(1);
// 离开页面时：render(null, host); host.remove();
```

### preact-radio-form

```json
{"name": "BtnGroup / BtnSegmented radio", "summary": "生成原生表单单选，并接入 FormControl 和 FormBuilder。"}
```

`radio: true` 将普通按钮项目渲染为相邻的 `input[type="radio"] + label.btn`，保留文字、图标、尺寸与按钮外观。单选数据由 `value`（受控）或 `defaultValue`（非受控）决定，未设置时不选中。选项值取 `String(item.value ?? item.key)`，其中 key 由 CommonList 的 `itemKey/id/key/索引` 规则生成；需要重排的选项应显式给出稳定的 value 或 id。

`onChange(value: string, event: Event)` 仅在用户改变选项时触发一次，`this` 为组件实例；`onClickItem` 继续接收项目点击信息。受控模式中父级不更新 value 会恢复原选项。原生 `form.reset()` 将非受控组选项恢复到 defaultValue，受控组保持当前 value，均不触发 onChange。原生 form 的 change 事件仍正常冒泡。

表单中显式设置 `name`，同一表单中的独立组使用不同 name；省略 name 时生成组件实例独有的组名，该名字也会进入原生表单数据。radio 模式的根类固定为组件 NAME，额外类用 `className`；`id` 交给首个 radio，便于外部字段 label 关联。通过 `attrs['aria-label']` 或 `attrs['aria-labelledby']` 为整组提供可访问名称，单项名称来自其 label。

`required` 使用原生约束。组级 disabled、readonly、单项 disabled/loading 会禁用相应输入；readonly 沿用 Select 的禁用交互约定。外层 fieldset 禁用同样生效。禁用输入不参与原生提交，FormBuilder 的字段数据仍保留。项目的 `active`/`aria-pressed` 不负责单选状态；radio 模式用于选项，项目的链接、命令和下拉动作不会执行。`getItems/getItem/beforeRenderItem` 仍可处理项目，`itemRender` 完全替换结构时由调用方负责表单语义。

workspace（已配置 Preact/TSX，以下为完整的非受控和受控表单示例）：

```tsx
import {render} from 'preact';
import '@zui/base';
import '@zui/button';
import '@zui/utilities';
import '@zui/btn-group';
import {BtnGroup, BtnSegmented} from '@zui/btn-group/react';
const host = document.createElement('div');
document.body.append(host);
const items = [{text: '列表', value: 'list'}, {text: '卡片', value: 'card'}];
function show(view: string) {
    render(<form onSubmit={event => {
        event.preventDefault();
        console.log(Object.fromEntries(new FormData(event.currentTarget)));
    }}>
        <BtnGroup radio name="layout" defaultValue="list" items={items} attrs={{'aria-label': '布局'}} />
        <BtnSegmented radio name="view" value={view} items={items} attrs={{'aria-label': '视图'}} onChange={show} />
        <button type="submit">读取表单</button>
        <button type="reset">重置非受控选项</button>
    </form>, host);
}
show('card');
// 离开页面时：render(null, host); host.remove();
```

workspace（沿用上例的基础样式；主入口负责把两种组件注册给 FormControl/FormBuilder）：

```tsx
import {render} from 'preact';
import '@zui/btn-group';
import '@zui/form-builder';
import {FormControl} from '@zui/form-control/react';
import {FormBuilder} from '@zui/form-builder/react';
const host = document.createElement('div');
document.body.append(host);
const items = [{text: '列表', value: 'list'}, {text: '卡片', value: 'card'}];
render(<div>
    <FormControl widget="BtnGroup" name="layout" props={{radio: true, items, defaultValue: 'list', attrs: {'aria-label': '布局'}}} />
    <FormBuilder schema={{type: 'object', properties: {
        view: {type: 'string', title: '视图', required: true, widget: 'BtnSegmented', props: {radio: true, items, attrs: {'aria-label': '视图'}}},
    }}} defaultData={{view: 'card'}} onDataChange={data => console.log(data)} />
</div>, host);
// 离开页面时：render(null, host); host.remove();
```

现有 vanilla `new BtnGroup(host, {radio: true, name, items, defaultValue})` 使用相同选项；可用 `render({value})` 回填受控值。BtnSegmented 仍只提供现有 Preact 入口和组件注册名。

## web-components

无。

## css

### css-btn-group

```json
{"name": ".btn-group", "summary": "连接直接子按钮的边缘。", "role": "component"}
```

根 flex，间隔 1px；直接子 `.btn` 去掉内侧圆角并增加接缝边框。active 按钮或选中 radio 的 label 的 z-index=1，hover/focus 为2，disabled 为0。支持相邻的 `input[type="radio"] + label.btn`，首项 input 不影响第一个 label 的左圆角；输入视觉隐藏，选中、焦点和禁用状态映射到 label。仅作用于直接子 .btn，额外包装层会改变效果。

browser（已加载本库 CSS）：

```html
<nav class="btn-group" aria-label="编辑操作"><button class="btn" type="button">保存</button><button class="btn" type="button">取消</button></nav>
```

### css-btn-segmented

```json
{"name": ".btn-segmented", "summary": "以单行、独立圆角按钮呈现分段选择外观。", "role": "component"}
```

根为 inline-flex，按内容收缩且不换行，间距 0.25rem、内边距 0.125rem；直接子元素为 `.btn`。根使用主题 gray-100 背景和 border 外圈，`.active` 项使用 canvas 背景、fore 文字、按钮外圈与阴影。选中项仅取消静止时的状态遮罩，保留 hover、按下和键盘焦点反馈；配合 `size-xs`、`size-sm`、`size-md`、`size-lg`、`size-xl` 调整组内按钮尺寸。

browser（已加载 base、button、btn-group、utilities 的 CSS）：

```html
<div class="btn-segmented" role="group" aria-label="视图">
  <button class="btn" type="button" aria-pressed="false">列表</button>
  <button class="btn active" type="button" aria-pressed="true">卡片</button>
  <button class="btn" type="button" aria-pressed="false">看板</button>
</div>
```

CSS 只呈现状态；切换时由应用更新 `active` 与 `aria-pressed`。不要同时添加 `.btn-group`，它会去掉按钮内侧圆角并添加接缝边框。

### css-btn-segmented-radio

```json
{"name": ".btn-segmented > input[type=radio] + label.btn", "summary": "使用原生 radio 提供分段单选、键盘操作和表单行为。", "role": "component"}
```

这是纯 HTML/CSS 用法，复用 [分段容器](#css-btn-segmented) 的布局；组件设置 `radio: true` 后生成相同结构。每个 `input[type="radio"]` 和对应的 `label.btn` 必须是容器的相邻直接子元素，输入框紧接在标签之前。`id` 在页面中唯一，`label.for` 与之匹配；同组选项共用 `name`，同一表单中的独立组选用不同的 `name`。

输入框视觉隐藏但保留原生语义与交互。`checked` 决定选中标签的 canvas 背景、外圈和阴影；Tab 进入/离开组，方向键在同组可用选项间移动并切换选中项。输入框的焦点显示为相邻标签的 outline，`disabled`（含祖先 `fieldset[disabled]`）显示为标签的灰度、禁用透明度和禁止光标，并关闭 hover/按下遮罩。

选中语义由原生 `checked` 提供；该模式不需要按钮模式的 `active` 或 `aria-pressed`。表单读取选中且未禁用项的 `name`/`value`；`form.reset()` 恢复初始 `checked` 并同步选中外观。禁用项由浏览器跳过键盘选择且不进入表单数据。

browser（已加载 base、button、btn-group、utilities 的 CSS；不需要组件初始化）：

```html
<form id="viewForm">
  <div class="btn-segmented" role="group" aria-label="选择视图">
    <input type="radio" id="viewList" name="view" value="list">
    <label class="btn" for="viewList">列表</label>
    <input type="radio" id="viewCard" name="view" value="card" checked>
    <label class="btn" for="viewCard">卡片</label>
    <input type="radio" id="viewBoard" name="view" value="board" disabled>
    <label class="btn" for="viewBoard">看板</label>
  </div>
  <button class="btn" type="reset">恢复默认</button>
</form>
```

`new FormData(document.querySelector('#viewForm')).get('view')` 初始为 `'card'`；点击「列表」后为 `'list'`，重置后恢复 `'card'`。

## css-variables

### css-variables-btn-segmented

```json
{"name": "--btn-radius", "summary": "分段容器及组内按钮共享圆角。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--btn-radius` | `var(--radius-md)` | 容器和直接子按钮的圆角，CSS 长度 | `.btn-segmented` | `.btn-segmented` 根节点 |

复用 button 的 `--btn-height`、`--btn-border-color` 等变量及主题颜色；分段根上的圆角声明会覆盖从祖先继承的 `--btn-radius`。

## javascript

无。

## types

### types-btn-group

```json
{"name": "BtnGroupOptions / BtnGroupItem", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | 否 | 无 | 传给按钮的统一尺寸 |
| `type` | `string` | 否 | 无 | 继承列表的额外选项；本实现无单独消费逻辑 |
| `btnType` | `string` | 否 | 无 | 传给按钮的统一外观类型 |
| `btnProps` | `Partial<ButtonProps>` | 否 | 无 | 按钮共享属性；具体项目属性随后合并并可覆盖 |
| `radio` | `boolean` | 否 | `false` | 启用原生表单单选模式 |
| `name` | `string` | 否 | radio 模式生成唯一组名；按钮模式使用 NAME | radio 字段名；按钮模式仍是列表类名 |
| `id` | `string` | 否 | 按实例和项目 key 生成 | radio 模式首个输入的 ID，供外部 label 关联 |
| `value` | `string` | 否 | 无 | radio 受控值，未传入时使用原生非受控状态 |
| `defaultValue` | `string` | 否 | 无 | radio 非受控初值和重置值 |
| `disabled` / `readonly` | `boolean` | 否 | `false` | radio 模式禁用全组输入；禁用项不参与原生提交 |
| `required` | `boolean` | 否 | `false` | radio 模式原生必选约束 |
| `onChange` | `(value: string, event: Event) => void` | 否 | 无 | radio 选项变更回调，重置不触发 |

`BtnGroupOptions<T extends Item = BtnGroupItem, OnChange = (value: string, event: Event) => void>` 继承 CommonListProps<T>（完整参数见 [CommonList](../common-list/ai.md#types-common-list-props)，包括 items/itemProps/itemPropsMap/getItem/getItems/itemRender/beforeRenderItem/onClickItem/relativeTarget，以及 HElementProps）。第二泛型供派生类保留自己的 onChange 契约，按钮组使用默认的字符串值回调。`BtnGroupItem = (ButtonProps | DropdownButtonOptions) & Item & {value?: string | number}`；value 仅在 radio 模式作为选项值并转换为字符串，缺省使用项目 key。按钮参数见 [Button](../button/ai.md#types-button-props)，下拉参数见 [Dropdown](../dropdown/ai.md#types-dropdown-button-options)。

## recipes

只需静态连接按钮时使用 `.btn-group`，分段外观使用 `.btn-segmented`；表单单选使用 [radio 与 label](#css-btn-segmented-radio) 或 [组件单选模式](#preact-radio-form)。有项目权限、过滤、动态点击信息时选择 BtnGroup 或 Preact BtnSegmented，并使用 CommonList 的 getItem/onClickItem。

## constraints

背景、边框和尺寸复用 button 与主题，分段根将 `--btn-radius` 默认设为 `var(--radius-md)`。按钮模式的 active 状态与 aria-pressed 由应用维护；radio 模式保留原生键盘与表单行为，受控值由调用方维护。分段布局保持单行，应为按钮内容预留足够宽度。

## references

- [包元数据](package.json)
- [公开入口](src/main.ts)
- [正式文档](docs/lib/components/index.md)
- [源码 src/main-react.ts](src/main-react.ts)
- [源码 src/types/index.ts](src/types/index.ts)
- [源码 src/style/index.ts](src/style/index.ts)
- [源码 src/component/btn-segmented.tsx](src/component/btn-segmented.tsx)
- [源码 src/style/btn-segmented.css](src/style/btn-segmented.css)
