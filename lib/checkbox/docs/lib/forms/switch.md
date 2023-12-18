# 开关

## 基本使用

与单选框和复选框的[高级外观](/lib/forms/checkbox/#高级外观)一样，通过 `.switch` 类来启用开关外观。

::: tabs

== 示例

<Example class="row gap-6">
  <div class="switch">
    <input type="checkbox" checked="checked" id="darkModeExample1">
    <label for="darkModeExample1">深色模式</label>
  </div>
  <div class="switch">
    <input type="checkbox" disabled="disabled">
    <label>被禁用</label>
  </div>
</Example>

== HTML

```html
<div class="switch">
  <input type="checkbox" checked="checked" id="darkModeExample1">
  <label for="darkModeExample1">深色模式</label>
</div>
<div class="switch">
  <input type="checkbox" disabled="disabled">
  <label>被禁用</label>
</div>
```

:::

## 开关颜色

通过设置 CSS 变量 `--checkbox-color` 可以设置高级外观颜色。

::: tabs

== 示例

<Example class="row gap-6">
  <div class="switch" style="--checkbox-color: var(--color-success-500)">
    <input type="checkbox" checked="checked" id="switchExample10">
    <label for="switchExample10">选项 1</label>
  </div>
  <div class="switch" style="--checkbox-color: red">
    <input type="checkbox" checked="checked" id="switchExample11">
    <label for="switchExample11">选项 2</label>
  </div>
  <div class="switch" style="--checkbox-color: black">
    <input type="checkbox" checked="checked" id="switchExample12">
    <label for="switchExample12">选项 3</label>
  </div>
</Example>

== HTML

```html
<div class="switch">
  <input type="checkbox" checked="checked" id="darkModeExample1">
  <label for="darkModeExample1">深色模式</label>
</div>
<div class="switch">
  <input type="checkbox" disabled="disabled">
  <label>被禁用</label>
</div>
```

:::

## 开关列表

### 垂直列表

通过将多个开关放置在 `.check-list` 中，可以实现一个开关列表：

::: tabs

== 示例

<Example>
  <div class="check-list">
    <div class="switch">
       <input type="checkbox" id="switchExample1">
       <label for="switchExample1">选项 1</label>
    </div>
    <div class="switch">
       <input type="checkbox" id="switchExample2">
       <label for="switchExample2">选项 2</label>
    </div>
    <div class="switch">
       <input type="checkbox" id="switchExample3">
       <label for="switchExample3">选项 3</label>
    </div>
  </div>
</Example>

== HTML

```html
<div class="check-list">
  <div class="switch">
    <input type="checkbox" id="switchExample1">
    <label for="switchExample1">选项 1</label>
  </div>
  <div class="switch">
    <input type="checkbox" id="switchExample2">
    <label for="switchExample2">选项 2</label>
  </div>
  <div class="switch">
    <input type="checkbox" id="switchExample3">
    <label for="switchExample3">选项 3</label>
  </div>
</div>
```

:::

### 内联列表

通过将多个开关放置在 `.check-list` 中，可以实现一个开关内联列表：

::: tabs

== 示例

<Example>
  <div class="check-list-inline">
    <div class="switch">
       <input type="checkbox" id="switchExample4">
       <label for="switchExample4">选项 1</label>
    </div>
    <div class="switch">
       <input type="checkbox" id="switchExample5">
       <label for="switchExample5">选项 2</label>
    </div>
    <div class="switch">
       <input type="checkbox" id="switchExample6">
       <label for="switchExample6">选项 3</label>
    </div>
  </div>
</Example>

== HTML

```html
<div class="check-list-inline">
  <div class="switch">
    <input type="checkbox" id="switchExample4">
    <label for="switchExample4">选项 1</label>
  </div>
  <div class="switch">
    <input type="checkbox" id="switchExample5">
    <label for="switchExample5">选项 2</label>
  </div>
  <div class="switch">
    <input type="checkbox" id="switchExample6">
    <label for="switchExample6">选项 3</label>
  </div>
</div>
```

:::

## 列表联动

通过开关内部使用的 `input[type="checkbox"]` 更换为 `input[type="radio"]`，并指定为相同的 `name` 属性，即可实现多个开关单选联动：

::: tabs

== 示例

<Example>
  <div class="check-list">
    <div class="switch">
       <input type="radio" id="switchExample7" name="radioSwitchExample">
       <label for="switchExample7">选项 1</label>
    </div>
    <div class="switch">
       <input type="radio" id="switchExample8" name="radioSwitchExample">
       <label for="switchExample8">选项 2</label>
    </div>
    <div class="switch">
       <input type="radio" id="switchExample9" name="radioSwitchExample">
       <label for="switchExample9">选项 3</label>
    </div>
  </div>
</Example>

== HTML

```html
<div class="check-list">
  <div class="switch">
    <input type="radio" id="switchExample7">
    <label for="switchExample7">选项 1</label>
  </div>
  <div class="switch">
    <input type="radio" id="switchExample8">
    <label for="switchExample8">选项 2</label>
  </div>
  <div class="switch">
    <input type="radio" id="switchExample9">
    <label for="switchExample9">选项 3</label>
  </div>
</div>
```

:::

## CSS 类

开关提供了如下CSS类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `switch`              | 实体类 | 开关组件 |
| `check-list`              | 实体类 | 开关列表组件 |
| `check-list-inline`                 | 实体类 | 开关内联列表组件 |
| `checked`         | 修饰类 | 强制使用选中外观 |
| `focus`         | 修饰类 | 强制使用激活外观 |
| `disabled`         | 修饰类 | 强制使用禁用外观 |

## CSS 变量

单选框和复选框提供了如下 CSS 变量：

| CSS 变量名        | 作用           |
| ------------- |:------------- |
| `--checkbox-color`      | 开关颜色，仅当使用高级外观时有效 |
