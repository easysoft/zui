# 选择框

选择框包括复选框和单选框。复选框（checkbox）允许用户选择多个选项，不同于 `<select>`，这些选项是直接展示的。为 `<input type="checkbox">` 设置 disabled 属性来应用禁用样式，如果为 `.checkbox` 添加 `disabled` 类，则整个复选框包括文字部分都会应用禁用样式。将多个复选框堆叠形成一个复选框组。

## 基本使用

### 复选框

::: tabs

== 示例

<Example class="row gap-4">
  <label class="checkbox">
    <input type="checkbox"> 复选框
  </label>
  <label class="checkbox">
    <input type="checkbox" disabled> 复选框被禁用
  </label>
</Example>

== HTML

```html
<label class="checkbox">
  <input type="checkbox"> 复选框
</label>
<label class="checkbox">
  <input type="checkbox" disabled> 复选框被禁用
</label>
```

:::

### 单选框列表

单选框通常多个一起使用组成列表，将多个单选框放在 `.check-list` 中即可。

::: tabs

== 示例

<Example>
  <div class="check-list">
    <label class="radio">
      <input type="radio" name="radioOptionsExample"> 单选框 1
    </label>
    <label class="radio">
      <input type="radio" name="radioOptionsExample"> 单选框 2
    </label>
    <label class="radio disabled">
      <input disabled type="radio" name="radioOptionsExample"> 被禁用的单选框
    </label>
  </div>
</Example>

== HTML

```html
<div class="check-list">
  <label class="radio">
    <input type="radio" name="radioOptionsExample"> 单选框 1
  </label>
  <label class="radio">
    <input type="radio" name="radioOptionsExample"> 单选框 2
  </label>
  <label class="radio disabled">
    <input disabled type="radio" name="radioOptionsExample"> 被禁用的单选框
  </label>
</div>
```

:::

### 复选框列表

复选框也支持多个一起使用组成列表，将多个复选框放在 `.check-list` 中即可。

::: tabs

== 示例

<Example>
  <div class="check-list">
    <label class="checkbox">
      <input type="checkbox"> 复选框 1
    </label>
    <label class="checkbox">
      <input type="checkbox"> 复选框 2
    </label>
    <label class="checkbox disabled">
      <input disabled type="checkbox"> 被禁用的复选框
    </label>
  </div>
</Example>

== HTML

```html
<div class="check-list">
  <label class="checkbox">
    <input type="checkbox"> 复选框 1
  </label>
  <label class="checkbox">
    <input type="checkbox"> 复选框 2
  </label>
  <label class="checkbox disabled">
    <input disabled type="checkbox"> 被禁用的复选框
  </label>
</div>
```

:::

## 不包含文字样式

### 复选框

::: tabs

== 示例

<Example>
  <div class="check-list">
    <label class="checkbox">
      <input type="checkbox">
    </label>
    <label class="checkbox">
      <input type="checkbox">
    </label>
    <label class="checkbox" disabled>
      <input disabled type="checkbox">
    </label>
  </div>
</Example>

== HTML

```html
<label class="checkbox">
  <input type="checkbox">
</label>
<label class="checkbox">
  <input type="checkbox">
</label>
<label class="checkbox" disabled>
  <input disabled type="checkbox">
</label>
```

:::

### 单选框

::: tabs

== 示例

<Example>
  <label class="radio">
    <input type="radio" name="radioOptionsExample">
  </label>
  <label class="radio">
    <input type="radio" name="radioOptionsExample">
  </label>
  <label class="radio disabled">
    <input disabled type="radio" name="radioOptionsExample">
  </label>
</Example>

== HTML

```html
<label class="radio">
  <input type="radio" name="radioOptionsExample">
</label>
<label class="radio">
  <input type="radio" name="radioOptionsExample">
</label>
<label class="radio disabled">
  <input disabled type="radio" name="radioOptionsExample">
</label>
```

:::

## 内联形式

为让多个复选框或单选框内联显示，可以将他们放置在一个 `.check-list-inline` 中。

### 内联多选框

::: tabs

== 示例

<Example>
  <div class="check-list-inline">
    <label class="checkbox">
      <input type="checkbox"> 复选框 1
    </label>
    <label class="checkbox">
      <input type="checkbox"> 复选框 2
    </label>
    <label class="checkbox disabled">
      <input disabled type="checkbox"> 被禁用的复选框
    </label>
  </div>
</Example>

== HTML

```html
<div class="check-list-inline">
  <label class="checkbox">
    <input type="checkbox"> 复选框 1
  </label>
  <label class="checkbox">
    <input type="checkbox"> 复选框 2
  </label>
  <label class="checkbox disabled">
    <input disabled type="checkbox"> 被禁用的复选框
  </label>
</div>
```

:::

### 内联单选框

::: tabs

== 示例

<Example>
  <div class="check-list-inline">
    <label class="radio">
      <input type="radio" name="radioOptionsExample"> 单选框 1
    </label>
    <label class="radio">
      <input type="radio" name="radioOptionsExample"> 单选框 2
    </label>
    <label class="radio disabled">
      <input disabled type="radio" name="radioOptionsExample"> 被禁用的单选框
    </label>
  </div>
</Example>

== HTML

```html
<div class="check-list-inline">
  <label class="radio">
    <input type="radio" name="radioOptionsExample"> 单选框 1
  </label>
  <label class="radio">
    <input type="radio" name="radioOptionsExample"> 单选框 2
  </label>
  <label class="radio disabled">
    <input disabled type="radio" name="radioOptionsExample"> 被禁用的单选框
  </label>
</div>
```

:::

### 内联间距

可以通过工具类 `gap-*` 来设置内联的复选框和单选框间的间距。

::: tabs

== 示例

<Example>
  <div class="check-list-inline gap-8">
    <label class="checkbox">
      <input type="checkbox"> 复选框 1
    </label>
    <label class="checkbox">
      <input type="checkbox"> 复选框 2
    </label>
    <label class="checkbox disabled">
      <input disabled type="checkbox"> 被禁用的复选框
    </label>
  </div>
</Example>

== HTML

```html
<div class="check-list-inline gap-8">
  ...
</div>
```

:::

## 高级外观

高级外观的多选框和单选框使用自定义的外观代替原生外观，在所有浏览器都具有一致的体验。

### 高级外观的复选框

::: tabs

== 示例

<Example>
  <div class="check-list">
    <div class="checkbox-primary">
      <input type="checkbox" id="primaryCheckbox1">
      <label for="primaryCheckbox1">未选中</label>
    </div>
    <div class="checkbox-primary">
      <input type="checkbox" checked="checked" id="primaryCheckbox2">
      <label for="primaryCheckbox2">选中</label>
    </div>
    <div class="checkbox-primary">
      <input type="checkbox" checked="checked" disabled="disabled" id="primaryCheckbox3">
      <label for="primaryCheckbox3">禁用</label>
    </div>
  </div>
</Example>

== HTML

```html
<div class="check-list">
  <div class="checkbox-primary">
    <input type="checkbox" id="primaryCheckbox1">
    <label for="primaryCheckbox1">未选中</label>
  </div>
  <div class="checkbox-primary">
    <input type="checkbox" checked="checked" id="primaryCheckbox2">
    <label for="primaryCheckbox2">选中</label>
  </div>
  <div class="checkbox-primary">
    <input type="checkbox" checked="checked" disabled="disabled" id="primaryCheckbox3">
    <label for="primaryCheckbox3">禁用</label>
  </div>
</div>
```

:::

### 高级外观的单选框

::: tabs

== 示例

<Example>
  <div class="check-list">
    <div class="radio-primary">
      <input type="radio" name="primaryRadioGroup1" id="primaryradio1">
      <label for="primaryradio1">选项一</label>
    </div>
    <div class="radio-primary">
      <input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio2">
      <label for="primaryradio2">选项二</label>
    </div>
    <div class="radio-primary">
      <input type="radio" name="primaryRadioGroup1" checked="checked" disabled="disabled" id="primaryradio3">
      <label for="primaryradio3">禁用</label>
    </div>
  </div>
</Example>

== HTML

```html
<div class="check-list">
  <div class="radio-primary">
    <input type="radio" name="primaryRadioGroup1" id="primaryradio1">
    <label for="primaryradio1">选项一</label>
  </div>
  <div class="radio-primary">
    <input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio2">
    <label for="primaryradio2">选项二</label>
  </div>
  <div class="radio-primary">
    <input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio3">
    <label for="primaryradio3">选项三</label>
  </div>
  <div class="radio-primary">
    <input type="radio" name="primaryRadioGroup1" checked="checked" disabled="disabled" id="primaryradio4">
    <label for="primaryradio4">禁用</label>
  </div>
</div>
```

:::

### 无 `<input>` 选择框

高级外观还可以不使用 `<input>` 元素，在此种情况下，为 `.checkbox-primary` 或 `.radio-primary` 添加 .`checked` 类标记为选中状态，通过 `focus` 类来标记激活状态，用户无法通过点击来切换选中状态，但可以通过程序手动添加或移除 `.checked` 来更改选中状态。

::: tabs

== 示例

<Example class="check-list-inline">
  <div class="checkbox-primary"><label>未选中</label></div>
  <div class="checkbox-primary checked"><label>选中</label></div>
  <div class="checkbox-primary focus"><label>选中</label></div>
  <div class="checkbox-primary indeterminate"><label>Indeterminate</label></div>
  <div class="radio-primary"><label>未选中</label></div>
  <div class="radio-primary checked"><label>选中</label></div>
  <div class="radio-primary focus"><label>选中</label></div>
</Example>

== HTML

```html
<div class="checkbox-primary"><label>未选中</label></div>
<div class="checkbox-primary checked"><label>选中</label></div>
<div class="checkbox-primary focus"><label>选中</label></div>
<div class="checkbox-primary indeterminate"><label>Indeterminate</label></div>
<div class="radio-primary"><label>未选中</label></div>
<div class="radio-primary checked"><label>选中</label></div>
<div class="radio-primary focus"><label>选中</label></div>
```

:::

### 设置高级外观颜色

通过设置 CSS 变量 `--checkbox-color` 可以设置高级外观颜色。

::: tabs

== 示例

<Example class="check-list-inline">
  <div class="checkbox-primary checked" style="--checkbox-color: var(--color-success-500)"><label>未选中</label></div>
  <div class="checkbox-primary checked" style="--checkbox-color: red"><label>选中</label></div>
  <div class="checkbox-primary checked" style="--checkbox-color: black"><label>选中</label></div>
  <div class="radio-primary checked" style="--checkbox-color: var(--color-success-500)"><label>未选中</label></div>
  <div class="radio-primary checked" style="--checkbox-color: red"><label>选中</label></div>
  <div class="radio-primary checked" style="--checkbox-color: black"><label>选中</label></div>
</Example>

== HTML

```html
<div class="checkbox-primary checked" style="--checkbox-color: var(--color-success-500)"><label>未选中</label></div>
<div class="checkbox-primary checked" style="--checkbox-color: red"><label>选中</label></div>
<div class="checkbox-primary checked" style="--checkbox-color: black"><label>选中</label></div>
<div class="radio-primary checked" style="--checkbox-color: var(--color-success-500)"><label>未选中</label></div>
<div class="radio-primary checked" style="--checkbox-color: red"><label>选中</label></div>
<div class="radio-primary checked" style="--checkbox-color: black"><label>选中</label></div>
```

:::

## CSS 类

单选框和复选框提供了如下CSS类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `checkbox`              | 实体类 | 复选框组件 |
| `radio`                 | 实体类 | 单选框组件 |
| `check-list`              | 实体类 | 复选框或单选框列表组件 |
| `check-list-inline`      | 实体类 | 复选框或单选框内联列表组件 |
| `checkbox-primary`      | 实体类 | 高级外观的复选框组件 |
| `radio-primary`         | 实体类 | 高级外观的单选框组件 |
| `checked`         | 修饰类 | 强制使用选中外观 |
| `focus`         | 修饰类 | 强制使用激活外观 |
| `disabled`         | 修饰类 | 强制使用禁用外观 |
| `indeterminate`         | 修饰类 | 强制使用 Indeterminate 外观 |

## CSS 变量

单选框和复选框提供了如下 CSS 变量：

| CSS 变量名        | 作用           |
| ------------- |:------------- |
| `--checkbox-size`      | 复选框或单选框大小，仅当使用高级外观时有效 |
| `--checkbox-color`      | 复选框或单选框颜色，仅当使用高级外观时有效 |
