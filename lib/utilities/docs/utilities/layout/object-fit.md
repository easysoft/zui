# 内容适配 Object Fit

元素的内容应该如何去适应指定容器的高度与宽度。

## Contain

使用 `object-contain` 调整元素内容的大小，使其保持在容器内。

<Example>
  <div class="bg-surface">
    <img src="/assets/avatar/avatar.png" class="h-48 w-full object-contain">
  </div>
</Example>

```html
<div class="bg-surface">
  <img src="/assets/avatar/avatar.png" class="h-48 w-full object-contain">
</div>
```

## Cover

使用 `object-cover` 调整元素内容的大小以覆盖其容器。

<Example>
  <div class="bg-surface">
    <img src="/assets/avatar/avatar.png" class="h-48 w-full object-cover">
  </div>
</Example>

```html
<div class="bg-surface">
  <img src="/assets/avatar/avatar.png" class="h-48 w-full object-cover">
</div>
```

## Fill

使用 `object-fill` 拉伸元素的内容以适应其容器。

<Example>
  <div class="bg-surface">
    <img src="/assets/avatar/avatar.png" class="h-48 w-full object-fill">
  </div>
</Example>

```html
<div class="bg-surface">
  <img src="/assets/avatar/avatar.png" class="h-48 w-full object-fill">
</div>
```

## None

使用 `object-none` 以原始大小显示元素的内容，忽略容器大小。

<Example>
  <div class="bg-surface">
    <img src="/assets/avatar/avatar.png" class="h-48 w-full object-none">
  </div>
</Example>

```html
<div class="bg-surface">
  <img src="/assets/avatar/avatar.png" class="h-48 w-full object-none">
</div>
```

## Scale Down

以原始大小显示元素的内容，但必要时使用 `object-scale-down` 将其缩小以适应其容器。

<Example>
  <div class="bg-surface">
    <img src="/assets/avatar/avatar.png" class="h-48 w-full object-scale-down">
  </div>
</Example>

```html
<div class="bg-surface">
  <img src="/assets/avatar/avatar.png" class="h-48 w-full object-scale-down">
</div>
```

## 默认类参考

<Example>
  <table class="table">
    <thead>
      <tr>
        <th>修饰类</th>
        <th>定义</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in objectFitJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const objectFitJson = [
    {name: 'object-contain', desc: 'object-fit: contain;'},
    {name: 'object-cover', desc: 'object-fit: cover;'},
    {name: 'object-fill', desc: 'object-fit: fill;'},
    {name: 'object-none', desc: 'object-fit: none;'},
    {name: 'object-scale-down', desc: 'object-fit: scale-down;'},
  ]
</script>