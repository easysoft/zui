# 卡片

## 使用方法

将内容放置在 `<div class="card">` 内即可创建一个卡片组件。

::: tabs

== 示例

<Example class="gap-2 col">
  <div class="card">
    <div class="card-header">
      <h3>卡片标题</h3>
    </div>
    <div class="card-body">
      卡片内容
    </div>
    <div class="card-footer">
      卡片底部
    </div>
  </div>
</Example>

== HTML

```html
<div class="card">
  <div class="card-header">
    <h3>卡片标题</h3>
  </div>
  <div class="card-body">
    卡片内容
  </div>
  <div class="card-footer">
    卡片底部
  </div>
</div>
```

:::

## 选中状态

卡片支持选中状态，添加 `selected` 类。

::: tabs

== 示例

<Example class="gap-2 col">
  <div class="card">
    <div class="card-body">
      普通卡片
    </div>
  </div>
  <div class="card selected">
    <div class="card-body">
      选中的卡片
    </div>
  </div>
</Example>

== HTML

```html
<div class="card">
  <div class="card-body">
    普通卡片
  </div>
</div>
<div class="card selected">
  <div class="card-body">
    选中的卡片
  </div>
</div>
```

:::

## CSS 类

卡片提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `card`      | 实体类 | 元素作为卡片组件 |
| `card-header`    | 实体类      |  元素作为卡片的头部 |
| `card-body`    | 实体类    |  元素作为卡片的主体 |
| `card-footer`    | 实体类    |  元素作为卡片的底部 |
| `card-borderless`    | 修饰类    |  无边框的卡片 |
| `card-shadow`    | 修饰类    |  带阴影的卡片 |
| `selected`    | 修饰类    |  选中状态的卡片 |
