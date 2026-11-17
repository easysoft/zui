# 分段选择器

在少量可见选项中选择一个值，适合周期、视图和展示方式切换。

## 基础用法

::: tabs

== 示例

<Example>
  <ZUI use="Segmented" :options="{items: viewItems, defaultValue: 'list', attrs: {'aria-label': '视图'}, onChange: value => selectedView = value}" />
  <p aria-live="polite">当前视图：{{ selectedView }}</p>
</Example>

== 完整代码

```html
<div id="viewSelector"></div>
<p>当前视图：<output id="viewValue" aria-live="polite">list</output></p>
<script>
const viewSelector = new zui.Segmented('#viewSelector', {
    items: [{value: 'list', text: '列表'}, {value: 'card', text: '卡片'}, {value: 'board', text: '看板'}],
    defaultValue: 'list',
    attrs: {'aria-label': '视图'},
    onChange(value) {
        document.querySelector('#viewValue').value = value;
    },
});
// 移除页面时调用 viewSelector.destroy()。
</script>
```

:::

`items` 可以直接使用字符串或数字，例如 `items: ['日', '周', '月']`。对象项目使用 `value` 与 `text`。`value` 和回调保留字符串/数字类型。

## 尺寸、等宽、方向与形状

::: tabs

== 示例

<Example>
  <div class="col gap-4">
    <ZUI use="Segmented" :options="{items: ['日', '周', '月'], size: 'sm', attrs: {'aria-label': '小号周期'}}" />
    <ZUI use="Segmented" :options="{items: ['日', '周', '月'], attrs: {'aria-label': '默认周期'}}" />
    <ZUI use="Segmented" :options="{items: ['日', '周', '月'], size: 'lg', attrs: {'aria-label': '大号周期'}}" />
    <ZUI use="Segmented" :options="{items: ['日', '周', '月'], block: true, attrs: {'aria-label': '等宽周期'}}" />
    <ZUI use="Segmented" :options="{items: ['日', '周', '月'], vertical: true, attrs: {'aria-label': '纵向周期'}}" />
    <ZUI use="Segmented" :options="{items: ['日', '周', '月'], shape: 'round', attrs: {'aria-label': '圆角周期'}}" />
  </div>
</Example>

== 完整代码

```html
<div class="col gap-4">
  <div id="periodSmall"></div><div id="periodDefault"></div><div id="periodLarge"></div>
  <div id="periodBlock"></div><div id="periodVertical"></div><div id="periodRound"></div>
</div>
<script>
const periodSelectors = [
    ['periodSmall', {size: 'sm'}], ['periodDefault', {}], ['periodLarge', {size: 'lg'}],
    ['periodBlock', {block: true}], ['periodVertical', {vertical: true}], ['periodRound', {shape: 'round'}],
].map(([id, options]) => new zui.Segmented(`#${id}`, {
    items: ['日', '周', '月'], attrs: {'aria-label': '周期'}, ...options,
}));
// 移除页面时：periodSelectors.forEach(instance => instance.destroy());
</script>
```

:::

默认高度为 32px，沿用 ZUI 的 `xs/sm/md/lg/xl` 尺寸。`block` 占满父容器并等分各项；长文本按可用宽度截断。`vertical` 纵向排列，`shape: 'round'` 使用胶囊圆角。

## 禁用、图标与自定义内容

::: tabs

== 示例

<Example>
  <div class="col gap-4">
    <ZUI use="Segmented" :options="{items: disabledItems, attrs: {'aria-label': '部分可用视图'}}" />
    <ZUI use="Segmented" :options="{items: viewItems, disabled: true, attrs: {'aria-label': '禁用视图'}}" />
    <ZUI use="Segmented" :options="{items: iconItems, attrs: {'aria-label': '图标视图'}}" />
    <ZUI use="Segmented" :options="{items: customItems, attrs: {'aria-label': '汇总周期'}}" />
  </div>
</Example>

== 完整代码

```html
<div class="col gap-4">
  <div id="viewPartial"></div><div id="viewDisabled"></div>
  <div id="viewIcons"></div><div id="viewCustom"></div>
</div>
<script>
const examples = [
    new zui.Segmented('#viewPartial', {items: [{value: 'list', text: '列表'}, {value: 'card', text: '卡片', disabled: true}], attrs: {'aria-label': '部分可用视图'}}),
    new zui.Segmented('#viewDisabled', {items: [{value: 'list', text: '列表'}, {value: 'card', text: '卡片'}, {value: 'board', text: '看板'}], disabled: true, attrs: {'aria-label': '禁用视图'}}),
    new zui.Segmented('#viewIcons', {items: [
        {value: 'list', icon: {className: 'i-menu'}, 'aria-label': '列表', title: '列表'},
        {value: 'calendar', icon: {className: 'i-calendar'}, 'aria-label': '日历', title: '日历'},
    ], attrs: {'aria-label': '图标视图'}}),
    new zui.Segmented('#viewCustom', {items: [
        {value: 'day', text: {tag: 'span', className: 'col py-2', children: ['每日', {tag: 'small', children: '按天汇总'}]}},
        {value: 'week', text: {tag: 'span', className: 'col py-2', children: ['每周', {tag: 'small', children: '按周汇总'}]}},
    ], attrs: {'aria-label': '汇总周期'}}),
];
// 移除页面时：examples.forEach(instance => instance.destroy());
</script>
```

:::

CSS 图标需要加载 [CSS 图标库](/lib/icons/css-icons/)。`icon` 支持 ZUI 的图标协议；`text` 支持文本、Preact 节点和 ZUI 自定义内容描述。纯图标项提供有意义的 `aria-label`，`title` 用于鼠标悬停提示。自定义内容不要嵌套可交互控件。

## 状态、更新与表单

未传 `value` 时，控件维护原生单选状态，初值为 `defaultValue` 或第一个可用项。传入 `value` 后为受控模式：在 `onChange(value, event)` 中回填新值；不回填就保留原值。

通过 `render({items})` 更新选项，保留仍存在的选择；非受控选中项被移除后选择第一个可用项，空列表无选择。程序更新和原生表单重置不触发 `onChange`。

设置 `name` 后，原生 `FormData` 收集选中项的字符串值；`form.reset()` 恢复非受控默认值，受控模式保留当前 `value`。`required` 支持原生必选约束，`disabled` 和祖先 `fieldset[disabled]` 会禁用输入并排除表单提交。

`FormControl` 和 `FormBuilder` 使用 `widget: 'Segmented'`，把 `items` 等选项放在 `props` 中。

## 参数

<Props>
items?: (string | number | SegmentedItem)[] = []; // 选项，每项 value 唯一。
value?: string | number; // 受控值。
defaultValue?: string | number; // 初值，缺省为第一个可用项。
name?: string; // 表单字段名，缺省为实例唯一名称。
id?: string; // 第一个 radio 的 ID。
form?: string; // 外部 form 的 ID。
disabled?: boolean = false; // 禁用整组。
readonly?: boolean = false; // 表单只读，禁用整组输入。
required?: boolean = false; // 原生必选约束。
size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // ZUI 尺寸，未指定为 32px。
block?: boolean = false; // 占满父级宽度并等分。
vertical?: boolean = false; // 纵向排列。
shape?: 'default' | 'round' = "default"; // 形状。
onChange?: (value: string | number, event: Event) => void; // 用户改变选择时调用。
</Props>

项目支持 `value`、`text`、`icon`、`disabled`、`title`、`aria-label`、`className`、`style` 与输入附加 `attrs`。根节点也支持 ZUI 通用的 `className/style/attrs`。

## CSS 与无障碍

根类为 `.segmented`，项目为 `.segmented-item`，隐藏输入为 `.segmented-input`，显示标签为 `.segmented-label`。可在根上覆盖 `--segmented-height`、`--segmented-radius`、`--segmented-padding`、`--segmented-gap`、`--segmented-bg`、`--segmented-color`、`--segmented-border-color`、`--segmented-selected-bg`、`--segmented-selected-color`、`--segmented-hover-bg`。

选中、焦点和禁用状态直接跟随原生 radio。`Tab` 进入/离开组，方向键在可用项之间移动并选中，空格选择当前项。通过 `attrs` 设置组的 `aria-label` 或 `aria-labelledby`。

<script setup>
import {ref} from 'vue';
const selectedView = ref('list');
const viewItems = [{value: 'list', text: '列表'}, {value: 'card', text: '卡片'}, {value: 'board', text: '看板'}];
const disabledItems = [{value: 'list', text: '列表'}, {value: 'card', text: '卡片', disabled: true}];
const iconItems = [
    {value: 'list', icon: {className: 'i-menu'}, 'aria-label': '列表', title: '列表'},
    {value: 'calendar', icon: {className: 'i-calendar'}, 'aria-label': '日历', title: '日历'},
];
const customItems = [
    {value: 'day', text: {tag: 'span', className: 'col py-2', children: ['每日', {tag: 'small', children: '按天汇总'}]}},
    {value: 'week', text: {tag: 'span', className: 'col py-2', children: ['每周', {tag: 'small', children: '按周汇总'}]}},
];
</script>
