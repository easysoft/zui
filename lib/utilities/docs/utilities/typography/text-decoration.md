# 文本装饰

## 定义

在 ZUI 中，你可以通过如下工具类来设置文本装饰样式：

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in textDecorationList" :key="item.name">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 示例

### 下划线 `underline`

::: tabs

== 示例

<Example background="light-circle">
  <p class="underline">查看客户门户发布说明</p>
</Example>

== HTML

```html
<p class="underline">查看客户门户发布说明</p>
```

:::

### 上划线 `overline`

::: tabs

== 示例

<Example background="light-circle">
  <p class="overline">交付范围已确认</p>
</Example>

== HTML

```html
<p class="overline">交付范围已确认</p>
```

:::

### 中间划线 `line-through`

::: tabs

== 示例

<Example background="light-circle">
  <p class="line-through">原计划：周四 18:00 发布（已取消）</p>
</Example>

== HTML

```html
<p class="line-through">原计划：周四 18:00 发布（已取消）</p>
```

:::

### 无划线 `no-underline`

::: tabs

== 示例

<Example background="light-circle">
  <p class="no-underline">新计划：周五 18:00 发布</p>
</Example>

== HTML

```html
<p class="no-underline">新计划：周五 18:00 发布</p>
```

:::

<script setup>
const textDecorationList = [
    {name: 'underline', desc: 'text-decoration-line: underline;'},
    {name: 'overline', desc: 'text-decoration-line: overline;'},
    {name: 'line-through', desc: 'text-decoration-line: line-through;'},
    {name: 'no-underline', desc: 'text-decoration-line: none;'},
];
</script>
