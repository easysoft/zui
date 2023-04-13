# shrink

使用`shrink`应用CSS`flex-shrinl`属性设置Flex容器中元素是否缩小。

<Example class="inline-flex">
  <div class="w-64 flex gap-3 -bg-stripes-blue">
    <div class="primary flex -justify-center -items-center w-48 h-16 shrink">shrink</div>
    <div class="primary flex -justify-center -items-center w-48 h-16 shrink-0">shrink-0</div>
  </div>
</Example>

```html
  <div class="w-64 flex gap-3">
    <div class="w-48 h-16 shrink"></div>
    <div class="w-48 h-16 shrink-0"></div>
  </div>
```
