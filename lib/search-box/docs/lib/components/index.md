# 搜索框

基于 [输入框](/lib/forms/input-control/) 实现的搜索框组件。

## 示例

### 简单用法

::: tabs

== 示例

<Example>
  <div data-zui="SearchBox"></div>
</Example>

== HTML

```html
<div id="searchBox"></div>

<script>
const searchBox = new zui.SearchBox('#searchBox');
</script>
```

:::

### 圆形外观

::: tabs

== 示例

<Example>
  <div data-zui="SearchBox" data-circle="true"></div>
</Example>

== HTML

```html
<div id="searchBox"></div>

<script>
const searchBox = new zui.SearchBox('#searchBox', {circle: true});
</script>
```

:::

### 将搜索图标放在后面

::: tabs

== 示例

<Example>
  <div data-zui="SearchBox" data-circle="true" data-merge-icon="true"></div>
</Example>

== HTML

```html
<div id="searchBox"></div>

<script>
const searchBox = new zui.SearchBox('#searchBox', {circle: true, mergeICon: true});
</script>
```

:::

### 禁用

::: tabs

== 示例

<Example>
  <div data-zui="SearchBox" data-circle="true" data-disabled="true"></div>
</Example>

== HTML

```html
<div id="searchBox"></div>

<script>
const searchBox = new zui.SearchBox('#searchBox', {circle: true, disabled: true});
</script>
```

:::

## 选项

<Props>
/** 输入框 ID。 */
id?: string;

/** 输入框上的 name 属性，通常用于表单中。 */
name?: string;

/** CSS 类名。 */
className?: string | array | object;

/** 根元素 CSS 类名。 */
rootClass?: string | array | object;

/** 根元素样式。 */
rootStyle?: object;

/** 启用圆形外观。 */
circle?: boolean;

/** 输入框样式。 */
style?: object;

/** 触发 onChange 事件的延时，单位毫秒，默认 500。 */
delay?: number;

/** 输入框的默认值。 */
defaultValue?: string;

/** 输入框的没有值时的占位文本。 */
placeholder?: string;

/** 是否禁用。 */
disabled?: boolean;

/** 是否只读。 */
readonly?: boolean ;

/** 是否显示清除按钮图标，或者指定另外的图标。 */
clearIcon?: boolean | string;

/** 是否显示搜索按钮图标，或者指定另外的图标。 */
searchIcon?: boolean | string;

/** 是否将搜索图标放在后面，与清除按钮合并显示。 */
mergeIcon?: boolean | string;

/** 搜索框值发生变更时的回调函数。 */
onChange?: (value: string, event: Event) => void;

/** 点击清除按钮时的回调函数。 */
onClear?: (event: MouseEvent) => void;

/** 输入框被激活时的回调函数。 */
onFocus?: (event: FocusEvent) => void;

/** 输入框失去焦点时的回调函数。 */
onBlur?: (event: FocusEvent) => void;
</Props>
