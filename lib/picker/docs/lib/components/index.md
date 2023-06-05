# 下拉选择器

用于方便用户从多个选项列表中进行选择。

## 单选

<Example>
  <div id="singlePickerExample"></div>
</Example>

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

## 多选

<Example>
  <div id="multiPickerExample"></div>
</Example>

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

## 初始化选项

```ts
/**
 * 初始化选项。
 */
type PickerOptions = {
    /** 类名。 */
    className?: ClassNameLike;

    /** 样式。 */
    style?: JSX.CSSProperties;

    /** 下拉面板容器元素。 */
    container?: string | HTMLElement;

    /** 渲染完成后的回调函数。 */
    afterRender?: (info: {firstRender: boolean}) => void;

    /** 销毁前的回调函数。 */
    beforeDestroy?: () => void;

    /** 作为表单项的名称。 */
    name?: string;

    /** 是否禁用。 */
    disabled?: boolean;

    /** 是否允许选择多个值，如果指定为数字，则限制多选的数目，默认 `false`。 */
    multiple?: boolean | number;

    /** 是否可选（允许空值，可以被清除）。 */
    optional?: boolean;

    /** 默认值。 */
    defaultValue?: string | string[];

    /** 选择框上的占位文本。 */
    placeholder?: string;

    /** 多个值的分隔字符串，默认为 `,`。 */
    valueSplitter?: string;

    /** 列表项或列表项获取方法。 */
    items: PickerItemProps[] | (() => (Promise<PickerItemProps[]> | PickerItemProps[]));

    /** 是否启用缓存。 */
    cache?: boolean;

    /** 是否启用快捷键。 */
    hotkey?: boolean;

    /** 是否启用搜索。 */
    search?: boolean | number;

    /** 搜索延迟时间，单位：毫秒。 */
    searchDelay?: number;

    /** 搜索提示文本。 */
    searchHint?: string;

    /** 值变更回调函数。 */
    onChange?: (value: string | string[], items: PickerItemProps | PickerItemProps[]) => void;

    /** 当取消选择值时的回调函数。 */
    onDeselect?: (value: string, item: PickerItemProps) => false | void;

    /** 当选择值时的回调函数。 */
    onSelect?: (value: string, item: PickerItemProps) => false | void;

    /** 当激活选择框时的回调函数。 */
    onFocus?: () => void;

    /** 当没有可选项的回调函数。 */
    onNoResults?: (search: string) => string | void;

    /** 菜单宽度，如果设置为 `'100%'` 则与选择框宽度一致，默认 `'100%'`。 */
    menuWidth: number | 'auto' | '100%';

    /** 菜单最大高度，默认 `300`。 */
    menuMaxHeight?: number;

    /** 菜单最大宽度，当宽度设置为 `'auto'` 时生效。 */
    menuMaxWidth?: number;

    /** 菜单最小宽度，当宽度设置为 `'auto'` 时生效。 */
    menuMinWidth?: number;

    /** 菜单方向，默认 `'auto'`。 */
    menuDirection?: PickerMenuDirection;

    /** 菜单类名。 */
    menuClass?: ClassNameLike;

    /** 菜单样式。 */
    menuStyle?: JSX.CSSProperties;

    /** 菜单项高度，默认 `32`。 */
    menuItemHeight?: number;

    /** 是否为多选菜单项显示复选框。 */
    menuCheckbox?: boolean;

    /** 菜单显示时的回调函数。 */
    onMenuShow?: () => void;

    /** 菜单显示后的回调函数。 */
    onMenuShown?: () => void;

    /** 菜单隐藏时的回调函数。 */
    onMenuHide?: () => void;

    /** 菜单隐藏后的回调函数。 */
    onMenuHidden?: () => void;
};
```

## 列表项

### 列表项定义

```ts
type PickerItem = {
    /** 值。 */
    value: string;

    /** 关键字，用于搜索。 */
    keys?: string;

    /** 文本。 */
    text?: ComponentChildren;

    /** 是否禁用。 */
    disabled?: boolean;

    /** 类名。 */
    className?: ClassNameLike;

    /** 图标。 */
    icon?: string | VNode;

    /** 尾部图标。 */
    trailingIcon?: string | VNode;

    /** 提示文本。 */
    hint?: string;

    /** HTML 属性。 */
    attrs?: JSX.HTMLAttributes<HTMLLIElement>;

    /** 样式。 */
    style?: JSX.CSSProperties;
}
```

### 本地列表项

通过初始化选项 `items` 指定为一个选项对象数组来定义本地列表项。

### 异步获取列表项

通过初始化选项 `items` 指定为一个回调函数来返回列表项，可以直接返回选项对象数组，或者通过 `Promise` 异步返回。

### 远程获取列表项

[WIP]

<script setup>
import {onMounted} from 'vue';

onMounted(() => {
    onZUIReady(() => {
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
