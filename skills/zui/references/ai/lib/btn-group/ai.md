# 按钮组

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；在线源码引用随 main 分支更新，跨库使用参考可离线读取。

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
    "BtnGroup"
  ]
}
```

## overview

CSS 可连接已有按钮；表单单选可组合原生 radio 与 label，也可用组件的 `radio: true` 生成。JS/Preact BtnGroup 基于 CommonList 渲染项目并共享按钮属性，可接入 FormControl/FormBuilder。分段单选使用独立的 [Segmented](../segmented/ai.md)。普通工具条可选择 toolbar；按钮模式的组内菜单项需要额外 dropdown 接入。

## setup

workspace：主入口 `@zui/btn-group` 提供下述原生类和类型，`@zui/btn-group/react` 提供 Preact BtnGroup（历史路径名不代表 React 支持）。JSX 需项目 Preact/TypeScript 配置；另加载 `@zui/base`、`@zui/button` 和 `@zui/btn-group` 的样式，按钮 hover/pressed/键盘焦点状态还需 `@zui/utilities`。browser：使用包含这些库的 `zui` JS/CSS。npm：以目标发布包 `zui` / `zui/css` 的真实导出为准，不承诺独立子路径。本库 style 导入 btn-group.css 与 radio.css。下拉项目还需加载与注册 dropdown，不能只提供 items 就假定已接入。

## vanilla

### vanilla-btn-group

```json
{"name": "BtnGroup", "summary": "以原生构造器创建和更新组件。"}
```

`new BtnGroup(selector, options?)`；选项见下文类型条目。构造、初始化异步时序、实例关联、`render(options?)`、`destroy()`、事件与 `$` 视图 ref 继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；`$` 首次渲染前可能为 null。选项可结合 [ComponentOptions](../core/ai.md#types-component-options)。调用 destroy() 卸载 Preact 子树；宿主由调用者按需移除。

主入口登记 Preact BtnGroup；原生类源码未主动 register。选项同 Preact，额外实例操作经 `$` 访问 CommonList。

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

### preact-radio-form

```json
{"name": "BtnGroup radio", "summary": "生成原生表单单选，并接入 FormControl 和 FormBuilder。"}
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
import {BtnGroup} from '@zui/btn-group/react';
const host = document.createElement('div');
document.body.append(host);
const items = [{text: '列表', value: 'list'}, {text: '卡片', value: 'card'}];
function show(view: string) {
    render(<form onSubmit={event => {
        event.preventDefault();
        console.log(Object.fromEntries(new FormData(event.currentTarget)));
    }}>
        <BtnGroup radio name="layout" defaultValue="list" items={items} attrs={{'aria-label': '布局'}} />
        <BtnGroup radio name="view" value={view} items={items} attrs={{'aria-label': '视图'}} onChange={show} />
        <button type="submit">读取表单</button>
        <button type="reset">重置非受控选项</button>
    </form>, host);
}
show('card');
// 离开页面时：render(null, host); host.remove();
```

workspace（沿用上例的基础样式；主入口负责把组件注册给 FormControl/FormBuilder）：

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
        view: {type: 'string', title: '视图', required: true, widget: 'BtnGroup', props: {radio: true, items, attrs: {'aria-label': '视图'}}},
    }}} defaultData={{view: 'card'}} onDataChange={data => console.log(data)} />
</div>, host);
// 离开页面时：render(null, host); host.remove();
```

现有 vanilla `new BtnGroup(host, {radio: true, name, items, defaultValue})` 使用相同选项；可用 `render({value})` 回填受控值。

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

## css-variables

沿用 [按钮变量](../button/ai.md#css-button-variables)。

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

只需静态连接按钮时使用 `.btn-group`，表单单选使用 [组件单选模式](#preact-radio-form)。分段选择使用独立的 [Segmented](../segmented/ai.md)。有项目权限、过滤、动态点击信息时选择 BtnGroup，并使用 CommonList 的 getItem/onClickItem。

## constraints

背景、边框和尺寸复用 button 与主题。按钮模式的 active 状态与 aria-pressed 由应用维护；radio 模式保留原生键盘与表单行为，受控值由调用方维护。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/main/lib/btn-group/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/main/lib/btn-group/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/main/lib/btn-group/docs/lib/components/index.md>)
- [源码 src/main-react.ts](<https://github.com/easysoft/zui/blob/main/lib/btn-group/src/main-react.ts>)
- [源码 src/types/index.ts](<https://github.com/easysoft/zui/blob/main/lib/btn-group/src/types/index.ts>)
- [源码 src/style/index.ts](<https://github.com/easysoft/zui/blob/main/lib/btn-group/src/style/index.ts>)
