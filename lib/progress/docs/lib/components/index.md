# 进度条

## 使用方法

使用 CSS 类 `.progress` 和 `.progress-bar` 来创建进度条，通过为 `.progress-bar` 设置 CSS `width` 来展示进度。

::: tabs

== 示例

<Example>
  <div class="progress">
    <div class="progress-bar" style="width: 40%"></div>
  </div>
</Example>

== HTML

```html
<div class="progress">
  <div class="progress-bar"  style="width: 40%"></div>
</div>
```

:::

## 颜色主题

给 `.progress-bar` 元素添加 `.*` 等颜色[CSS工具类](/utilities/style/utilities/solid)，得到各种颜色的进度条。

::: tabs

== 示例

<Example>
  <template v-for="(item, index) in zui.skin.accent" >
    <div class="progress mb-5">
      <div :class="item" class="progress-bar" :style="`width: ${(index + 1) * 10}%`"></div>
    </div>
  </template>
</Example>

== HTML

```html
<div class="progress">
  <div class="progress-bar primary" style="width: 40%"></div>
</div>
```

:::

## 圆角大小

给 `.progress` 元素添加 `.rounded-*` [CSS工具类](/utilities/borders/utilities/border-radius)，给进度条添加不同大小的圆角。

::: tabs

== 示例

<Example class="col gap-4">
  <div v-for="item in zui.skin.rounded" :class="item" class="progress h-8">
    <div class="progress-bar" style="width: 40%"></div>
  </div>
</Example>

== HTML

```html
<div class="progress rounded-full">
  <div class="progress-bar" style="width: 40%"></div>
</div>
```

:::

## 特殊效果

### 条纹效果

给 `.progress` 元素添加 `.progress-striped` 工具类，给进度条添加条纹效果。

::: tabs

== 示例

<Example>
  <div class="progress progress-striped">
    <div class="progress-bar" style="width: 40%"></div>
  </div>
</Example>

== HTML

```html
<div class="progress progress-striped">
  <div class="progress-bar"  style="width: 40%"></div>
</div>
```

:::

### 动画效果

给使用了 `progress-striped` 工具类的元素添加 `.active` 工具类,给条纹进度条添加向左滑动的动画。

::: tabs

== 示例

<Example>
  <div class="progress progress-striped active">
    <div class="progress-bar" style="width: 40%"></div>
  </div>
</Example>

== HTML

```html
<div class="progress progress-striped active">
  <div class="progress-bar" style="width: 40%"></div>
</div>
```

:::

### 堆叠效果

给 `.progress` 元素添加多个 `progress-bar` 元素，使多个进度条堆叠展示。

::: tabs

== 示例

<Example>
  <div class="progress">
    <div class="progress-bar success" style="width: 40%"></div>
    <div class="progress-bar warning" style="width: 20%"></div>
    <div class="progress-bar danger" style="width: 10%"></div>
  </div>
</Example>

== HTML

```html
 <div class="progress">
   <div class="progress-bar success" style="width: 40%"></div>
   <div class="progress-bar warning" style="width: 20%"></div>
   <div class="progress-bar danger" style="width: 10%"></div>
 </div>
```

:::

## CSS 类

进度条提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `progress`          | 实体类 | 元素作为进度条容器组件 |
| `progress-bar`      | 实体类 | 元素作为进度条组件 |
| `progress-striped`  | 工具类 | 为进度条组件启用条纹样式 |
| `active`            | 工具类 | 为条纹样式进度条组件启用动画效果 |

## CSS 变量

| 变量名称 | 变量含义 |
| -------- | -------- |
| `--progress-bg`           | 进度条组件背景颜色 |
| `--progress-bar-color`    | 进度条组件颜色     |
| `--progress-radius`       | 进度条组件圆角大小 |
| `--progress-striped-size` | 进度条组件条纹大小 |
