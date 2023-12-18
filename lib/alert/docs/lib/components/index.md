# 消息框

消息框能够轻松展示一些需要引起用户注意的内容。

## 基本使用

为元素添加 `alert` 类来获得消息框的外观。

::: tabs
== 示例

<Example>
  <div class="alert"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
</Example>

== HTML

```html
<div class="alert"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
```

:::

## 包含链接

使用 `.alert-link` 类来为消息框内的链接添加样式。

::: tabs
== 示例

<Example>
  <div class="alert">Hi! 这条消息可能需要你注意。<a href="#more" class="alert-link">了解更多</a></div>
</Example>

== HTML

```html
<div class="alert">Hi! 这条消息可能需要你注意。<a href="#more" class="alert-link">了解更多</a></div>
```

:::

## 包含关闭按钮

使用 `.alert-close` 类来为消息框内的关闭按钮添加样式。絮语注意到是当需要在消息框中包含更多内容时，需要将消息文本放置在 `.alert-text` 中。

::: tabs
== 示例

<Example>
  <div class="alert">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。<a href="#more" class="alert-link">了解更多</a></div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== HTML

```html
<div class="alert">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。<a href="#more" class="alert-link">了解更多</a></div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
```

:::

## 包含操作按钮

像添加关闭按钮一样，还可以添加其他操作按钮：

::: tabs

== 示例

<Example>
  <div class="alert">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。<a href="#more" class="alert-link">了解更多</a></div>
    <button type="button" class="btn size-sm">不再显示</button>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== HTML

```html
<div class="alert">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。<a href="#more" class="alert-link">了解更多</a></div>
  <button type="button" class="btn size-sm">不再显示</button>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
```

:::

可以将多个按钮放在工具栏中：

::: tabs
== 示例

<Example>
 <div class="alert">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。<a href="#more" class="alert-link">了解更多</a></div>
    <div class="toolbar gap-3">
      <button type="button" class="btn size-sm">不再显示</button>
      <button type="button" class="btn success size-sm">了解</button>
    </div>
  </div>
</Example>

== HTML

```html
<div class="alert">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。<a href="#more" class="alert-link">了解更多</a></div>
  <div class="toolbar gap-3">
    <button type="button" class="btn size-sm">不再显示</button>
    <button type="button" class="btn success size-sm">了解</button>
  </div>
</div>
```

:::

## 外观类型

配合丰富的 [CSS 工具类](/utilities/) 来实现不同消息框的外观。

::: tabs

== 常用

<Example class="space-y-2">
  <div class="alert primary">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
  <div class="alert success">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
  <div class="alert danger-pale">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
  <div class="alert warning-pale">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
  <div class="alert gray-pale">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
  <div class="alert gray rounded-full">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
  <div class="alert black rounded-none">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== 实心

<Example class="space-y-2">
  <div v-for="skin in skinList" class="alert" :class="skin">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== 灰度

<Example class="space-y-2">
  <div v-for="skin in shadeLevels" class="alert" :class="`gray-${skin}`">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== 轮廓

<Example class="space-y-2">
  <div v-for="skin in skinList" class="alert" :class="`${skin}-outline`">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== 浅色

<Example class="space-y-2">
  <div v-for="skin in skinList" class="alert" :class="`${skin}-pale`">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 嘿！这是一则提示。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== HTML

```html
<div class="alert primary">...</div>
```

:::

## CSS 类

消息框提供了如下 CSS 类：

| 类             | 类型     | 作用               |
| -------------- |:--------:| ------------------ |
| `alert`        | 实体类   | 元素作为消息框组件 |
| `alert-icon`   | 实体类   | 元素作为消息框内左侧图标 |
| `alert-close`| 实体类   | 元素作为消息框关闭按钮 |
| `alert-text`| 实体类   | 元素作为消息框文本内容 |


## CSS 变量

消息框提供了如下 CSS 变量：

| 变量名称             | 变量含义           |
| ---------------------|--------------------|
| `--alert-bg`         | 消息框默认背景色   |

<script setup>
const skinList = 'primary,secondary,success,warning,danger,important,special,gray'.split(',');
const shadeLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
</script>
