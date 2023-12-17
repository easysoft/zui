# 溢出

## 定义

用于控制元素如何处理超出容器的内容的工具类。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in overflowList">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

### 自动

使用工具类 `overflow-auto` 在一个元素的内容溢出该元素的边界时为其添加滚动条。不像 `overflow-scroll` 总是显示滚动条，这个工具类只在需要滚动时才会显示。

::: tabs
== 示例

<Example>
  <div class="border overflow-auto h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>
      春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
      雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
    </p>
  </div>
</Example>

== HTML

```html
<div class="overflow-auto h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

:::

### 隐藏

使用工具类 `overflow-hidden` 来剪切元素中任何溢出该元素边界的内容。

::: tabs
== 示例

<Example>
  <div class="border overflow-hidden h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>
      春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
      雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
    </p>
  </div>
</Example>

== HTML

```html
<div class="overflow-hidden h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

:::

### 可见

使用工具类 `overflow-visible` 来防止元素内的内容被剪切。请注意，任何溢出元素边界的内容都将是可见的。

::: tabs
== 示例

<Example>
  <div class="border overflow-visible h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>
      春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
      雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
    </p>
  </div>
</Example>

== HTML

```html
<div class="overflow-visible h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

:::

### 需要时水平滚动

如果需要，使用工具类 `overflow-x-auto` 来允许水平滚动。

::: tabs
== 示例

<Example>
  <div class="border overflow-x-auto nowrap">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

== HTML

```html
<div class="overflow-x-auto w-16">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

:::

### 需要时垂直滚动

如果需要，使用工具类 `overflow-y-auto` 来允许垂直滚动。

::: tabs
== 示例

<Example>
  <div class="border overflow-y-auto h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

== HTML

```html
<div class="overflow-y-auto h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

:::

### 始终水平滚动

如果需要，使用工具类 `overflow-x-scroll` 来允许水平滚动。

::: tabs
== 示例

<Example>
  <div class="border overflow-x-scroll">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

== HTML

```html
<div class="overflow-x-scroll">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

:::

### 始终垂直滚动

如果需要，使用工具类 `overflow-y-scroll` 来允许水平滚动。

::: tabs
== 示例

<Example>
  <div class="border overflow-y-scroll h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

== HTML

```html
<div class="overflow-y-scroll h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
</div>
```

:::

### 在所有方向上滚动

如果需要，使用工具类 `overflow-scroll` 来允许水平滚动。

::: tabs
== 示例

<Example>
  <div class="border overflow-scroll h-24 nowrap">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

== HTML

```html
<div class="overflow-scroll h-24 nowrap">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
</div>
```

:::

<script setup>
  const overflowList = [
    {name: 'overflow-auto', desc: 'overflow: auto;'},
    {name: 'overflow-hidden', desc: 'overflow: hidden;'},
    {name: 'overflow-clip', desc: 'text-overflow: clip;'},
    {name: 'overflow-visible', desc: 'overflow: visible;'},
    {name: 'overflow-scroll', desc: 'overflow: scroll;'},
    {name: 'overflow-x-auto', desc: 'overflow-x: auto;'},
    {name: 'overflow-y-auto', desc: 'overflow-y: auto;'},
    {name: 'overflow-x-hidden', desc: 'overflow-x: hidden;'},
    {name: 'overflow-y-hidden', desc: 'overflow-y: hidden;'},
    {name: 'overflow-x-visible', desc: 'overflow-x: visible;'},
    {name: 'overflow-y-visible', desc: 'overflow-y: visible;'},
    {name: 'overflow-x-scroll', desc: 'overflow-x: scroll;'},
    {name: 'overflow-y-scroll', desc: 'overflow-y: scroll;'},
  ]
</script>
