# 浮动

## 定义

用于设置元素浮动或清除浮动影响的工具类。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in floatList">
        <td class="font-mono nowrap">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

::: tip 提示
浮动应当仅适用于实现文字环绕效果，布局请使用 [Flex 工具类](/utilities/flex/utilities/flex.html)。
:::

## 效果展示

### 向右浮动

使用工具类 `pull-right` 将一个元素浮动到其容器的右边。

::: tabs
== 示例

<Example background="light-grid">
  <div class="clearfix">
    <img class="pull-right ml-4 h-24" src="/favicon.svg">
    <p>So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
    <p>月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样；又像笼着轻纱的梦。</p>
  </div>
</Example>

== HTML

```html
<div class="clearfix">
  <img class="pull-right ml-2 h-24" src="/favicon.svg">
  <p>So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
    <p>月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样；又像笼着轻纱的梦。</p>
</div>
```

:::

### 向左浮动

使用工具类 `pull-left` 将一个元素浮动到其容器的左边。

::: tabs
== 示例

<Example background="light-grid">
  <div class="clearfix">
    <img class="pull-left mr-4 h-24" src="/favicon.svg">
    <p>So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
    <p>月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样；又像笼着轻纱的梦。</p>
  </div>
</Example>

== HTML

```html
<div class="clearfix">
  <img class="pull-left mr-4 h-24" src="/favicon.svg">
  <p>So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
    <p>月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样；又像笼着轻纱的梦。</p>
</div>
```

:::

<script setup>
const floatList = [
    {name: 'pull-right', desc: 'float: right;'},
    {name: 'pull-left', desc: 'float: left;'},
    {name: 'clearfix', desc: '.clearfix::after {content: ""; display: block; clear: both;}'},
];
</script>
