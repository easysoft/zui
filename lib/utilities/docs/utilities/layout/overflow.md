# 溢出

用于控制元素如何处理超出容器的内容的工具类。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in overflowJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

### 自动

使用工具类 `of-auto` 在一个元素的内容溢出该元素的边界时为其添加滚动条。不像 `of-scroll` 总是显示滚动条，这个工具类只在需要滚动时才会显示。

<Example class="bg-surface">
  <div class="bd of-auto h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>
      春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
      雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
    </p>
  </div>
</Example>

```html
<div class="of-auto h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 隐藏

使用工具类 `of-hidden` 来剪切元素中任何溢出该元素边界的内容。

<Example class="bg-surface">
  <div class="bd of-hidden h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>
      春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
      雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
    </p>
  </div>
</Example>

```html
<div class="of-hidden h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 可见

使用工具类 `of-visible` 来防止元素内的内容被剪切。请注意，任何溢出元素边界的内容都将是可见的。

<Example class="bg-surface">
  <div class="bd of-visible h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>
      春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
      雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
    </p>
  </div>
</Example>

```html
<div class="of-visible h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 需要时水平滚动

如果需要，使用工具类 `of-x-auto` 来允许水平滚动。

<Example class="bg-surface">
  <div class="bd of-x-auto nowrap">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

```html
<div class="of-x-auto w-16">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 需要时垂直滚动

如果需要，使用工具类 `of-y-auto` 来允许垂直滚动。

<Example class="bg-surface">
  <div class="bd of-y-auto h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

```html
<div class="of-y-auto h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 始终水平滚动

如果需要，使用工具类 `of-x-scroll` 来允许水平滚动。

<Example class="bg-surface">
  <div class="bd of-x-scroll">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

```html
<div class="of-x-scroll">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 始终垂直滚动

如果需要，使用工具类 `of-y-scroll` 来允许水平滚动。

<Example class="bg-surface">
  <div class="bd of-y-scroll h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

```html
<div class="of-y-scroll h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
</div>
```

### 在所有方向上滚动

如果需要，使用工具类 `of-scroll` 来允许水平滚动。

<Example class="bg-surface">
  <div class="bd of-scroll h-24 nowrap">
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

```html
<div class="of-scroll h-24 nowrap">
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

<script setup>
  const overflowJson = [
    {name: 'of-auto', desc: 'overflow: auto;'},
    {name: 'of-hidden', desc: 'overflow: hidden;'},
    {name: 'of-clip', desc: 'text-overflow: clip;'},
    {name: 'of-visible', desc: 'overflow: visible;'},
    {name: 'of-scroll', desc: 'overflow: scroll;'},
    {name: 'of-x-auto', desc: 'overflow-x: auto;'},
    {name: 'of-y-auto', desc: 'overflow-y: auto;'},
    {name: 'of-x-hidden', desc: 'overflow-x: hidden;'},
    {name: 'of-y-hidden', desc: 'overflow-y: hidden;'},
    {name: 'of-x-visible', desc: 'overflow-x: visible;'},
    {name: 'of-y-visible', desc: 'overflow-y: visible;'},
    {name: 'of-x-scroll', desc: 'overflow-x: scroll;'},
    {name: 'of-y-scroll', desc: 'overflow-y: scroll;'},
  ]
</script>
