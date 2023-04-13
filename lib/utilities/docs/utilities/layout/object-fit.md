# 内容适配

元素的内容应该如何去适应指定容器的高度与宽度。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in objectFitJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

### 包含

使用工具类 `object-contain` 调整元素内容的大小，使其保持在容器内。

<Example class="p-0">
  <div class="bg-surface">
    <img src="/favicon.svg" class="object-contain h-48 w-full">
  </div>
</Example>

```html
<div class="bg-surface">
  <img src="/favicon.svg" class="object-contain h-48 w-full">
</div>
```

### 覆盖

使用工具类 `object-cover` 调整元素内容的大小以覆盖其容器。

<Example class="p-0">
  <div class="bg-surface">
    <img src="/favicon.svg" class="object-cover h-48 w-full">
  </div>
</Example>

```html
<div class="bg-surface">
  <img src="/favicon.svg" class="object-cover h-48 w-full">
</div>
```

### 充满

使用工具类 `object-fill` 拉伸元素的内容以适应其容器。

<Example class="p-0">
  <div class="bg-surface">
    <img src="/favicon.svg" class="object-fill h-48 w-full">
  </div>
</Example>

```html
<div class="bg-surface">
  <img src="/favicon.svg" class="object-fill h-48 w-full">
</div>
```

### 无

使用工具类 `object-none` 以原始大小显示元素的内容，忽略容器大小。

<Example class="p-0">
  <div class="bg-surface">
    <img src="/favicon.svg" class="object-none h-48 w-full">
  </div>
</Example>

```html
<div class="bg-surface">
  <img src="/favicon.svg" class="object-none h-48 w-full">
</div>
```

### 缩小

以原始大小显示元素的内容，但必要时使用 `object-scale-down` 将其缩小以适应其容器。

<Example class="p-0">
  <div class="bg-surface">
    <img src="/favicon.svg" class="object-scale-down h-48 w-full">
  </div>
</Example>

```html
<div class="bg-surface">
  <img src="/favicon.svg" class="object-scale-down h-48 w-full">
</div>
```

<script setup>
  const objectFitJson = [
    {name: 'object-contain', desc: 'object-fit: contain;'},
    {name: 'object-cover', desc: 'object-fit: cover;'},
    {name: 'object-fill', desc: 'object-fit: fill;'},
    {name: 'object-none', desc: 'object-fit: none;'},
    {name: 'object-scale-down', desc: 'object-fit: scale-down;'},
  ]
</script>
