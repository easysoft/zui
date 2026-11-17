# 分段选择器

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "segmented",
  "summary": "提供原生 radio 语义的分段单选，支持受控值、表单、布局、尺寸、图标、自定义内容和可选切换动画。",
  "keywords": ["分段选择器", "单选", "表单", "Segmented", "radio"]
}
```

## overview

用于少量选项的单选或视图切换。选项始终可见；普通相连操作按钮使用 [BtnGroup](../btn-group/ai.md)，大量选项使用 [Picker](../picker/ai.md)。选项文字与无障碍名称由调用方提供，没有内置语言文案。

## setup

workspace：`@zui/segmented` 导出 vanilla `Segmented` 和类型，并登记 Preact 组件名 `Segmented`、vanilla 自动创建名 `Segmented`。`@zui/segmented/react` 导出 Preact `Segmented` 与相同类型；历史 `/react` 路径使用 Preact。两个入口均加载样式，另需 `@zui/base` 提供主题。图标由 core 的 Icon 渲染；CSS 图标额外加载 `@zui/css-icons`，字体图标加载对应字体资源。

browser：加载包含 segmented 的 ZUI JS/CSS 后使用 `zui.Segmented` 或 `zui-create="Segmented"`。npm：以目标发布包 `zui` 与 `zui/css` 的真实导出为准，工作区入口不是独立 npm 发布承诺。

## vanilla

### vanilla-segmented

```json
{"name": "Segmented", "summary": "创建、更新和销毁分段选择器，并读取当前值。"}
```

`new Segmented(element, options?)` 在空宿主内生成控件，默认不替换宿主。选项见 [SegmentedOptions](#types-segmented-options)。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react) 的初始化时序、`render(options?, reset?)`、`destroy()`、静态 `get/ensure` 和 `$` 视图 ref；首次渲染前 `$` 为 null。实例 `value: string | number | undefined` 为只读当前值，首次渲染前为 undefined。`render({value})` 更新受控值，`render({items})` 更新选项；`destroy()` 卸载子树，宿主仍由调用方所有。

选择变更调用 `onChange(value, event)`，参数保留原始字符串/数字类型，`this` 指向 Preact 视图。点击已选项、表单重置及程序更新不触发回调。使用 options 回调接收选择变化，不额外派发组件实例 change 事件。

设置 `animation: true` 开启选中背景的 200ms 滑动及宽高过渡，默认关闭；可通过 `render({animation: false})` 关闭。首次显示和布局变化直接定位，支持横向、纵向、等宽、RTL 及不同尺寸项目。受控值和表单重置的背景始终跟随实际选择。动画启用时观察项目尺寸并监听关联表单的 reset；关闭或销毁时释放这些资源。

workspace：

```ts
import '@zui/base';
import {Segmented} from '@zui/segmented';
const host = document.createElement('div');
document.body.append(host);
const view = new Segmented(host, {
    items: [{value: 'list', text: '列表'}, {value: 'card', text: '卡片'}],
    defaultValue: 'list',
    animation: true,
    attrs: {'aria-label': '视图'},
    onChange: value => console.log(value),
});
// 页面离开时：view.destroy(); host.remove();
```

## preact

### preact-segmented

```json
{"name": "Segmented", "summary": "使用 items 与受控或非受控值渲染分段单选。"}
```

Props 为 [SegmentedOptions](#types-segmented-options)。`children` 不参与选项渲染；项目内容用 `text`。类组件 ref 提供只读 `value`、`controlled` 和 [HElement](../core/ai.md#preact-helement) 基础能力。

`animation` 与 vanilla 使用相同的开关和动画行为，例如 `<Segmented items={['日', '工作周', '整个月']} animation />`。

未传 `value` 时，原生 radio 保存选择。首次使用 `defaultValue`，否则选中第一个未禁用项目。普通重渲染及排序保持当前选择；选中项移除后回退到第一个可用项，空列表没有选择。默认值在首次有值后固定；原生 `form.reset()` 恢复默认项，默认项已移除时恢复当前第一个可用项。取消 reset 事件会保留选择。

传入 `value`（包括空字符串和数字 0）为受控模式，选择只提出 `onChange` 通知；调用方未更新 `value` 时恢复原值。当前值不在 items 中时没有选中项，不自动回退。受控表单重置保留当前 `value`。

workspace（需要解析 `@zui/*`、编译 TSX 并配置 Preact）：

```tsx
import '@zui/base';
import {render} from 'preact';
import {Segmented} from '@zui/segmented/react';
import type {SegmentedValue} from '@zui/segmented';
const host = document.createElement('div');
document.body.append(host);
function show(value: SegmentedValue) {
    render(<Segmented items={['日', '周', '月']} value={value} onChange={show} attrs={{'aria-label': '周期'}} />, host);
}
show('周');
// 页面离开时：render(null, host); host.remove();
```

## web-components

无。

## css

### css-segmented

```json
{"name": ".segmented / .segmented-item / .segmented-input / .segmented-label / .segmented-text / .segmented-icon", "summary": "通过原生 radio 和标签呈现分段选择，支持纯 HTML。", "role": "component"}
```

根为 inline-flex，项目为 label，视觉隐藏的 radio 与 `.segmented-label` 相邻。文本放在 `.segmented-text` 中，图标可放在 `.segmented-icon` 中。选中、焦点、禁用均由输入的伪类反映到标签；不设置 `active` 或 `aria-pressed`。鼠标点击不显示焦点框，Tab 等键盘焦点通过 `:focus-visible` 显示；按下时沿用按钮的 `--state-pressed-*` / `--state-ring-color` 反馈，禁用项无按压反馈。无默认多选模式。

切换动画由 JS 组件的 `animation` 选项开启；内部 `.segmented-animated`、`.segmented-thumb` 及滑块状态由组件维护，不作为纯 HTML 的配置方式。

browser（加载 base 与 segmented CSS，无需 JS）：

```html
<div class="segmented" role="radiogroup" aria-label="视图">
  <label class="segmented-item" for="viewList">
    <input class="segmented-input" type="radio" id="viewList" name="view" value="list" checked>
    <span class="segmented-label"><span class="segmented-text">列表</span></span>
  </label>
  <label class="segmented-item" for="viewCard">
    <input class="segmented-input" type="radio" id="viewCard" name="view" value="card">
    <span class="segmented-label"><span class="segmented-text">卡片</span></span>
  </label>
</div>
```

### css-segmented-variants

```json
{"name": ".segmented-block / .segmented-vertical / .segmented-round / .size-xs…xl", "summary": "调整分段选择器布局、形状和 ZUI 标准尺寸。", "role": "helper"}
```

均用于 `.segmented` 根。`segmented-block` 占满父级宽度并均分项目；`segmented-vertical` 纵向排列；`segmented-round` 使用胶囊圆角。可以组合。默认高度 2rem；`size-xs` 为 1.25rem，`size-sm` 为 1.5rem，`size-md` 为 1.75rem，`size-lg` 为 2.5rem，`size-xl` 为 3rem。内容较高时允许自然增高；长文本按可用宽度截断。

## css-variables

### vars-segmented

```json
{"name": "分段选择器变量", "summary": "通过主题变量定制轨道、选中项、尺寸和间距。"}
```

以下默认声明在 `:root`，推荐覆盖实际 `.segmented` 根；尺寸类覆盖高度，圆角变体覆盖 radius。

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--segmented-height` | `2rem` | 控件最小总高度，CSS 长度 | `:root` | `.segmented` |
| `--segmented-radius` | `var(--radius)` | 根和项目圆角 | `:root` | `.segmented` |
| `--segmented-padding` | `0.125rem` | 轨道内边距 | `:root` | `.segmented` |
| `--segmented-gap` | `0.25rem` | 项目间距 | `:root` | `.segmented` |
| `--segmented-bg` | `var(--color-gray-100)` | 轨道背景 | `:root` | `.segmented` |
| `--segmented-color` | `var(--color-fore)` | 普通项文字 | `:root` | `.segmented` |
| `--segmented-border-color` | `var(--color-border)` | 轨道和选中项外圈 | `:root` | `.segmented` |
| `--segmented-selected-bg` | `var(--color-canvas)` | 选中项背景 | `:root` | `.segmented` |
| `--segmented-selected-color` | `var(--color-fore)` | 选中项文字 | `:root` | `.segmented` |
| `--segmented-hover-bg` | `var(--color-gray-200)` | 可用项悬停背景 | `:root` | `.segmented` |

## javascript

无。

## types

### types-segmented-options

```json
{"name": "SegmentedOptions / SegmentedItem / SegmentedValue", "summary": "定义选项、值类型、布局、表单属性和变更回调。"}
```

`SegmentedValue = string | number`。`SegmentedOptions` 继承 [HElementProps](../core/ai.md#types-helement-props)，根类名、style、attrs、生命周期及命令等遵循该契约；`attrs` 可提供 `aria-label`、`aria-labelledby`、`dir` 等根属性。

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `items` | `(SegmentedValue \| SegmentedItem)[]` | 否 | `[]` | 同组 value 唯一；字符串/数字简写同时作为文字和值 |
| `value` | `SegmentedValue` | 否 | 无 | 受控值，undefined 表示非受控 |
| `defaultValue` | `SegmentedValue` | 否 | 第一个未禁用项 | 非受控初值和 reset 目标 |
| `name` | `string` | 否 | 实例唯一名称 | 原生表单字段名，同一表单中的独立组选用不同名称 |
| `id` | `string` | 否 | 实例唯一 ID | 第一个 input 的 ID；其余根据值生成 |
| `form` | `string` | 否 | 无 | 关联外部 form 的 ID |
| `disabled` | `boolean` | 否 | `false` | 禁用整组 |
| `readonly` | `boolean` | 否 | `false` | 按表单控件惯例禁用整组，不参与原生 FormData |
| `required` | `boolean` | 否 | `false` | 原生 radio 必选约束 |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | 否 | 无 | ZUI 尺寸，不指定为默认 32px；详见 CSS 变体 |
| `block` | `boolean` | 否 | `false` | 占满宽度并等分 |
| `vertical` | `boolean` | 否 | `false` | 纵向排列 |
| `shape` | `'default' \| 'round'` | 否 | `'default'` | 圆角形状 |
| `animation` | `boolean` | 否 | `false` | 选中背景平滑移动并适配宽高；减少动态效果偏好下直接定位 |
| `onChange` | `(value: SegmentedValue, event: Event) => void` | 否 | 无 | 用户选中不同项时调用，返回值忽略 |

`SegmentedItem` 字段如下：

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `value` | `SegmentedValue` | 是 | 无 | 保留类型；原生 FormData 按 HTML 规则转换为字符串 |
| `text` | `CustomContentType` | 否 | 无图标时为 value | 支持文本、Preact 节点和 ZUI 内容描述；生成器接收 `(item, index)` |
| `icon` | `IconType` | 否 | 无 | core 图标协议，包含 CSS 图标、字体图标和 VNode |
| `disabled` | `boolean` | 否 | `false` | 禁用当前项 |
| `title` | `string` | 否 | 无 | 标签原生鼠标提示；不替代无障碍名称 |
| `aria-label` | `string` | 否 | 纯图标项回退 value | 纯图标或自定义内容的无障碍名称 |
| `className` | `ClassNameLike` | 否 | 无 | 项目 label 附加类 |
| `style` | `JSX.CSSProperties` | 否 | 无 | 项目 label 样式 |
| `attrs` | `JSX.InputHTMLAttributes<HTMLInputElement>` | 否 | 无 | input 附加属性；身份、状态和 onChange 由组件维护 |

## recipes

### recipe-segmented-form

```json
{"name": "FormControl / FormBuilder 接入", "summary": "通过已注册的 Segmented widget 读写字段值。"}
```

workspace（已配置 Preact/TSX）：

```tsx
import '@zui/base';
import '@zui/segmented';
import '@zui/form-builder';
import {render} from 'preact';
import {FormBuilder} from '@zui/form-builder/react';
const host = document.createElement('div');
document.body.append(host);
render(<FormBuilder schema={{type: 'object', properties: {
    view: {type: 'string', title: '视图', widget: 'Segmented', props: {
        items: [{value: 'list', text: '列表'}, {value: 'card', text: '卡片'}],
        attrs: {'aria-label': '视图'},
    }},
}}} defaultData={{view: 'list'}} />, host);
// 页面离开时：render(null, host); host.remove();
```

FormControl 同样使用 `widget="Segmented"`，选项放在 `props` 中；无需 `radio: true`。原生 `<form>` 使用 name 收集值，reset 恢复非受控默认项，祖先 `fieldset[disabled]` 同时影响交互和样式。

## constraints

- 旧 `BtnSegmented` 与 `.btn-segmented` 已移除。改为 `Segmented`、显式项目 value、`value/defaultValue/onChange` 及本库 HTML 结构。
- 值必须唯一，数字 1 与字符串 '1' 是不同选项，但 FormData 都是字符串 '1'；业务需要保留类型时使用回调或实例 value。
- 选项内容不要嵌套按钮、链接或其他输入，避免破坏标签和单选行为。纯图标项应显式提供有意义的 `aria-label`。
- Tab 进入/离开组，方向键和空格使用浏览器原生 radio 行为；禁用项目被跳过。未提供组名时用 attrs 设置 `aria-label` 或 `aria-labelledby`。
- 文本较长时使用 title 提供鼠标提示，或使用自定义内容分行；布局沿用父容器方向，支持 RTL。尺寸、主题和焦点使用 ZUI token，减少动态效果偏好会关闭颜色过渡和滑动动画；强制颜色模式使用原生选中与焦点轮廓。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/8183f74f34f9cafc03f3800515bd8d51974b345c/lib/segmented/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/8183f74f34f9cafc03f3800515bd8d51974b345c/lib/segmented/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/8183f74f34f9cafc03f3800515bd8d51974b345c/lib/segmented/src/main-react.ts>)
- [类型](<https://github.com/easysoft/zui/blob/8183f74f34f9cafc03f3800515bd8d51974b345c/lib/segmented/src/types/segmented-options.ts>)
- [组件](<https://github.com/easysoft/zui/blob/8183f74f34f9cafc03f3800515bd8d51974b345c/lib/segmented/src/component/segmented.tsx>)
- [样式](<https://github.com/easysoft/zui/blob/8183f74f34f9cafc03f3800515bd8d51974b345c/lib/segmented/src/style/segmented.css>)
- [开发示例](<https://github.com/easysoft/zui/blob/8183f74f34f9cafc03f3800515bd8d51974b345c/lib/segmented/README.md>)
- [正式文档](<https://github.com/easysoft/zui/blob/8183f74f34f9cafc03f3800515bd8d51974b345c/lib/segmented/docs/lib/forms/index.md>)
