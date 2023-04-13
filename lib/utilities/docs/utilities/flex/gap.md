# gap

使用`gap-*`应用CSS属性`gap`设置Flex容器中元素间距。

<script setup>
  const arrayGap = [
    'gap-0',
    'gap-x-0',
    'gap-y-0',
    'gap-1',
    'gap-x-1',
    'gap-y-1',
    'gap-2',
    'gap-x-2',
    'gap-y-2',
    'gap-3',
    'gap-x-3',
    'gap-y-3',
    'gap-4',
    'gap-x-4',
    'gap-y-4',
    'gap-5',
    'gap-x-5',
    'gap-y-5',
    'gap-6',
    'gap-x-6',
    'gap-y-6',
    'gap-7',
    'gap-x-7',
    'gap-y-7',
    'gap-8',
    'gap-x-8',
    'gap-y-8',
  ];
</script>

<Example v-for="item in arrayGap">
  <h3>{{item}}</h3>
  <div :class="item" class="inline-flex flex-wrap -bg-stripes-blue" >
    <div v-for="index in 12" class="bg-primary w-48 h-16">
      <div class="mt-5 text-canvas text-center">{{index}}</div>
    </div>
  </div>
</Example>

```html
<div class="flex flex-wrap gap-* ...">
</div>
```
