# 卡片

## 使用方法

将内容放置在 `<div class="card">` 内即可创建一个卡片组件。

::: tabs

== 示例

<Example class="gap-2 col">
  <div class="card">
    <div class="card-header">
      <h3>客户门户升级</h3>
    </div>
    <div class="card-body">
      支持客户自助查询工单进展，减少重复咨询。
    </div>
    <div class="card-footer">
      负责人：林悦 · 计划 9 月 30 日发布
    </div>
  </div>
</Example>

== HTML

```html
<div class="card">
  <div class="card-header">
    <h3>客户门户升级</h3>
  </div>
  <div class="card-body">
    支持客户自助查询工单进展，减少重复咨询。
  </div>
  <div class="card-footer">
    负责人：林悦 · 计划 9 月 30 日发布
  </div>
</div>
```

:::

## JavaScript 组件

除 CSS 卡片外，`Card` 和 `CardList` 也提供原生包装器与 Preact 组件。通过公开入口导入可避免依赖库内 `src/*` 路径。

```js
import {Card, CardList} from '@zui/cards';

new Card('#cardExample', {
  title: '客户门户升级',
  subtitle: '客户服务 · 九月迭代',
  content: '支持客户自助查询工单进展，减少重复咨询。',
  selected: true,
});

new CardList('#cardListExample', {
  countPerRow: 3,
  items: [{title: '客户门户升级'}, {title: '移动端工单'}],
});
```

```tsx
import {Card, CardList} from '@zui/cards/react';

<Card title="客户门户升级" content="支持客户自助查询工单进展，减少重复咨询。" />
<CardList countPerRow={3} items={[{title: '客户门户升级'}]} />
```

## 选中状态

卡片支持选中状态，添加 `selected` 类。

::: tabs

== 示例

<Example class="gap-2 col">
  <div class="card">
    <div class="card-body">
      团队知识库 · 待选择
    </div>
  </div>
  <div class="card selected">
    <div class="card-body">
      客户门户升级 · 已选择
    </div>
  </div>
</Example>

== HTML

```html
<div class="card">
  <div class="card-body">
    团队知识库 · 待选择
  </div>
</div>
<div class="card selected">
  <div class="card-body">
    客户门户升级 · 已选择
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
