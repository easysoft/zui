# 下拉选择器

用于方便用户从多个选项列表中进行选择。

## 单选

::: tabs

== 示例

<Example>
  <div id="singlePickerExample"></div>
</Example>

== HTML

```html
<div id="singlePickerExample"></div>

<script>
const items = [
    {text: 'Apple', value: 'apple', keys: 'fruit food'},
    {text: 'Banana', value: 'banana', keys: 'fruit food'},
    {text: 'Orange', value: 'orange', keys: 'fruit food'},
    {text: 'Strawberries', value: 'strawberries', keys: 'fruit food'},
    {text: 'Cat', value: 'cat', keys: 'animals pet'},
    {text: 'Dog', value: 'dog', keys: 'animals pet'},
    {text: 'Fish', value: 'fish', keys: 'animals food'},
    {text: 'Pig', value: 'pig', keys: 'animals food'},
    {text: '梨子', value: 'pear', keys: 'fruit food'},
    {text: 'Anna', value: 'anna', keys: 'human animals'},
    {text: 'Ben', value: 'ben', keys: 'human animals'},
    {text: 'Cake', value: 'cake', keys: 'food'},
];
const picker = new zui.Picker('#singlePickerExample', {
    items,
    defaultValue: 'banana',
    name: 'picker',
    placeholder: '请选择你的最爱',
    searchHint: '搜索选项',
});
</script>
```

:::

## 多选

::: tabs

== 示例

<Example>
  <div id="multiPickerExample"></div>
</Example>

== HTML

```html
<div id="multiPickerExample"></div>

<script>
const items = [
    {text: 'Apple', value: 'apple', keys: 'fruit food'},
    {text: 'Banana', value: 'banana', keys: 'fruit food'},
    {text: 'Orange', value: 'orange', keys: 'fruit food'},
    {text: 'Strawberries', value: 'strawberries', keys: 'fruit food'},
    {text: 'Cat', value: 'cat', keys: 'animals pet'},
    {text: 'Dog', value: 'dog', keys: 'animals pet'},
    {text: 'Fish', value: 'fish', keys: 'animals food'},
    {text: 'Pig', value: 'pig', keys: 'animals food'},
    {text: '梨子', value: 'pear', keys: 'fruit food'},
    {text: 'Anna', value: 'anna', keys: 'human animals'},
    {text: 'Ben', value: 'ben', keys: 'human animals'},
    {text: 'Cake', value: 'cake', keys: 'food'},
];
const picker = new zui.Picker('#multiPickerExample', {
    multiple: true,
    items,
    defaultValue: 'banana,orange',
    placeholder: '请选择你的最爱',
    menuCheckbox: true,
});
</script>
```

:::

## 在输入组中使用

::: tabs

== 示例

<Example>
  <div class="input-group">
    <span class="input-group-addon">选择一种水果</span>
    <div class="input-group-control" data-zui="picker" data-items='[{"text": "Apple", "value": "apple"}, {"text": "Banana", "value": "banana"}]'></div>
    <button type="button" class="btn btn-default" tabindex="-1">刷新</button>
  </div>
</Example>

== HTML

```html
<div class="input-group">
  <span class="input-group-addon">选择一种水果</span>
  <div class="input-group-control" data-zui="picker" data-items='[{"text": "Apple", "value": "apple"}, {"text": "Banana", "value": "banana"}]'></div>
  <button type="button" class="btn btn-default" tabindex="-1">刷新</button>
</div>
```

:::

## 共享选择项

通过 `shareSelections` 属性可以共享选择项标识，当在一个 Picker 中选中的选项会在其他共享同一标识符的 Picker 中被标记为不可选择。

::: tabs

== 示例

<Example class="row gap-4 justify-stretch">
  <ZUI use="picker" :options="{$class: 'flex-1', items, shareSelections: 'sharedPicker', placeholder: '请选择一个水果，无法选择右侧已选择的水果'}" />
  <ZUI use="picker" :options="{$class: 'flex-1', items, shareSelections: 'sharedPicker', placeholder: '请选择一个水果，无法选择左侧已选择的水果'}" />
</Example>

== HTML

```html
<div id="sharedPickerExample1"></div>
```

== JS

```js
const items = [
    {text: 'Apple', value: 'apple'},
    {text: 'Banana', value: 'banana'},
    {text: 'Orange', value: 'orange'},
];
const picker1 = new zui.Picker('#sharedPickerExample1', {
    shareSelections: 'sharedPicker',
    placeholder: '请选择一个水果',
    items,
});
const picker2 = new zui.Picker('#sharedPickerExample2', {
    shareSelections: 'sharedPicker',
    placeholder: '请选择一个水果',
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
import {onMounted} from 'vue';

const items = [
      {text: 'Apple', value: 'apple', keys: 'fruit food'},
      {text: 'Banana', value: 'banana', keys: 'fruit food'},
      {text: 'Orange', value: 'orange', keys: 'fruit food'},
      {text: 'Strawberries', value: 'strawberries', keys: 'fruit food'},
      {text: 'Cat', value: 'cat', keys: 'animals pet'},
      {text: 'Dog', value: 'dog', keys: 'animals pet'},
      {text: 'Fish', value: 'fish', keys: 'animals food'},
      {text: 'Pig', value: 'pig', keys: 'animals food'},
      {text: '梨子', value: 'pear', keys: 'fruit food'},
      {text: 'Anna', value: 'anna', keys: 'human animals'},
      {text: 'Ben', value: 'ben', keys: 'human animals'},
      {text: 'Cake', value: 'cake', keys: 'food'},
];

onMounted(() => {
    onZUIReady(() => {
        new zui.Picker('#singlePickerExample', {
            items,
            defaultValue: 'banana',
            name: 'picker',
            placeholder: '请选择你的最爱',
            searchHint: '搜索选项',
        });

        new zui.Picker('#multiPickerExample', {
            multiple: true,
            items,
            defaultValue: 'banana,orange',
            name: 'picker',
            placeholder: '请选择你的最爱',
            menuCheckbox: true,
        });
    });
});
</script>
