# 下拉选择器

用于方便用户从多个选项列表中进行选择。

## 单选

以项目成员为例：姓名用于识别人员，部门和英文关键词用于搜索；休假成员保留在列表中，但不可选。后续成员选择示例复用这组 `items`。

::: tabs

== 示例

<Example>
  <ZUI use="picker" :options="{items, defaultValue: 'chenchen', name: 'owner', placeholder: '请选择项目成员', searchHint: '搜索姓名或部门'}" />
</Example>

== HTML

```html
<div id="singlePickerExample"></div>

<script>
const items = [
    {text: '林悦 · 产品', value: 'linyue', keys: '产品 product linyue'},
    {text: '陈晨 · 研发', value: 'chenchen', keys: '研发 developer chenchen'},
    {text: '王宁 · 测试', value: 'wangning', keys: '测试 qa wangning'},
    {text: '周敏 · 设计', value: 'zhoumin', keys: '设计 design zhoumin'},
    {text: '李航 · 运维', value: 'lihang', keys: '运维 operations lihang'},
    {text: '何雨 · 客户支持（休假中）', value: 'heyu', keys: '客户支持 support heyu', disabled: true},
];
const picker = new zui.Picker('#singlePickerExample', {
    items,
    defaultValue: 'chenchen',
    name: 'owner',
    placeholder: '请选择项目成员',
    searchHint: '搜索姓名或部门',
});
</script>
```

:::

## 多选

::: tabs

== 示例

<Example>
  <ZUI use="picker" :options="{multiple: true, items, defaultValue: 'linyue,chenchen', placeholder: '请选择项目成员', menuCheckbox: true}" />
</Example>

== HTML

```html
<div id="multiPickerExample"></div>

<script>
const items = [
    {text: '林悦 · 产品', value: 'linyue', keys: '产品 product linyue'},
    {text: '陈晨 · 研发', value: 'chenchen', keys: '研发 developer chenchen'},
    {text: '王宁 · 测试', value: 'wangning', keys: '测试 qa wangning'},
    {text: '周敏 · 设计', value: 'zhoumin', keys: '设计 design zhoumin'},
    {text: '李航 · 运维', value: 'lihang', keys: '运维 operations lihang'},
    {text: '何雨 · 客户支持（休假中）', value: 'heyu', keys: '客户支持 support heyu', disabled: true},
];
const picker = new zui.Picker('#multiPickerExample', {
    multiple: true,
    items,
    defaultValue: 'linyue,chenchen',
    placeholder: '请选择项目成员',
    menuCheckbox: true,
});
</script>
```

:::

## 创建选项

以任务标签为例，输入“文档完善”可创建一个新标签。在多选 Picker 中设置 `creatable: true` 后，当非空搜索词没有匹配项且数据已加载完成时，下拉列表会显示本地化的“创建”按钮。点击按钮或在搜索框按 <kbd>Enter</kbd>，会创建选项、选中新值并清空搜索；下拉面板保持打开。

::: tabs

== 示例

<Example>
  <ZUI use="picker" :options="{multiple: true, items: labelItems, creatable: true, placeholder: '搜索或创建任务标签'}" />
</Example>

== HTML

```html
<div id="creatablePickerExample"></div>

<script>
const picker = new zui.Picker('#creatablePickerExample', {
    multiple: true,
    items: [
        {text: '性能优化', value: 'performance'},
        {text: '用户体验', value: 'experience'},
        {text: '无障碍', value: 'accessibility'},
    ],
    creatable: true,
    placeholder: '搜索或创建任务标签',
});
</script>
```

:::

`creatable` 也可以是同步转换函数，用于自定义新选项。搜索文本会先去除首尾空白；返回 `false`、抛出错误或返回没有有效 `value` 的选项时，本次不会创建。

```js
const picker = new zui.Picker('#customCreatablePicker', {
    multiple: true,
    items: [{text: '性能优化', value: 'tag:performance'}],
    creatable(search) {
        const value = search.toLowerCase().replace(/\s+/g, '-');
        return value ? {text: search, value: `tag:${value}`} : false;
    },
});
```

新建项保存在当前 Picker 实例的 `PickerState.createdItems` 中，`PickerState.items` 则包含数据源选项和新建项；传入的 `items` 不会被修改。可以通过 vanilla 实例的 `picker.$?.state.createdItems` 查看创建项。创建项仅存在于当前实例生命周期中，重置或销毁 Picker 后会清除；如需服务端持久化，应在业务层另行处理。若数据源随后返回相同 `value` 的选项，列表优先使用数据源选项。

## 在输入组中使用

::: tabs

== 示例

<Example>
  <div class="input-group">
    <span class="input-group-addon">项目负责人</span>
    <ZUI use="picker" :options="{$class: 'input-group-control', items: items.slice(0, 3)}" />
    <button type="button" class="btn btn-default" tabindex="-1">分配</button>
  </div>
</Example>

== HTML

```html
<div class="input-group">
  <span class="input-group-addon">项目负责人</span>
  <div class="input-group-control" zui-create="picker" data-items='[{"text": "林悦 · 产品", "value": "linyue"}, {"text": "陈晨 · 研发", "value": "chenchen"}, {"text": "王宁 · 测试", "value": "wangning"}]'></div>
  <button type="button" class="btn btn-default" tabindex="-1">分配</button>
</div>
```

:::

## 共享选择项

通过 `shareSelections` 属性可以共享选择项标识，当在一个 Picker 中选中的选项会在其他共享同一标识符的 Picker 中被标记为不可选择。

::: tabs

== 示例

<Example class="row gap-4 justify-stretch">
  <ZUI use="picker" :options="{$class: 'flex-1', items, shareSelections: 'sharedPicker', defaultValue: 'linyue', placeholder: '选择负责人，不可与协作人重复'}" />
  <ZUI use="picker" :options="{$class: 'flex-1', items, shareSelections: 'sharedPicker', defaultValue: 'chenchen', placeholder: '选择协作人，不可与负责人重复'}" />
</Example>

== HTML

```html
<div id="sharedPickerExample1"></div>
<div id="sharedPickerExample2"></div>
```

== JS

```js
const items = [
    {text: '林悦 · 产品', value: 'linyue', keys: '产品 product linyue'},
    {text: '陈晨 · 研发', value: 'chenchen', keys: '研发 developer chenchen'},
    {text: '王宁 · 测试', value: 'wangning', keys: '测试 qa wangning'},
    {text: '周敏 · 设计', value: 'zhoumin', keys: '设计 design zhoumin'},
    {text: '李航 · 运维', value: 'lihang', keys: '运维 operations lihang'},
    {text: '何雨 · 客户支持（休假中）', value: 'heyu', keys: '客户支持 support heyu', disabled: true},
];
const picker1 = new zui.Picker('#sharedPickerExample1', {
    defaultValue: 'linyue',
    shareSelections: 'sharedPicker',
    placeholder: '请选择项目成员',
    items,
});
const picker2 = new zui.Picker('#sharedPickerExample2', {
    defaultValue: 'chenchen',
    shareSelections: 'sharedPicker',
    placeholder: '请选择项目成员',
    items,
});
```

:::

## 初始化选项

<Props>
/** 组件根元素的 ID。 */
id?: string;
/** 类名。 */
className?: string | array | object;
/** 样式。 */
style?: object;
/** 组件根元素的标签名。 */
tagName?: string;
/** 附加到组件根元素上的属性。 */
attrs?: object;
/** 点击类型，toggle 表示点击按钮时切换显示隐藏，open 表示点击按钮时只打开。 */
clickType?: 'toggle' | 'open';
/** 渲染完成后的回调函数。 */
afterRender?: function;
/** 销毁前的回调函数。 */
beforeDestroy?: () => void;
/** 作为表单项的名称。 */
name?: string;
/** 默认值。 */
defaultValue?: string | string[];
/** 值变更回调函数。 */
onChange?: function;
/** 是否禁用。 */
disabled?: boolean;
/** 是否允许选择多个值，如果指定为数字，则限制多选的数目，默认 false。 */
multiple?: boolean | number;
/** 选择框上的占位文本。 */
placeholder?: string;
/** 是否必选（不允许空值，不可以被清除）。 */
required?: boolean;
/** 多个值的分隔字符串，默认为 ','。 */
valueSplitter?: string;
/** 空值定义。 */
emptyValue?: string | false;
/** 是否限制值必须在列表中。 */
limitValueInList?: boolean;
/** 列表项或列表项获取方法。 */
items: object[] | function;
/** 树形选项配置。 */
tree?: TreeOptions | boolean;
/** 附加的菜单选项。 */
menu?: SearchTreeOptions;
/** 复选框选项。 */
checkbox?: boolean | object;
/** 共享选择标识。 */
shareSelections?: string;
/** 最大选项数量。 */
maxItemsCount?: number;
/** 超出限制提示文本。 */
exceedLimitHint?: string;
/** 工具栏配置。 */
toolbar?: ToolbarSetting | boolean;
/** 是否启用缓存。 */
cache?: boolean;
/** 搜索延迟时间，单位：毫秒。 */
searchDelay?: number;
/** 搜索为空时的提示文本。 */
searchEmptyHint?: string;
/** 显示格式，可以是字符串或函数。 */
display?: string | function;
/** 是否启用搜索，如果指定为数字，则限制搜索的最小字符数。 */
search?: boolean | number;
/** 搜索提示文本。 */
searchHint?: string;
/** 是否允许在多选搜索无匹配结果时创建选项，或使用同步函数转换新选项。 */
creatable?: boolean | ((search: string) => PickerItemOptions | false);
/** 快捷键设置。 */
hotkeys?: object;
/** 下拉箭头的类名。 */
caretClass?: string | object | array;
/** 选择后是否清空搜索。 */
clearSearchOnSelect?: boolean;
/** 当取消选择值时的回调函数。 */
onDeselect?: function;
/** 当选择值时的回调函数。 */
onSelect?: function;
/** 当清空值时的回调函数。 */
onClear?: () => void;
/** 下拉面板容器元素。 */
popContainer?: string | HTMLElement;
/** 菜单宽度，如果设置为 `'100%'` 则与选择框宽度一致，默认 `'100%'`。 */
popWidth: number | 'auto' | '100%';
/** 菜单高度，默认 `'auto'`。 */
popHeight: number | 'auto';
/** 菜单最大高度，默认 `300`。 */
popMaxHeight?: number;
/** 菜单最小高度，默认 `32`。 */
popMinHeight?: number;
/** 菜单最大宽度，当宽度设置为 `'auto'` 时生效。 */
popMaxWidth?: number;
/** 菜单最小宽度，当宽度设置为 `'auto'` 时生效，默认 50。 */
popMinWidth?: number;
/** 菜单方向，包括 `auto`、`top`、`right`、`bottom`、`left`、`bottom-start`、`bottom-end`、`left-start`、`left-end`、`right-start`、`right-end`、`top-start`、`top-end`，默认 `'auto'`。 */
popPlacement?: string;
/** 菜单类名。 */
popClass?: string | array | object;
/** 菜单样式。 */
popStyle?: object;
/** 菜单显示时的回调函数。 */
onPopShow?: () => void;
/** 菜单显示后的回调函数。 */
onPopShown?: () => void;
/** 菜单隐藏时的回调函数。 */
onPopHide?: () => void;
/** 菜单隐藏后的回调函数。 */
onPopHidden?: () => void;
</Props>

## 列表项定义

<Props>
/** 值。 */
value: string;

/** 关键字，用于搜索。 */
keys?: string;

/** 文本。 */
text?: string;

/** 是否禁用。 */
disabled?: boolean;

/** 类名。 */
className?: string | object | string;

/** 图标。 */
icon?: string;

/** 尾部图标。 */
trailingIcon?: string;

/** 提示文本。 */
hint?: string;

/** HTML 属性。 */
attrs?: object;

/** 样式。 */
style?: object;
</Props>

<script setup>
const labelItems = [
    {text: '性能优化', value: 'performance'},
    {text: '用户体验', value: 'experience'},
    {text: '无障碍', value: 'accessibility'},
];
const items = [
    {text: '林悦 · 产品', value: 'linyue', keys: '产品 product linyue'},
    {text: '陈晨 · 研发', value: 'chenchen', keys: '研发 developer chenchen'},
    {text: '王宁 · 测试', value: 'wangning', keys: '测试 qa wangning'},
    {text: '周敏 · 设计', value: 'zhoumin', keys: '设计 design zhoumin'},
    {text: '李航 · 运维', value: 'lihang', keys: '运维 operations lihang'},
    {text: '何雨 · 客户支持（休假中）', value: 'heyu', keys: '客户支持 support heyu', disabled: true},
];
</script>

## Web Component

调用 `zui.definePicker()` 注册 `<zui-picker>`。组件支持原生表单提交、校验、重置、标签关联以及键盘选择；重复调用注册方法安全。

```html
<form>
  <label for="webcPickerExample">负责人</label>
  <zui-picker id="webcPickerExample" name="owner" value="linyue" required></zui-picker>
  <button type="submit">提交</button>
  <button type="reset">重置</button>
</form>
<script>
zui.definePicker();
const picker = document.querySelector('#webcPickerExample');
picker.items = [{value: 'linyue', text: '林悦'}, {value: 'chenchen', text: '陈晨'}];
</script>
```

在源码模块中，适配器和类型由选择器库直接导出：

```ts
import {definePicker, ZuiPickerElement} from '@zui/picker';
import type {PickerElementOptions, PickerChangeDetail} from '@zui/picker';

definePicker();
const picker: ZuiPickerElement = document.createElement('zui-picker');
const options: Partial<PickerElementOptions> = {items: [{value: 'linyue', text: '林悦'}]};
picker.setOptions(options);
picker.addEventListener('zui-change', event => {
    const detail = (event as CustomEvent<PickerChangeDetail>).detail;
    console.log(detail.value, detail.oldValue);
});
```

| 属性 / property | 默认值 | 说明 |
| --- | --- | --- |
| `items` | 空列表 | 通过 property 设置，沿用 Picker 的 items 类型 |
| `value` property | `""` | 当前值；多选以逗号分隔，例如 `"linyue,chenchen"` |
| `value` attribute、`defaultValue` | `""` | 表单重置时恢复的默认值 |
| `name` | `""` | 表单字段名 |
| `placeholder` | `""` | 空值提示 |
| `disabled`、`readonly`、`required` | `false` | 禁用、只读和必填 |
| `multiple` | `false` | `true` 启用多选，正整数限制选择数量 |
| `search` | `true` | 搜索开关；正整数同样视为开启 |

`value` property 和 attribute 分离：用户修改或通过 property 赋值后，再修改 attribute 只改变默认值；`form.reset()` 恢复默认值且不触发 `zui-change`。多选提交一个逗号分隔字符串字段，组件不会额外插入同名隐藏表单项。

支持原生 `FormData`、`form.reset()`、`label for`、`fieldset disabled`，以及 `form`、`labels`、`validity`、`validationMessage`、`willValidate`、`checkValidity()`、`reportValidity()` 和 `setCustomValidity(message)`。`show()`、`hide()` 返回 Promise。

```js
picker.addEventListener('zui-before-change', event => {
    if (event.detail.value === 'restricted') {
        event.preventDefault();
    }
});
```

| 事件 | detail | 触发时机 |
| --- | --- | --- |
| `zui-before-change` | `{value, oldValue}` | 用户修改前，可同步 `preventDefault()` 取消 |
| `zui-change` | `{value, oldValue}` | 用户修改完成，每次有效修改触发一次 |
| `zui-shown`、`zui-hidden` | `{}` | 浮层展开、关闭 |
| `zui-error` | `{error}` | 通用适配器渲染失败；首次挂载失败同时拒绝 `ready` |

这些自定义事件均冒泡且 `composed: true`。程序赋值保持静默；在 `zui-before-change` 回调中赋新值，以该新值为准。

`label for`、`aria-label`、`aria-labelledby`、`aria-describedby` 可为控件提供名称和说明。选择器支持键盘打开、选项导航、选择与关闭，关闭后恢复焦点。完整键盘操作和屏幕阅读器体验仍需结合宿主页面验证。

数组、对象和函数通过 JavaScript property 设置，不能把 JSON 字符串写入 `items` attribute。注册前赋值的 property 在升级时保留，程序更新在同一轮合并；`await picker.ready` 等待当前连接首次渲染完成，不表示远程数据已经加载。

组件采用 Light DOM。持续移出文档后会卸载内部组件并清理浮层，同一轮 DOM 移动保留实例，重新连接时重新挂载。运行时依赖浏览器的 Custom Elements 与 `ElementInternals` 表单关联能力；服务端项目在客户端挂载后加载运行时，类型可用 `import type` 引入。

通用工厂和属性规则见[组件基类](/lib/basic/core/component.html#由组件库声明-web-component)。
